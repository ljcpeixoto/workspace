/**
 * Represents the type of relationship between JPA entities
 */
export enum RelationshipType {
  ONE_TO_ONE = 'OneToOne',
  ONE_TO_MANY = 'OneToMany',
  MANY_TO_ONE = 'ManyToOne',
  MANY_TO_MANY = 'ManyToMany'
}

/**
 * Represents the fetch type for JPA relationships
 */
export enum FetchType {
  LAZY = 'LAZY',
  EAGER = 'EAGER'
}

/**
 * Represents the cascade type for JPA relationships
 */
export enum CascadeType {
  ALL = 'ALL',
  PERSIST = 'PERSIST',
  MERGE = 'MERGE',
  REMOVE = 'REMOVE',
  REFRESH = 'REFRESH',
  DETACH = 'DETACH'
}

/**
 * Represents a field/property in a JPA entity
 */
export interface EntityField {
  /** Name of the field */
  name: string;
  /** Java type of the field */
  type: string;
  /** Whether the field is annotated with @Id */
  isId: boolean;
  /** Whether the field is annotated with @GeneratedValue */
  isGenerated: boolean;
  /** Column name if specified with @Column */
  columnName?: string;
  /** Whether the field is nullable */
  nullable: boolean;
  /** Whether the field is unique */
  unique: boolean;
  /** Length constraint if specified */
  length?: number;
  /** Whether the field is insertable */
  insertable: boolean;
  /** Whether the field is updatable */
  updatable: boolean;
  /** JPA annotations found on this field */
  annotations: string[];
}

/**
 * Represents a relationship between JPA entities
 */
export interface EntityRelationship {
  /** Name of the field that defines this relationship */
  fieldName: string;
  /** Type of relationship */
  type: RelationshipType;
  /** Target entity class name */
  targetEntity: string;
  /** Fetch type */
  fetchType: FetchType;
  /** Cascade types */
  cascadeTypes: CascadeType[];
  /** Whether the relationship is optional */
  optional: boolean;
  /** Mapped by field name (for bidirectional relationships) */
  mappedBy?: string;
  /** Join column name */
  joinColumn?: string;
  /** Join table name (for ManyToMany) */
  joinTable?: string;
  /** Whether this is the owning side of the relationship */
  isOwningSide: boolean;
}

/**
 * Represents a JPA entity
 */
export interface JpaEntity {
  /** Simple class name */
  className: string;
  /** Fully qualified class name */
  fullyQualifiedName: string;
  /** Package name */
  packageName: string;
  /** Table name (from @Table annotation or derived from class name) */
  tableName: string;
  /** Schema name if specified */
  schemaName?: string;
  /** Catalog name if specified */
  catalogName?: string;
  /** All fields/properties in the entity */
  fields: EntityField[];
  /** All relationships defined in this entity */
  relationships: EntityRelationship[];
  /** Parent class if this entity extends another entity */
  parentClass?: string;
  /** Whether this is an abstract entity */
  isAbstract: boolean;
  /** Inheritance strategy if applicable */
  inheritanceStrategy?: string;
  /** Discriminator column if applicable */
  discriminatorColumn?: string;
  /** Discriminator value if applicable */
  discriminatorValue?: string;
  /** All JPA annotations found on the class */
  annotations: string[];
  /** Source file path */
  sourceFile: string;
}

/**
 * Represents the complete analysis result of JPA entities
 */
export interface JpaAnalysisResult {
  /** All entities found in the analysis */
  entities: JpaEntity[];
  /** Analysis metadata */
  metadata: {
    /** Total number of entities analyzed */
    totalEntities: number;
    /** Total number of relationships found */
    totalRelationships: number;
    /** Analysis timestamp */
    timestamp: string;
    /** Version of the analyzer */
    analyzerVersion: string;
    /** Source files analyzed */
    sourceFiles: string[];
  };
}

/**
 * Configuration options for the JPA analyzer
 */
export interface AnalyzerConfig {
  /** Source directories to analyze */
  sourcePaths: string[];
  /** Output file path for the JSON result */
  outputPath?: string;
  /** Whether to include private fields */
  includePrivateFields: boolean;
  /** Whether to include inherited fields */
  includeInheritedFields: boolean;
  /** File patterns to include (glob patterns) */
  includePatterns: string[];
  /** File patterns to exclude (glob patterns) */
  excludePatterns: string[];
  /** Whether to follow symbolic links */
  followSymlinks: boolean;
  /** Maximum depth for directory traversal */
  maxDepth: number;
}