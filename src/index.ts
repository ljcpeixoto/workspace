/**
 * JPA Entity Analyzer - Main exports
 * 
 * This module provides utilities for analyzing Java JPA Entity files
 * and extracting entity information including relationships, fields,
 * and annotations.
 */

// Main analyzer classes
export { JpaAnalyzer, analyzeJpaEntities, analyzeAndSaveJpaEntities } from './jpa-analyzer';
export { JpaEntityVisitor } from './jpa-entity-visitor';

// Type definitions
export {
  JpaEntity,
  EntityField,
  EntityRelationship,
  JpaAnalysisResult,
  AnalyzerConfig,
  RelationshipType,
  FetchType,
  CascadeType
} from './types';

// Re-export ANTLR generated classes for advanced usage
export { Java20Lexer } from './generated/Java20Lexer';
export { Java20Parser } from './generated/Java20Parser';
export { Java20ParserVisitor } from './generated/Java20ParserVisitor';