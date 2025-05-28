package com.example.relationshiptests;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.FetchType;

@Entity
public class R_OwningSideManyToOne {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String data;

    @ManyToOne(fetch = FetchType.LAZY) // Default fetch for ManyToOne is EAGER, explicitly setting to LAZY for test variety
    @JoinColumn(name = "r_parent_id", referencedColumnName = "id", nullable = false)
    private R_ParentOneToMany parent;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public R_ParentOneToMany getParent() {
        return parent;
    }

    public void setParent(R_ParentOneToMany parent) {
        this.parent = parent;
    }
}
