package com.example.relationshiptests;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.OneToOne;
import jakarta.persistence.FetchType;
import jakarta.persistence.CascadeType;

@Entity
public class R_MappedSideOneToOne {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;

    @OneToOne(mappedBy = "mappedSide", fetch = FetchType.EAGER, cascade = CascadeType.ALL, optional = false, orphanRemoval = true)
    private R_OwningSideOneToOne owner;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public R_OwningSideOneToOne getOwner() {
        return owner;
    }

    public void setOwner(R_OwningSideOneToOne owner) {
        this.owner = owner;
    }
}
