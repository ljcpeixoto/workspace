import { JpaAnalyzer } from './src/jpa-analyzer'; // Adjust path if necessary
import { 
    EntityRelationship, 
    RelationshipType, 
    FetchType, 
    CascadeType, 
    JoinColumnDetails, 
    JpaAnalysisResult, 
    JpaEntity 
} from './src/types'; // Adjust path if necessary
import * as assert from 'assert';

// Helper for deep array comparison for cascade types
function assertCascadeTypesEqual(actual: CascadeType[] | undefined, expected: CascadeType[], message: string) {
    if (!actual) {
        assert.fail(`${message}: Actual cascade types are undefined, expected ${expected.length > 0 ? expected : 'empty array'}`);
        return;
    }
    assert.strictEqual(actual.length, expected.length, `${message}: Cascade types array length mismatch. Expected ${expected.join(',')}, got ${actual.join(',')}`);
    const sortedActual = [...actual].sort();
    const sortedExpected = [...expected].sort();
    for (let i = 0; i < sortedExpected.length; i++) {
        assert.strictEqual(sortedActual[i], sortedExpected[i], `${message}: Cascade type mismatch at index ${i}. Expected ${expected.join(',')}, got ${actual.join(',')}`);
    }
}

// Helper to find an entity
function findEntity(result: JpaAnalysisResult, className: string): JpaEntity {
    const entity = result.entities.find(e => e.className === className);
    assert.ok(entity, `Entity ${className} not found`);
    return entity!;
}

// Helper to find a relationship
function findRelationship(entity: JpaEntity, fieldName: string): EntityRelationship {
    const relationship = entity.relationships.find(r => r.fieldName === fieldName);
    assert.ok(relationship, `Relationship ${fieldName} on entity ${entity.className} not found`);
    return relationship!;
}

async function runRelationshipTests() {
    console.log("Starting JPA Relationship Tests...");

    const analyzer = new JpaAnalyzer();
    const analysisResult = await analyzer.analyze(['examples/java/com/example/relationshiptests/']);
    assert.ok(analysisResult, "Analysis result should not be null");
    assert.ok(analysisResult.entities.length > 0, "Should find entities");

    // 1. Test R_OwningSideOneToOne -> mappedSide
    const owningOneToOne = findEntity(analysisResult, 'R_OwningSideOneToOne');
    const relToMapped = findRelationship(owningOneToOne, 'mappedSide');

    assert.strictEqual(relToMapped.type, RelationshipType.ONE_TO_ONE, 'R_OwningSideOneToOne.mappedSide: type');
    assert.strictEqual(relToMapped.targetEntity, 'R_MappedSideOneToOne', 'R_OwningSideOneToOne.mappedSide: targetEntity');
    assert.strictEqual(relToMapped.isOwningSide, true, 'R_OwningSideOneToOne.mappedSide: isOwningSide');
    assert.strictEqual(relToMapped.mappedBy, undefined, 'R_OwningSideOneToOne.mappedSide: mappedBy');
    assert.strictEqual(relToMapped.optional, true, 'R_OwningSideOneToOne.mappedSide: optional (default)'); // @JoinColumn implies optional=true by default unless nullable=false
    assertCascadeTypesEqual(relToMapped.cascadeTypes, [], 'R_OwningSideOneToOne.mappedSide: cascadeTypes');
    assert.strictEqual(relToMapped.fetchType, FetchType.LAZY, 'R_OwningSideOneToOne.mappedSide: fetchType (default for @OneToOne)');
    assert.strictEqual(relToMapped.orphanRemoval, false, 'R_OwningSideOneToOne.mappedSide: orphanRemoval (default)');
    
    assert.ok(relToMapped.joinColumns && relToMapped.joinColumns.length === 1, 'R_OwningSideOneToOne.mappedSide: joinColumns count');
    assert.strictEqual(relToMapped.joinColumns![0].name, 'r_oneside_id', 'R_OwningSideOneToOne.mappedSide: joinColumn name');
    assert.strictEqual(relToMapped.joinColumns![0].referencedColumnName, 'id', 'R_OwningSideOneToOne.mappedSide: joinColumn referencedColumnName');
    assert.strictEqual(relToMapped.joinColumnReferencedColumnName, 'id', 'R_OwningSideOneToOne.mappedSide: top-level referencedColumnName');


    // 2. Test R_MappedSideOneToOne -> owner
    const mappedOneToOne = findEntity(analysisResult, 'R_MappedSideOneToOne');
    const relToOwner = findRelationship(mappedOneToOne, 'owner');

    assert.strictEqual(relToOwner.type, RelationshipType.ONE_TO_ONE, 'R_MappedSideOneToOne.owner: type');
    assert.strictEqual(relToOwner.targetEntity, 'R_OwningSideOneToOne', 'R_MappedSideOneToOne.owner: targetEntity');
    assert.strictEqual(relToOwner.isOwningSide, false, 'R_MappedSideOneToOne.owner: isOwningSide');
    assert.strictEqual(relToOwner.mappedBy, 'mappedSide', 'R_MappedSideOneToOne.owner: mappedBy');
    assert.strictEqual(relToOwner.optional, false, 'R_MappedSideOneToOne.owner: optional');
    assertCascadeTypesEqual(relToOwner.cascadeTypes, [CascadeType.ALL], 'R_MappedSideOneToOne.owner: cascadeTypes');
    assert.strictEqual(relToOwner.fetchType, FetchType.EAGER, 'R_MappedSideOneToOne.owner: fetchType');
    assert.strictEqual(relToOwner.orphanRemoval, true, 'R_MappedSideOneToOne.owner: orphanRemoval');
    assert.ok(relToOwner.joinColumns && relToOwner.joinColumns.length === 0, 'R_MappedSideOneToOne.owner: joinColumns should be empty');

    // 3. Test R_OwningSideManyToOne -> parent
    const owningManyToOne = findEntity(analysisResult, 'R_OwningSideManyToOne');
    const relToParentOtm = findRelationship(owningManyToOne, 'parent');

    assert.strictEqual(relToParentOtm.type, RelationshipType.MANY_TO_ONE, 'R_OwningSideManyToOne.parent: type');
    assert.strictEqual(relToParentOtm.targetEntity, 'R_ParentOneToMany', 'R_OwningSideManyToOne.parent: targetEntity');
    assert.strictEqual(relToParentOtm.isOwningSide, true, 'R_OwningSideManyToOne.parent: isOwningSide');
    assert.strictEqual(relToParentOtm.mappedBy, undefined, 'R_OwningSideManyToOne.parent: mappedBy');
    // @JoinColumn(nullable=false) implies optional=false
    assert.strictEqual(relToParentOtm.optional, false, 'R_OwningSideManyToOne.parent: optional'); 
    assertCascadeTypesEqual(relToParentOtm.cascadeTypes, [], 'R_OwningSideManyToOne.parent: cascadeTypes');
    assert.strictEqual(relToParentOtm.fetchType, FetchType.LAZY, 'R_OwningSideManyToOne.parent: fetchType (explicitly set, default for MTO is EAGER)');
    
    assert.ok(relToParentOtm.joinColumns && relToParentOtm.joinColumns.length === 1, 'R_OwningSideManyToOne.parent: joinColumns count');
    assert.strictEqual(relToParentOtm.joinColumns![0].name, 'r_parent_id', 'R_OwningSideManyToOne.parent: joinColumn name'); // Corrected name from task desc
    assert.strictEqual(relToParentOtm.joinColumns![0].referencedColumnName, 'id', 'R_OwningSideManyToOne.parent: joinColumn referencedColumnName');
    assert.strictEqual(relToParentOtm.joinColumnReferencedColumnName, 'id', 'R_OwningSideManyToOne.parent: top-level referencedColumnName');

    // 4. Test R_ParentOneToMany -> children
    const parentOneToMany = findEntity(analysisResult, 'R_ParentOneToMany');
    const relToChildrenMto = findRelationship(parentOneToMany, 'children');

    assert.strictEqual(relToChildrenMto.type, RelationshipType.ONE_TO_MANY, 'R_ParentOneToMany.children: type');
    assert.strictEqual(relToChildrenMto.targetEntity, 'R_OwningSideManyToOne', 'R_ParentOneToMany.children: targetEntity');
    assert.strictEqual(relToChildrenMto.isOwningSide, false, 'R_ParentOneToMany.children: isOwningSide');
    assert.strictEqual(relToChildrenMto.mappedBy, 'parent', 'R_ParentOneToMany.children: mappedBy');
    assert.strictEqual(relToChildrenMto.optional, true, 'R_ParentOneToMany.children: optional (default for collections)'); 
    assertCascadeTypesEqual(relToChildrenMto.cascadeTypes, [CascadeType.MERGE, CascadeType.PERSIST], 'R_ParentOneToMany.children: cascadeTypes');
    assert.strictEqual(relToChildrenMto.fetchType, FetchType.LAZY, 'R_ParentOneToMany.children: fetchType');
    assert.strictEqual(relToChildrenMto.orphanRemoval, true, 'R_ParentOneToMany.children: orphanRemoval');
    assert.ok(relToChildrenMto.joinColumns && relToChildrenMto.joinColumns.length === 0, 'R_ParentOneToMany.children: joinColumns should be empty');

    // 5. Test R_ManyToManyEntityA -> entityBs
    const entityA = findEntity(analysisResult, 'R_ManyToManyEntityA');
    const relToEntityB = findRelationship(entityA, 'entityBs');

    assert.strictEqual(relToEntityB.type, RelationshipType.MANY_TO_MANY, 'R_ManyToManyEntityA.entityBs: type');
    assert.strictEqual(relToEntityB.targetEntity, 'R_ManyToManyEntityB', 'R_ManyToManyEntityA.entityBs: targetEntity');
    assert.strictEqual(relToEntityB.isOwningSide, true, 'R_ManyToManyEntityA.entityBs: isOwningSide');
    assert.strictEqual(relToEntityB.mappedBy, undefined, 'R_ManyToManyEntityA.entityBs: mappedBy');
    assertCascadeTypesEqual(relToEntityB.cascadeTypes, [CascadeType.MERGE, CascadeType.PERSIST], 'R_ManyToManyEntityA.entityBs: cascadeTypes');
    assert.strictEqual(relToEntityB.fetchType, FetchType.LAZY, 'R_ManyToManyEntityA.entityBs: fetchType (default for MTM)');
    
    assert.strictEqual(relToEntityB.joinTable, 'r_a_b_join_table', 'R_ManyToManyEntityA.entityBs: joinTable name');
    assert.strictEqual(relToEntityB.joinTableSchema, 'test_schema', 'R_ManyToManyEntityA.entityBs: joinTable schema');
    assert.strictEqual(relToEntityB.joinTableCatalog, 'test_catalog', 'R_ManyToManyEntityA.entityBs: joinTable catalog');

    assert.ok(relToEntityB.joinColumns && relToEntityB.joinColumns.length === 1, 'R_ManyToManyEntityA.entityBs: joinColumns count');
    assert.strictEqual(relToEntityB.joinColumns![0].name, 'a_id', 'R_ManyToManyEntityA.entityBs: joinColumn name');
    assert.strictEqual(relToEntityB.joinColumns![0].referencedColumnName, 'entity_a_pk', 'R_ManyToManyEntityA.entityBs: joinColumn referencedColumnName');

    assert.ok(relToEntityB.inverseJoinColumns && relToEntityB.inverseJoinColumns.length === 1, 'R_ManyToManyEntityA.entityBs: inverseJoinColumns count');
    assert.strictEqual(relToEntityB.inverseJoinColumns![0].name, 'b_id', 'R_ManyToManyEntityA.entityBs: inverseJoinColumn name');
    assert.strictEqual(relToEntityB.inverseJoinColumns![0].referencedColumnName, 'entity_b_pk', 'R_ManyToManyEntityA.entityBs: inverseJoinColumn referencedColumnName');
    
    assert.strictEqual(relToEntityB.joinTableForeignKeyName, 'fk_a_to_jointable', 'R_ManyToManyEntityA.entityBs: joinTableForeignKeyName');
    assert.strictEqual(relToEntityB.joinTableInverseForeignKeyName, 'fk_b_to_jointable', 'R_ManyToManyEntityA.entityBs: joinTableInverseForeignKeyName');

    // 6. Test R_ManyToManyEntityB -> entityAs
    const entityB = findEntity(analysisResult, 'R_ManyToManyEntityB');
    const relToEntityA = findRelationship(entityB, 'entityAs');

    assert.strictEqual(relToEntityA.type, RelationshipType.MANY_TO_MANY, 'R_ManyToManyEntityB.entityAs: type');
    assert.strictEqual(relToEntityA.targetEntity, 'R_ManyToManyEntityA', 'R_ManyToManyEntityB.entityAs: targetEntity');
    assert.strictEqual(relToEntityA.isOwningSide, false, 'R_ManyToManyEntityB.entityAs: isOwningSide');
    assert.strictEqual(relToEntityA.mappedBy, 'entityBs', 'R_ManyToManyEntityB.entityAs: mappedBy');
    assertCascadeTypesEqual(relToEntityA.cascadeTypes, [], 'R_ManyToManyEntityB.entityAs: cascadeTypes (default)'); // No cascade specified on mappedBy side
    assert.strictEqual(relToEntityA.fetchType, FetchType.LAZY, 'R_ManyToManyEntityB.entityAs: fetchType'); // Explicitly set, but also default for MTM
    assert.ok(relToEntityA.joinColumns && relToEntityA.joinColumns.length === 0, 'R_ManyToManyEntityB.entityAs: joinColumns should be empty');
    assert.ok(relToEntityA.inverseJoinColumns && relToEntityA.inverseJoinColumns.length === 0, 'R_ManyToManyEntityB.entityAs: inverseJoinColumns should be empty');
    assert.strictEqual(relToEntityA.joinTable, undefined, 'R_ManyToManyEntityB.entityAs: joinTable should be undefined on mappedBy side');


    console.log("JPA Relationship Tests Completed Successfully!");
}

runRelationshipTests().catch(error => {
    console.error("Error during JPA Relationship tests:", error);
    process.exit(1);
});
