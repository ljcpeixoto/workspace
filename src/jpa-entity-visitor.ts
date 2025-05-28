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
    if (!attributeText || attributeText.trim() === '') {
      return attributes;
    }

    // If there's no '=', it's a single value for the "value" attribute
    if (!attributeText.includes('=')) {
      attributes.value = this.parseAttributeValue(attributeText.trim());
      return attributes;
    }

    let currentIndex = 0;
    while (currentIndex < attributeText.length) {
      const equalsIndex = attributeText.indexOf('=', currentIndex);
      if (equalsIndex === -1) break;

      const key = attributeText.substring(currentIndex, equalsIndex).trim();
      let valueString;

      // Find the end of the value
      // This needs to be smart about commas inside braces or nested annotations
      let valueStartIndex = equalsIndex + 1;
      // Skip leading whitespace for the value
      while(valueStartIndex < attributeText.length && attributeText[valueStartIndex] === ' ') {
        valueStartIndex++;
      }

      let openBraces = 0;    // For {...} arrays
      let openParens = 0;    // For (...) of nested annotations
      let inString = false;  // To ignore delimiters within strings

      let valueEndIndex = valueStartIndex;
      for (; valueEndIndex < attributeText.length; valueEndIndex++) {
        const char = attributeText[valueEndIndex];

        if (char === '"') {
          // Basic string toggle, does not handle escaped quotes \".
          // This is a simplification; proper string parsing is more complex.
          if (valueEndIndex === 0 || attributeText[valueEndIndex-1] !== '\\') {
            inString = !inString;
          }
        }

        if (inString) continue; // Ignore delimiters within string literals

        if (char === '{') openBraces++;
        else if (char === '}') openBraces--;
        else if (char === '(') openParens++;
        else if (char === ')') openParens--;
        else if (char === ',' && openBraces === 0 && openParens === 0) {
          break; // Found comma separator for the next key-value pair
        }
      }
      
      valueString = attributeText.substring(valueStartIndex, valueEndIndex).trim();
      attributes[key] = this.parseAttributeValue(valueString);
      
      currentIndex = valueEndIndex + 1;
      // Skip potential comma and whitespace
      while (currentIndex < attributeText.length && (attributeText[currentIndex] === ',' || attributeText[currentIndex] === ' ')) {
        currentIndex++;
      }
    }
    return attributes;
  }

  private parseAttributeValue(valueString: string): any {
    valueString = valueString.trim();

    // String literal
    if (valueString.startsWith('"') && valueString.endsWith('"')) {
      return valueString.substring(1, valueString.length - 1);
    }

    // Boolean literal
    if (valueString === 'true') return true;
    if (valueString === 'false') return false;

    // Numeric literal
    if (!isNaN(Number(valueString))) {
      return Number(valueString);
    }

    // Array literal (e.g., {CascadeType.PERSIST, CascadeType.MERGE})
    if (valueString.startsWith('{') && valueString.endsWith('}')) {
      const arrayContent = valueString.substring(1, valueString.length - 1).trim();
      if (arrayContent === '') return [];
      // Split by comma, but be careful about nested structures (though less likely for simple enum arrays)
      return arrayContent.split(',').map(item => this.parseAttributeValue(item.trim()));
    }

    // Nested annotation (e.g., @JoinColumn(name = "user_id"))
    if (valueString.startsWith('@')) {
      // This is a simplified parsing for nested annotations
      // It reuses the extractAnnotationInfo logic, which is not ideal due to potential circular dependencies
      // or context issues. A dedicated lightweight parser for nested annotations would be better.
      const nameEndIndex = valueString.indexOf('(');
      let name = valueString.substring(1);
      let nestedAttributes = {};
      if (nameEndIndex > 0) {
        name = valueString.substring(1, nameEndIndex);
        const attributeString = valueString.substring(nameEndIndex + 1, valueString.lastIndexOf(')'));
        if (attributeString.trim()) {
           // Temporarily use a simplified version of attribute parsing for nested
           nestedAttributes = this.parseAnnotationAttributes(attributeString);
        }
      }
      return { type: 'Annotation', name: name, attributes: nestedAttributes };
    }
    
    // Default: Enum constant (e.g., FetchType.LAZY) or other symbolic constants
    // We store it as a string.
    return valueString;
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

    const joinColumnAnnotation = annotations.find(ann => ann.name === 'JoinColumn'); // Standalone @JoinColumn
    const joinTableAnnotation = annotations.find(ann => ann.name === 'JoinTable');

    const relAttributes = relationshipAnnotation.attributes;
    const mappedBy = relAttributes.mappedBy;

    const relationship: EntityRelationship = {
      fieldName: name,
      type: this.mapRelationshipType(relationshipAnnotation.name),
      targetEntity: this.extractTargetEntityFromType(type),
      fetchType: this.mapFetchType(relAttributes.fetch) || FetchType.LAZY,
      cascadeTypes: this.parseCascadeTypes(relAttributes.cascade) || [],
      optional: relAttributes.optional !== false, // Default is true (optional=true)
      mappedBy: mappedBy,
      isOwningSide: !mappedBy, // Initial assumption
      orphanRemoval: relAttributes.orphanRemoval === true, // Ensure it's explicitly true

      // Initialize new fields
      joinColumns: [],
      inverseJoinColumns: [],
      // joinColumnReferencedColumnName will be set below if applicable
    };

    if (relationship.type === RelationshipType.ONE_TO_ONE || relationship.type === RelationshipType.ONE_TO_MANY) {
      if (typeof relAttributes.orphanRemoval === 'boolean') {
        relationship.orphanRemoval = relAttributes.orphanRemoval;
      }
    }
    
    if (joinTableAnnotation) {
      const jtAttributes = joinTableAnnotation.attributes;
      relationship.joinTable = jtAttributes.name;
      relationship.joinTableCatalog = jtAttributes.catalog;
      relationship.joinTableSchema = jtAttributes.schema;

      // Handle joinColumns in @JoinTable
      if (jtAttributes.joinColumns) {
        const jcArray = Array.isArray(jtAttributes.joinColumns) ? jtAttributes.joinColumns : [jtAttributes.joinColumns];
        for (const jcAnn of jcArray) {
          const details = this.extractJoinColumnDetails(jcAnn);
          if (details) relationship.joinColumns!.push(details);
        }
      }

      // Handle inverseJoinColumns in @JoinTable
      if (jtAttributes.inverseJoinColumns) {
        const ijcArray = Array.isArray(jtAttributes.inverseJoinColumns) ? jtAttributes.inverseJoinColumns : [jtAttributes.inverseJoinColumns];
        for (const ijcAnn of ijcArray) {
          const details = this.extractJoinColumnDetails(ijcAnn);
          if (details) relationship.inverseJoinColumns!.push(details);
        }
      }
      
      // Handle foreignKey in @JoinTable
      if (jtAttributes.foreignKey && jtAttributes.foreignKey.type === 'Annotation' && jtAttributes.foreignKey.attributes) {
        relationship.joinTableForeignKeyName = jtAttributes.foreignKey.attributes.name;
      }

      // Handle inverseForeignKey in @JoinTable
      if (jtAttributes.inverseForeignKey && jtAttributes.inverseForeignKey.type === 'Annotation' && jtAttributes.inverseForeignKey.attributes) {
        relationship.joinTableInverseForeignKeyName = jtAttributes.inverseForeignKey.attributes.name;
      }
      // If @JoinTable is present, this side is usually the owning side, unless mappedBy is also present
      // (which is rare for @JoinTable but theoretically possible for bidirectional @OneToMany with @JoinTable)
      relationship.isOwningSide = !mappedBy;


    } else if (joinColumnAnnotation) { // Standalone @JoinColumn (no @JoinTable)
      const details = this.extractJoinColumnDetails(joinColumnAnnotation);
      if (details) {
        relationship.joinColumns!.push(details);
        if (details.referencedColumnName) {
          relationship.joinColumnReferencedColumnName = details.referencedColumnName;
        }
      }
       // isOwningSide is already !mappedBy, which is correct for @JoinColumn scenarios
    }

    // If mappedBy is present, it's definitely not the owning side.
    if (mappedBy) {
        relationship.isOwningSide = false;
    }

    return relationship;
  }

  private extractJoinColumnDetails(annotationObject: any): JoinColumnDetails | null {
    if (!annotationObject || annotationObject.type !== 'Annotation' || !annotationObject.attributes) {
      // If it's a direct attribute set from a single @JoinColumn (not from @JoinTable's array)
      if (annotationObject && annotationObject.name && annotationObject.attributes === undefined) {
         // This case might occur if joinColumnAnnotation was not parsed as a nested annotation
         // but its attributes were directly assigned.
         // Example: @JoinColumn(name="col_name", referencedColumnName="ref_col")
         // Here, annotationObject might be the attributes map itself.
         const name = annotationObject.name;
         const referencedColumnName = annotationObject.referencedColumnName;
         if(name) return { name, referencedColumnName };
      } else if (annotationObject && annotationObject.attributes) { // Standard case for nested annotation
        const attributes = annotationObject.attributes;
        const name = attributes.name;
        const referencedColumnName = attributes.referencedColumnName;
        if(name) return { name, referencedColumnName };
      }
      return null;
    }
    // This path is for when annotationObject is { type: "Annotation", name: "JoinColumn", attributes: {...} }
    const attributes = annotationObject.attributes;
    const name = attributes.name;
    const referencedColumnName = attributes.referencedColumnName;

    if (name) {
      return { name, referencedColumnName };
    }
    return null;
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

  private parseCascadeTypes(cascadeValue: string | string[]): CascadeType[] | undefined {
    if (!cascadeValue) return undefined;

    const values = Array.isArray(cascadeValue) ? cascadeValue : [cascadeValue];
    const types: CascadeType[] = [];

    for (const val of values) {
      // Assuming val is something like "CascadeType.ALL" or just "ALL"
      const typeStr = val.includes('.') ? val.substring(val.lastIndexOf('.') + 1) : val;
      
      switch (typeStr.toUpperCase()) {
        case 'ALL': types.push(CascadeType.ALL); break;
        case 'PERSIST': types.push(CascadeType.PERSIST); break;
        case 'MERGE': types.push(CascadeType.MERGE); break;
        case 'REMOVE': types.push(CascadeType.REMOVE); break;
        case 'REFRESH': types.push(CascadeType.REFRESH); break;
        case 'DETACH': types.push(CascadeType.DETACH); break;
        // JPA also defines REMOVE as an alias for DELETE, and other specific ones,
        // but these are the main ones from javax.persistence.CascadeType
      }
    }
    
    return types.length > 0 ? types : undefined;
  }

}