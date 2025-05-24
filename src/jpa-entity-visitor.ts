import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Java20ParserVisitor } from './generated/Java20ParserVisitor';
import { 
  CompilationUnitContext,
  OrdinaryCompilationUnitContext,
  ClassDeclarationContext,
  NormalClassDeclarationContext,
  FieldDeclarationContext,
  AnnotationContext,
  VariableDeclaratorContext,
  PackageDeclarationContext,
  ImportDeclarationContext,
  ClassBodyDeclarationContext,
  ClassMemberDeclarationContext,
  TopLevelClassOrInterfaceDeclarationContext,
  TypeIdentifierContext,
  ClassBodyContext,
  VariableDeclaratorListContext,
  UnannTypeContext,
  ClassModifierContext
} from './generated/Java20Parser';
import {
  JpaEntity,
  EntityField,
  EntityRelationship,
  RelationshipType,
  FetchType,
  CascadeType
} from './types';

export class JpaEntityVisitor extends AbstractParseTreeVisitor<any> implements Java20ParserVisitor<any> {
  private entities: JpaEntity[] = [];
  private currentEntity: JpaEntity | null = null;
  private packageName: string = '';
  private imports: Set<string> = new Set();

  protected defaultResult(): any {
    return null;
  }

  visitCompilationUnit(ctx: CompilationUnitContext): JpaEntity[] {
    this.entities = [];
    this.packageName = '';
    this.imports = new Set();

    // Handle ordinary compilation unit (most common case)
    const ordinaryUnit = ctx.ordinaryCompilationUnit();
    if (ordinaryUnit) {
      this.visitOrdinaryCompilationUnit(ordinaryUnit);
    }

    return this.entities;
  }

  visitOrdinaryCompilationUnit(ctx: OrdinaryCompilationUnitContext): void {
    // Extract package declaration
    const packageDecl = ctx.packageDeclaration();
    if (packageDecl) {
      this.visitPackageDeclaration(packageDecl);
    }

    // Extract imports
    const importDecls = ctx.importDeclaration();
    for (const importDecl of importDecls) {
      this.visitImportDeclaration(importDecl);
    }

    // Extract top-level class declarations
    const topLevelDecls = ctx.topLevelClassOrInterfaceDeclaration();
    for (const topLevelDecl of topLevelDecls) {
      this.visitTopLevelClassOrInterfaceDeclaration(topLevelDecl);
    }
  }

  visitTopLevelClassOrInterfaceDeclaration(ctx: TopLevelClassOrInterfaceDeclarationContext): void {
    const classDecl = ctx.classDeclaration();
    if (classDecl) {
      this.visitClassDeclaration(classDecl);
    }
  }

  visitPackageDeclaration(ctx: PackageDeclarationContext): void {
    // Get package name from the qualified name
    const packageNameNode = ctx.getChild(1); // Skip 'package' keyword
    if (packageNameNode) {
      this.packageName = packageNameNode.text.replace(';', '');
    }
  }

  visitImportDeclaration(ctx: ImportDeclarationContext): void {
    // Extract import statement
    const importText = ctx.text;
    if (importText) {
      this.imports.add(importText);
    }
  }

  visitClassDeclaration(ctx: ClassDeclarationContext): void {
    const normalClass = ctx.normalClassDeclaration();
    if (normalClass) {
      this.visitNormalClassDeclaration(normalClass);
    }
  }

  visitNormalClassDeclaration(ctx: NormalClassDeclarationContext): void {
    // Get class name
    const typeIdentifier = ctx.typeIdentifier();
    const className = typeIdentifier.text;

    // Extract class-level annotations
    const classModifiers = ctx.classModifier();
    const annotations = this.extractAnnotationsFromModifiers(classModifiers);

    // Check if this is a JPA entity
    const entityAnnotation = annotations.find(ann => ann.name === 'Entity');
    if (!entityAnnotation) {
      return; // Not a JPA entity, skip
    }

    // Create new entity
    this.currentEntity = {
      className,
      fullyQualifiedName: this.packageName ? `${this.packageName}.${className}` : className,
      packageName: this.packageName,
      tableName: className.toLowerCase(), // Default table name
      fields: [],
      relationships: [],
      annotations: annotations.map(ann => ann.name),
      isAbstract: this.hasAbstractModifier(classModifiers),
      sourceFile: '' // Will be set by the analyzer
    };

    // Extract table information from @Table annotation
    const tableAnnotation = annotations.find(ann => ann.name === 'Table');
    if (tableAnnotation) {
      this.extractTableInfo(tableAnnotation);
    }

    // Extract parent class information
    const classExtends = ctx.classExtends();
    if (classExtends) {
      // Get the parent class name
      this.currentEntity.parentClass = classExtends.text.replace('extends', '').trim();
    }

    // Visit class body to extract fields and methods
    const classBody = ctx.classBody();
    if (classBody) {
      this.visitClassBody(classBody);
    }

    // Add entity to results
    if (this.currentEntity) {
      this.entities.push(this.currentEntity);
    }
    this.currentEntity = null;
  }

  visitClassBody(ctx: ClassBodyContext): void {
    const declarations = ctx.classBodyDeclaration();
    for (const decl of declarations) {
      this.visitClassBodyDeclaration(decl);
    }
  }

  visitClassBodyDeclaration(ctx: ClassBodyDeclarationContext): void {
    const memberDecl = ctx.classMemberDeclaration();
    if (memberDecl) {
      this.visitClassMemberDeclaration(memberDecl);
    }
  }

  visitClassMemberDeclaration(ctx: ClassMemberDeclarationContext): void {
    const fieldDecl = ctx.fieldDeclaration();
    if (fieldDecl) {
      this.visitFieldDeclaration(fieldDecl);
    }
  }

  visitFieldDeclaration(ctx: FieldDeclarationContext): void {
    if (!this.currentEntity) return;

    // Extract field modifiers and annotations
    const fieldModifiers = ctx.fieldModifier();
    const annotations = this.extractAnnotationsFromFieldModifiers(fieldModifiers);

    // Get field type
    const unannType = ctx.unannType();
    const fieldType = unannType ? unannType.text : 'unknown';

    // Get variable declarators (field names)
    const varDeclList = ctx.variableDeclaratorList();
    const varDeclarators = varDeclList.variableDeclarator();

    for (const varDecl of varDeclarators) {
      const fieldName = this.getVariableDeclaratorName(varDecl);
      
      if (this.isRelationshipField(annotations)) {
        // Handle relationship field
        const relationship = this.createRelationship(fieldName, fieldType, annotations);
        if (relationship) {
          this.currentEntity.relationships.push(relationship);
        }
      } else {
        // Handle regular field
        const field = this.createField(fieldName, fieldType, annotations);
        if (field) {
          this.currentEntity.fields.push(field);
        }
      }
    }
  }

  private extractAnnotationsFromModifiers(modifiers: ClassModifierContext[]): any[] {
    const annotations: any[] = [];
    for (const modifier of modifiers) {
      const annotation = modifier.annotation();
      if (annotation) {
        const annotationInfo = this.extractAnnotationInfo(annotation);
        if (annotationInfo) {
          annotations.push(annotationInfo);
        }
      }
    }
    return annotations;
  }

  private extractAnnotationsFromFieldModifiers(modifiers: any[]): any[] {
    const annotations: any[] = [];
    for (const modifier of modifiers) {
      if (modifier.annotation && modifier.annotation()) {
        const annotationInfo = this.extractAnnotationInfo(modifier.annotation());
        if (annotationInfo) {
          annotations.push(annotationInfo);
        }
      }
    }
    return annotations;
  }

  private extractAnnotationInfo(ctx: AnnotationContext): any | null {
    // Get annotation name
    const annotationName = this.getAnnotationName(ctx);
    if (!annotationName) return null;

    const annotation: any = {
      name: annotationName,
      attributes: {}
    };

    // Extract annotation attributes if present
    // This is a simplified version - in a full implementation,
    // you'd need to parse the annotation elements properly
    const text = ctx.text;
    if (text.includes('(')) {
      // Has attributes - simplified parsing
      const attributeText = text.substring(text.indexOf('(') + 1, text.lastIndexOf(')'));
      if (attributeText.trim()) {
        annotation.attributes = this.parseAnnotationAttributes(attributeText);
      }
    }

    return annotation;
  }

  private getAnnotationName(ctx: AnnotationContext): string | null {
    // Simplified annotation name extraction
    const text = ctx.text;
    if (text.startsWith('@')) {
      const nameEnd = text.indexOf('(');
      return nameEnd > 0 ? text.substring(1, nameEnd) : text.substring(1);
    }
    return null;
  }

  private parseAnnotationAttributes(attributeText: string): any {
    const attributes: any = {};
    
    // Very simplified attribute parsing
    // In a real implementation, you'd need proper parsing of Java annotation syntax
    if (attributeText.includes('=')) {
      const pairs = attributeText.split(',');
      for (const pair of pairs) {
        const [key, value] = pair.split('=').map(s => s.trim());
        if (key && value) {
          attributes[key] = value.replace(/"/g, '');
        }
      }
    } else {
      // Single value attribute
      attributes.value = attributeText.replace(/"/g, '');
    }
    
    return attributes;
  }

  private hasAbstractModifier(modifiers: ClassModifierContext[]): boolean {
    return modifiers.some(modifier => modifier.ABSTRACT() !== undefined);
  }

  private extractTableInfo(tableAnnotation: any): void {
    if (!this.currentEntity) return;

    const attributes = tableAnnotation.attributes;
    if (attributes.name) {
      this.currentEntity.tableName = attributes.name;
    }
    if (attributes.schema) {
      this.currentEntity.schemaName = attributes.schema;
    }
    if (attributes.catalog) {
      this.currentEntity.catalogName = attributes.catalog;
    }
  }

  private getVariableDeclaratorName(varDecl: VariableDeclaratorContext): string {
    // Get the variable identifier
    const varDeclId = varDecl.variableDeclaratorId();
    return varDeclId ? varDeclId.text : 'unknown';
  }

  private isRelationshipField(annotations: any[]): boolean {
    const relationshipAnnotations = ['OneToOne', 'OneToMany', 'ManyToOne', 'ManyToMany'];
    return annotations.some(ann => relationshipAnnotations.includes(ann.name));
  }

  private createField(name: string, type: string, annotations: any[]): EntityField | null {
    const columnAnnotation = annotations.find(ann => ann.name === 'Column');
    
    const field: EntityField = {
      name,
      type,
      isId: annotations.some(ann => ann.name === 'Id'),
      isGenerated: annotations.some(ann => ann.name === 'GeneratedValue'),
      columnName: columnAnnotation?.attributes?.name || name,
      nullable: columnAnnotation?.attributes?.nullable !== 'false',
      unique: columnAnnotation?.attributes?.unique === 'true',
      length: columnAnnotation?.attributes?.length ? parseInt(columnAnnotation.attributes.length) : undefined,
      insertable: columnAnnotation?.attributes?.insertable !== 'false',
      updatable: columnAnnotation?.attributes?.updatable !== 'false',
      annotations: annotations.map(ann => ann.name)
    };

    return field;
  }

  private createRelationship(name: string, type: string, annotations: any[]): EntityRelationship | null {
    const relationshipAnnotation = annotations.find(ann => 
      ['OneToOne', 'OneToMany', 'ManyToOne', 'ManyToMany'].includes(ann.name)
    );

    if (!relationshipAnnotation) return null;

    const joinColumnAnnotation = annotations.find(ann => ann.name === 'JoinColumn');
    const joinTableAnnotation = annotations.find(ann => ann.name === 'JoinTable');

    const relationship: EntityRelationship = {
      fieldName: name,
      type: this.mapRelationshipType(relationshipAnnotation.name),
      targetEntity: this.extractTargetEntityFromType(type),
      fetchType: this.mapFetchType(relationshipAnnotation.attributes.fetch) || FetchType.LAZY,
      cascadeTypes: this.parseCascadeTypes(relationshipAnnotation.attributes.cascade) || [],
      optional: relationshipAnnotation.attributes.optional !== 'false',
      mappedBy: relationshipAnnotation.attributes.mappedBy,
      joinColumn: joinColumnAnnotation?.attributes?.name,
      joinTable: joinTableAnnotation?.attributes?.name,
      isOwningSide: !relationshipAnnotation.attributes.mappedBy
    };

    return relationship;
  }

  private mapRelationshipType(typeName: string): RelationshipType {
    switch (typeName) {
      case 'OneToOne': return RelationshipType.ONE_TO_ONE;
      case 'OneToMany': return RelationshipType.ONE_TO_MANY;
      case 'ManyToOne': return RelationshipType.MANY_TO_ONE;
      case 'ManyToMany': return RelationshipType.MANY_TO_MANY;
      default: return RelationshipType.MANY_TO_ONE;
    }
  }

  private mapFetchType(fetchValue: string): FetchType | undefined {
    if (!fetchValue) return undefined;
    return fetchValue === 'EAGER' ? FetchType.EAGER : FetchType.LAZY;
  }

  private extractTargetEntityFromType(type: string): string {
    // Extract the generic type parameter for collections
    const genericMatch = type.match(/<([^>]+)>/);
    if (genericMatch) {
      return genericMatch[1];
    }
    return type;
  }

  private parseCascadeTypes(cascadeValue: string): CascadeType[] | undefined {
    if (!cascadeValue) return undefined;
    
    // Simplified cascade type parsing
    const types: CascadeType[] = [];
    if (cascadeValue.includes('ALL')) types.push(CascadeType.ALL);
    if (cascadeValue.includes('PERSIST')) types.push(CascadeType.PERSIST);
    if (cascadeValue.includes('MERGE')) types.push(CascadeType.MERGE);
    if (cascadeValue.includes('REMOVE')) types.push(CascadeType.REMOVE);
    if (cascadeValue.includes('REFRESH')) types.push(CascadeType.REFRESH);
    if (cascadeValue.includes('DETACH')) types.push(CascadeType.DETACH);
    
    return types.length > 0 ? types : undefined;
  }

}