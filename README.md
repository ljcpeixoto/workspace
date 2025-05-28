# JPA Entity Analyzer

A TypeScript utility for analyzing Java JPA Entity files using ANTLR4 to extract entity information and relationships for building interactive entity relationship diagrams.

## Overview

This utility parses Java source files containing JPA entities and extracts comprehensive information about:
- Entity classes and their metadata
- Field definitions with column mappings
- Relationships between entities (OneToOne, OneToMany, ManyToOne, ManyToMany), with detailed join column, join table, and attribute (e.g., `orphanRemoval`, `cascade`, `fetch`) information.
- JPA annotations and their attributes, with robust parsing for various value types and nested structures.
- Table and schema information, including for join tables.

The output is a structured JSON format suitable for building interactive visualizations of entity relationships.

## Installation

```bash
npm install
npm run build
```

## Usage

### Command Line Interface

The analyzer provides a CLI with several commands:

#### Analyze Command
```bash
# Analyze entities and save to JSON file
npm run analyze -- <source-path> --output <output-file>

# Example
npm run analyze -- examples/java --output entities.json

# Multiple source paths
npm run analyze -- src/main/java src/test/java --output entities.json

# With additional options
npm run analyze -- src/main/java \
  --output entities.json \
  --include-private \
  --include-inherited \
  --max-depth 10
```

#### Validate Command
```bash
# Validate Java files without full analysis
npm run validate -- <source-path>
```

#### Info Command
```bash
# Get information about discovered files
npm run info -- <source-path>
```

### Programmatic API

```typescript
import { JpaAnalyzer, AnalyzerConfig } from 'jpa-entity-analyzer';

// Create analyzer with configuration
const config: AnalyzerConfig = {
  sourcePaths: ['src/main/java'],
  outputPath: 'entities.json',
  includePrivateFields: true,
  includeInheritedFields: true,
  includePatterns: ['**/*.java'],
  excludePatterns: ['**/test/**'],
  followSymlinks: false,
  maxDepth: 10
};

const analyzer = new JpaAnalyzer(config);

// Analyze entities
const result = await analyzer.analyze();

// Save to file
await analyzer.saveToFile(result, 'entities.json');

// Get analysis summary
const summary = analyzer.getSummary(result);
console.log(`Found ${summary.totalEntities} entities with ${summary.totalRelationships} relationships`);
```

## JSON Output Format

The analyzer outputs a structured JSON file with the following format:

### Root Structure
```typescript
interface JpaAnalysisResult {
  entities: JpaEntity[];
  metadata: {
    totalEntities: number;
    totalRelationships: number;
    timestamp: string;
    analyzerVersion: string;
    sourceFiles: string[];
  };
}
```

### Entity Structure
```typescript
interface JpaEntity {
  className: string;                    // Simple class name
  fullyQualifiedName: string;          // Full package.ClassName
  packageName: string;                 // Package name
  tableName: string;                   // Database table name
  schemaName?: string;                 // Database schema (if specified)
  catalogName?: string;                // Database catalog (if specified)
  fields: EntityField[];              // All entity fields
  relationships: EntityRelationship[]; // All relationships
  parentClass?: string;                // Parent class (inheritance)
  isAbstract: boolean;                 // Whether class is abstract
  inheritanceStrategy?: string;        // JPA inheritance strategy
  discriminatorColumn?: string;        // Discriminator column name
  discriminatorValue?: string;         // Discriminator value
  annotations: string[];               // JPA annotations on class
  sourceFile: string;                  // Source file path
}
```

### Field Structure
```typescript
interface EntityField {
  name: string;           // Field name
  type: string;           // Java type
  isId: boolean;          // Primary key field
  isGenerated: boolean;   // Auto-generated value
  columnName?: string;    // Database column name
  nullable: boolean;      // Nullable constraint
  unique: boolean;        // Unique constraint
  length?: number;        // Column length
  insertable: boolean;    // Insertable flag
  updatable: boolean;     // Updatable flag
  annotations: string[];  // JPA annotations on field
}
```

### Relationship Structure
```typescript
interface JoinColumnDetails {
  name: string;                         // Name of the join column
  referencedColumnName?: string;        // Referenced column name in the target entity
  // Other attributes like unique, nullable, etc., can be added if parsed
}

interface EntityRelationship {
  fieldName: string;                    // Field name defining relationship
  type: RelationshipType;               // OneToOne | OneToMany | ManyToOne | ManyToMany
  targetEntity: string;                 // Target entity class name
  fetchType: FetchType;                 // LAZY | EAGER
  cascadeTypes: CascadeType[];          // Cascade operations
  optional: boolean;                    // Whether relationship is optional
  mappedBy?: string;                    // Mapped by field (bidirectional)
  isOwningSide: boolean;                // Owning side of relationship
  orphanRemoval?: boolean;              // For @OneToOne, @OneToMany: if orphanRemoval is true
  
  // For relationships using @JoinColumn (typically ToOne or unidirectional OneToMany)
  joinColumns?: JoinColumnDetails[];    // Array of join column details (usually one)
  joinColumnReferencedColumnName?: string; // Top-level referencedColumnName from a simple @JoinColumn (convenience)

  // For relationships using @JoinTable (typically ManyToMany or unidirectional OneToMany)
  joinTable?: string;                   // Join table name
  joinTableCatalog?: string;            // Catalog for the join table
  joinTableSchema?: string;             // Schema for the join table
  // joinColumns array (defined above) is also used for @JoinTable's joinColumns attribute
  inverseJoinColumns?: JoinColumnDetails[]; // For @JoinTable's inverseJoinColumns attribute
  joinTableForeignKeyName?: string;     // Name of FK constraint from owning entity to join table
  joinTableInverseForeignKeyName?: string; // Name of FK constraint from join table to non-owning entity
}
```

### Enums
```typescript
enum RelationshipType {
  ONE_TO_ONE = 'OneToOne',
  ONE_TO_MANY = 'OneToMany',
  MANY_TO_ONE = 'ManyToOne',
  MANY_TO_MANY = 'ManyToMany'
}

enum FetchType {
  LAZY = 'LAZY',
  EAGER = 'EAGER'
}

enum CascadeType {
  ALL = 'ALL',
  PERSIST = 'PERSIST',
  MERGE = 'MERGE',
  REMOVE = 'REMOVE',
  REFRESH = 'REFRESH',
  DETACH = 'DETACH'
}
```

## Example Output

```json
{
  "entities": [
    {
      "className": "User",
      "fullyQualifiedName": "com.example.entities.User",
      "packageName": "com.example.entities",
      "tableName": "users",
      "schemaName": "public",
      "fields": [
        {
          "name": "id",
          "type": "Long",
          "isId": true,
          "isGenerated": true,
          "columnName": "user_id",
          "nullable": false,
          "unique": false,
          "insertable": true,
          "updatable": true,
          "annotations": ["Id", "GeneratedValue", "Column"]
        },
        {
          "name": "username",
          "type": "String",
          "isId": false,
          "isGenerated": false,
          "columnName": "username",
          "nullable": false,
          "unique": true,
          "length": 50,
          "insertable": true,
          "updatable": true,
          "annotations": ["Column"]
        }
      ],
      "relationships": [
        {
          "fieldName": "orders",
          "type": "OneToMany",
          "targetEntity": "Order",
          "fetchType": "LAZY",
          "cascadeTypes": ["ALL"],
          "optional": true,
          "mappedBy": "user",
          "isOwningSide": false
        }
      ],
      "annotations": ["Entity", "Table"],
      "isAbstract": false,
      "sourceFile": "/path/to/User.java"
    }
  ],
  "metadata": {
    "totalEntities": 1,
    "totalRelationships": 1,
    "timestamp": "2025-05-24T14:44:31.110Z",
    "analyzerVersion": "1.0.0",
    "sourceFiles": ["/path/to/User.java"]
  }
}
```

## Supported JPA Annotations

The analyzer recognizes and extracts information from the following JPA annotations:

### Class-level Annotations
- `@Entity` - Marks class as JPA entity
- `@Table` - Specifies table name, schema, catalog
- `@Inheritance` - Inheritance strategy
- `@DiscriminatorColumn` - Discriminator column configuration
- `@DiscriminatorValue` - Discriminator value

### Field-level Annotations
- `@Id` - Primary key field
- `@GeneratedValue` - Auto-generated values
- `@Column` - Column mapping and constraints
- `@OneToOne` - One-to-one relationships
- `@OneToMany` - One-to-many relationships
- `@ManyToOne` - Many-to-one relationships
- `@ManyToMany` - Many-to-many relationships
- `@JoinColumn` - Join column specification (attributes like `name`, `referencedColumnName`, `nullable`, etc. are parsed)
- `@JoinTable` - Join table specification (attributes like `name`, `schema`, `catalog`, `joinColumns`, `inverseJoinColumns`, `foreignKey`, `inverseForeignKey` are parsed, including nested `@JoinColumn` and `@ForeignKey` details)
- `@Enumerated` - Enum field mapping
- Relationship-specific attributes like `orphanRemoval`, `fetch`, `cascade`, `optional`, `mappedBy` are parsed.

## Configuration Options

```typescript
interface AnalyzerConfig {
  sourcePaths: string[];              // Directories to analyze
  outputPath?: string;                // Output file path
  includePrivateFields: boolean;      // Include private fields
  includeInheritedFields: boolean;    // Include inherited fields
  includePatterns: string[];          // File patterns to include
  excludePatterns: string[];          // File patterns to exclude
  followSymlinks: boolean;            // Follow symbolic links
  maxDepth: number;                   // Max directory depth
}
```

## Error Handling

The analyzer includes comprehensive error handling:
- Invalid Java syntax is reported with file and line information
- Missing files or directories are handled gracefully
- Parsing errors don't stop the analysis of other files
- Detailed error messages help identify issues

## Performance

- Uses ANTLR4 for robust and efficient parsing
- Processes files in parallel where possible
- Memory-efficient streaming for large codebases
- Configurable depth limits to prevent infinite recursion

## Integration with Display Applications

The JSON output format is designed to be easily consumed by visualization frameworks:

### For Entity Relationship Diagrams
- Use `entities` array to create entity boxes
- Use `relationships` array to draw connections
- Use `fields` to show entity attributes
- Use `isOwningSide` to determine relationship direction

### For Database Schema Visualization
- Use `tableName`, `schemaName`, `catalogName` for database mapping
- Use `columnName` from fields for column mapping
- Use `joinColumn` and `joinTable` for foreign key relationships

### For Code Navigation
- Use `sourceFile` to link back to source code
- Use `fullyQualifiedName` for precise class identification
- Use `packageName` for package-based organization

## Dependencies

- **antlr4ts**: TypeScript runtime for ANTLR4
- **typescript**: TypeScript compiler
- **fs-extra**: Enhanced file system operations
- **glob**: File pattern matching
- **commander**: Command-line interface framework

## License

MIT License - see LICENSE file for details.