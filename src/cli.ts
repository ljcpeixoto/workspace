#!/usr/bin/env node

import { Command } from 'commander';
import * as path from 'path';
import { JpaAnalyzer, analyzeAndSaveJpaEntities } from './jpa-analyzer';
import { AnalyzerConfig } from './types';

const program = new Command();

program
  .name('jpa-analyzer')
  .description('Analyze Java JPA Entity files and extract entity information')
  .version('1.0.0');

program
  .command('analyze')
  .description('Analyze JPA entities from Java source files')
  .argument('<sources...>', 'Source directories or files to analyze')
  .option('-o, --output <file>', 'Output JSON file path', 'jpa-analysis-result.json')
  .option('--exclude-private', 'Exclude private fields from analysis', false)
  .option('--exclude-inherited', 'Exclude inherited fields from analysis', false)
  .option('--include <patterns...>', 'File patterns to include (glob)', ['**/*.java'])
  .option('--exclude <patterns...>', 'File patterns to exclude (glob)', ['**/target/**', '**/build/**', '**/.git/**'])
  .option('--max-depth <number>', 'Maximum directory traversal depth', '10')
  .option('--follow-symlinks', 'Follow symbolic links', false)
  .option('--verbose', 'Enable verbose logging', false)
  .action(async (sources: string[], options) => {
    try {
      if (options.verbose) {
        console.log('Starting JPA analysis with options:', options);
      }

      const config: Partial<AnalyzerConfig> = {
        outputPath: options.output,
        includePrivateFields: !options.excludePrivate,
        includeInheritedFields: !options.excludeInherited,
        includePatterns: options.include,
        excludePatterns: options.exclude,
        maxDepth: parseInt(options.maxDepth),
        followSymlinks: options.followSymlinks
      };

      const result = await analyzeAndSaveJpaEntities(sources, options.output, config);
      
      console.log('\n=== Analysis Summary ===');
      console.log(`Total entities found: ${result.metadata.totalEntities}`);
      console.log(`Total relationships: ${result.metadata.totalRelationships}`);
      console.log(`Source files analyzed: ${result.metadata.sourceFiles.length}`);
      console.log(`Output saved to: ${options.output}`);
      
      if (options.verbose) {
        console.log('\n=== Entities Found ===');
        result.entities.forEach(entity => {
          console.log(`- ${entity.fullyQualifiedName} (${entity.fields.length} fields, ${entity.relationships.length} relationships)`);
        });
      }

    } catch (error) {
      console.error('Error during analysis:', error);
      process.exit(1);
    }
  });

program
  .command('validate')
  .description('Validate Java source files for JPA entities')
  .argument('<paths...>', 'Source paths to validate')
  .action(async (paths: string[]) => {
    try {
      const config: AnalyzerConfig = {
        sourcePaths: paths,
        includePrivateFields: true,
        includeInheritedFields: true,
        includePatterns: ['**/*.java'],
        excludePatterns: [],
        followSymlinks: false,
        maxDepth: 10
      };

      const analyzer = new JpaAnalyzer(config);
      const files = await analyzer.discoverFiles(paths);
      
      console.log(`Found ${files.length} Java files to validate`);
      
      let validFiles = 0;
      let invalidFiles = 0;
      
      for (const file of files) {
        try {
          const entity = await analyzer.parseFile(file);
          if (entity) {
            console.log(`✓ ${file} - Valid JPA entity: ${entity.className}`);
            validFiles++;
          } else {
            console.log(`- ${file} - Not a JPA entity`);
          }
        } catch (error) {
          console.log(`✗ ${file} - Parse error: ${error instanceof Error ? error.message : error}`);
          invalidFiles++;
        }
      }
      
      console.log(`\nValidation complete:`);
      console.log(`  Valid JPA entities: ${validFiles}`);
      console.log(`  Invalid files: ${invalidFiles}`);
      console.log(`  Non-entity files: ${files.length - validFiles - invalidFiles}`);
      
      if (invalidFiles > 0) {
        process.exit(1);
      }
    } catch (error) {
      console.error('Validation failed:', error);
      process.exit(1);
    }
  });

program
  .command('info')
  .description('Show information about Java source files')
  .argument('<paths...>', 'Source paths to analyze')
  .option('--detailed', 'Show detailed file information', false)
  .action(async (paths: string[], options) => {
    try {
      const config: AnalyzerConfig = {
        sourcePaths: paths,
        includePrivateFields: true,
        includeInheritedFields: true,
        includePatterns: ['**/*.java'],
        excludePatterns: [],
        followSymlinks: false,
        maxDepth: 10
      };

      const analyzer = new JpaAnalyzer(config);
      const files = await analyzer.discoverFiles(paths);
      
      console.log('=== Source Files Info ===');
      console.log(`Source paths: ${paths.join(', ')}`);
      console.log(`Total Java files found: ${files.length}`);
      
      if (options.detailed) {
        console.log('\n=== File Details ===');
        files.forEach((file: string) => {
          console.log(`  ${file}`);
        });
      }
      
      // Quick analysis to count entities
      let entityCount = 0;
      for (const file of files) {
        try {
          const entity = await analyzer.parseFile(file);
          if (entity) {
            entityCount++;
          }
        } catch (error) {
          // Ignore parse errors for info command
        }
      }
      
      console.log(`\nEstimated JPA entities: ${entityCount}`);
      
    } catch (error) {
      console.error('Error analyzing files:', error);
      process.exit(1);
    }
  });

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

program.parse();