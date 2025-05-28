package com.example.relationshiptests;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.JoinTable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.CascadeType;
import java.util.Set;
import java.util.HashSet;

@Entity
public class R_ManyToManyEntityA {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long entity_a_pk; // Custom PK name for testing referencedColumnName

    private String valueA;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
        name = "r_a_b_join_table",
        schema = "test_schema",
        catalog = "test_catalog",
        joinColumns = @JoinColumn(name = "a_id", referencedColumnName = "entity_a_pk"),
        inverseJoinColumns = @JoinColumn(name = "b_id", referencedColumnName = "entity_b_pk"),
        foreignKey = @ForeignKey(name = "fk_a_to_jointable"),
        inverseForeignKey = @ForeignKey(name = "fk_b_to_jointable")
    )
    private Set<R_ManyToManyEntityB> entityBs;

    // Getters and Setters
    public Long getEntity_a_pk() {
        return entity_a_pk;
    }

    public void setEntity_a_pk(Long id) {
        this.entity_a_pk = id;
    }

    public String getValueA() {
        return valueA;
    }

    public void setValueA(String valueA) {
        this.valueA = valueA;
    }

    public Set<R_ManyToManyEntityB> getEntityBs() {
        if (this.entityBs == null) {
            this.entityBs = new HashSet<>();
        }
        return entityBs;
    }

    public void setEntityBs(Set<R_ManyToManyEntityB> entityBs) {
        this.entityBs = entityBs;
    }
}
