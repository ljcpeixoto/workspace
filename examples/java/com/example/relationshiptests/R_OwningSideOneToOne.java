package com.example.relationshiptests;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.OneToOne;
import jakarta.persistence.JoinColumn;

@Entity
public class R_OwningSideOneToOne {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToOne
    @JoinColumn(name="r_oneside_id", referencedColumnName="id")
    private R_MappedSideOneToOne mappedSide;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public R_MappedSideOneToOne getMappedSide() {
        return mappedSide;
    }

    public void setMappedSide(R_MappedSideOneToOne mappedSide) {
        this.mappedSide = mappedSide;
    }
}
