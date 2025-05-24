import * as fs from 'fs-extra';
import * as path from 'path';
import { glob } from 'glob';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { Java20Lexer } from './generated/Java20Lexer';
import { Java20Parser } from './generated/Java20Parser';
import { JpaEntityVisitor } from './jpa-entity-visitor';
import { 
  JpaEntity, 
  JpaAnalysisResult, 
  AnalyzerConfig 
} from './types';

/**
 * Main JPA Entity Analyzer class
 */
export class JpaAnalyzer {
  private config: AnalyzerConfig;

  constructor(config: Partial<AnalyzerConfig> = {}) {
    this.config = {
      sourcePaths: [],
      includePrivateFields: true,
      includeInheritedFields: true,
      includePatterns: ['**/*.java'],
      excludePatterns: ['**/target/**', '**/build/**', '**/.git/**'],
      followSymlinks: false,
      maxDepth: 10,
      ...config
    };
  }

  /**
   * Analyzes Java source files and extracts JPA entity information
   * @param sourcePaths Array of source directory paths or file paths
   * @returns Promise resolving to JPA analysis result
   */
  async analyze(sourcePaths?: string[]): Promise<JpaAnalysisResult> {
    const pathsToAnalyze = sourcePaths || this.config.sourcePaths;
    
    if (pathsToAnalyze.length === 0) {
      throw new Error('No source paths provided for analysis');
    }

    console.log('Starting JPA entity analysis...');
    console.log('Source paths:', pathsToAnalyze);

    const javaFiles = await this.findJavaFiles(pathsToAnalyze);
    console.log(`Found ${javaFiles.length} Java files to analyze`);

    const entities: JpaEntity[] = [];
    const sourceFiles: string[] = [];

    for (const filePath of javaFiles) {
      try {
        console.log(`Analyzing: ${filePath}`);
        const entity = await this.analyzeFile(filePath);
        if (entity) {
          entities.push(entity);
          sourceFiles.push(filePath);
        }
      } catch (error) {
        console.warn(`Failed to analyze ${filePath}:`, error);
      }
    }

    const result: JpaAnalysisResult = {
      entities,
      metadata: {
        totalEntities: entities.length,
        totalRelationships: entities.reduce((sum, entity) => sum + entity.relationships.length, 0),
        timestamp: new Date().toISOString(),
        analyzerVersion: '1.0.0',
        sourceFiles
      }
    };

    console.log(`Analysis complete. Found ${entities.length} JPA entities.`);
    return result;
  }

  /**
   * Parses a single Java file for JPA entities
   * @param filePath Path to the Java file
   * @returns Promise resolving to JPA entity or null if not an entity
   */
  async parseFile(filePath: string): Promise<JpaEntity | null> {
    return this.analyzeFile(filePath);
  }

  /**
   * Analyzes a single Java file
   * @param filePath Path to the Java file
   * @returns Promise resolving to JPA entity or null if not an entity
   */
  private async analyzeFile(filePath: string): Promise<JpaEntity | null> {
    const content = await fs.readFile(filePath, 'utf-8');
    
    // Quick check if file contains JPA annotations
    if (!this.containsJpaAnnotations(content)) {
      return null;
    }

    try {
      // Parse the Java file using ANTLR
      const inputStream = new ANTLRInputStream(content);
      const lexer = new Java20Lexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new Java20Parser(tokenStream);

      // Parse the compilation unit
      const tree = parser.compilationUnit();

      // Visit the parse tree to extract JPA entity information
      const visitor = new JpaEntityVisitor();
      const entities = visitor.visitCompilationUnit(tree);

      // Set the source file for each entity
      entities.forEach(entity => {
        entity.sourceFile = filePath;
      });

      return entities.length > 0 ? entities[0] : null;
    } catch (error) {
      console.error(`Error parsing ${filePath}:`, error);
      return null;
    }
  }

  /**
   * Finds all Java files in the specified paths
   * @param paths Array of directory or file paths
   * @returns Promise resolving to array of Java file paths
   */
  async discoverFiles(paths?: string[]): Promise<string[]> {
    const pathsToUse = paths || this.config.sourcePaths;
    return this.findJavaFiles(pathsToUse);
  }

  /**
   * Finds all Java files in the specified paths
   * @param paths Array of directory or file paths
   * @returns Promise resolving to array of Java file paths
   */
  private async findJavaFiles(paths: string[]): Promise<string[]> {
    const allFiles: string[] = [];

    for (const sourcePath of paths) {
      const stat = await fs.stat(sourcePath);
      
      if (stat.isFile() && sourcePath.endsWith('.java')) {
        allFiles.push(path.resolve(sourcePath));
      } else if (stat.isDirectory()) {
        const patterns = this.config.includePatterns.map(pattern => 
          path.join(sourcePath, pattern)
        );

        for (const pattern of patterns) {
          const files = await glob(pattern, {
            ignore: this.config.excludePatterns,
            follow: this.config.followSymlinks,
            maxDepth: this.config.maxDepth
          });
          
          allFiles.push(...files.map(f => path.resolve(f)));
        }
      }
    }

    // Remove duplicates
    return [...new Set(allFiles)];
  }

  /**
   * Quick check if file content contains JPA annotations
   * @param content File content
   * @returns True if file likely contains JPA entities
   */
  private containsJpaAnnotations(content: string): boolean {
    const jpaAnnotations = [
      '@Entity',
      '@Table',
      '@Id',
      '@GeneratedValue',
      '@Column',
      '@OneToOne',
      '@OneToMany',
      '@ManyToOne',
      '@ManyToMany',
      '@JoinColumn',
      '@JoinTable',
      '@MappedSuperclass',
      '@Embeddable',
      '@Embedded'
    ];

    return jpaAnnotations.some(annotation => content.includes(annotation));
  }

  /**
   * Saves the analysis result to a JSON file
   * @param result Analysis result
   * @param outputPath Output file path
   */
  async saveResult(result: JpaAnalysisResult, outputPath?: string): Promise<void> {
    const filePath = outputPath || this.config.outputPath || 'jpa-analysis-result.json';
    await fs.writeJson(filePath, result, { spaces: 2 });
    console.log(`Analysis result saved to: ${filePath}`);
  }

  /**
   * Creates a new analyzer instance with the specified configuration
   * @param config Analyzer configuration
   * @returns New JpaAnalyzer instance
   */
  static create(config: Partial<AnalyzerConfig> = {}): JpaAnalyzer {
    return new JpaAnalyzer(config);
  }
}

/**
 * Convenience function to analyze JPA entities from source paths
 * @param sourcePaths Array of source directory paths
 * @param config Optional analyzer configuration
 * @returns Promise resolving to JPA analysis result
 */
export async function analyzeJpaEntities(
  sourcePaths: string[], 
  config: Partial<AnalyzerConfig> = {}
): Promise<JpaAnalysisResult> {
  const analyzer = new JpaAnalyzer(config);
  return analyzer.analyze(sourcePaths);
}

/**
 * Convenience function to analyze and save JPA entities
 * @param sourcePaths Array of source directory paths
 * @param outputPath Output JSON file path
 * @param config Optional analyzer configuration
 * @returns Promise resolving to JPA analysis result
 */
export async function analyzeAndSaveJpaEntities(
  sourcePaths: string[], 
  outputPath: string,
  config: Partial<AnalyzerConfig> = {}
): Promise<JpaAnalysisResult> {
  const analyzer = new JpaAnalyzer({ ...config, outputPath });
  const result = await analyzer.analyze(sourcePaths);
  await analyzer.saveResult(result);
  return result;
}