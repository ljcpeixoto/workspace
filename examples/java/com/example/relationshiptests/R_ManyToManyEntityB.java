package com.example.relationshiptests;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.FetchType; // For potential future use or variety
import java.util.Set;
import java.util.HashSet;

@Entity
public class R_ManyToManyEntityB {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long entity_b_pk; // Custom PK name for testing referencedColumnName

    private String valueB;

    @ManyToMany(mappedBy = "entityBs", fetch = FetchType.LAZY) // Default fetch for ManyToMany is LAZY
    private Set<R_ManyToManyEntityA> entityAs;

    // Getters and Setters
    public Long getEntity_b_pk() {
        return entity_b_pk;
    }

    public void setEntity_b_pk(Long id) {
        this.entity_b_pk = id;
    }

    public String getValueB() {
        return valueB;
    }

    public void setValueB(String valueB) {
        this.valueB = valueB;
    }

    public Set<R_ManyToManyEntityA> getEntityAs() {
        if (this.entityAs == null) {
            this.entityAs = new HashSet<>();
        }
        return entityAs;
    }

    public void setEntityAs(Set<R_ManyToManyEntityA> entityAs) {
        this.entityAs = entityAs;
    }
}
