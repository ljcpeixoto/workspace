package com.example.relationshiptests;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.FetchType;
import jakarta.persistence.CascadeType;
import java.util.Set;
import java.util.HashSet;

@Entity
public class R_ParentOneToMany {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String parentName;

    @OneToMany(mappedBy = "parent", cascade = {CascadeType.PERSIST, CascadeType.MERGE}, fetch = FetchType.LAZY, orphanRemoval = true)
    private Set<R_OwningSideManyToOne> children;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getParentName() {
        return parentName;
    }

    public void setParentName(String parentName) {
        this.parentName = parentName;
    }

    public Set<R_OwningSideManyToOne> getChildren() {
        if (this.children == null) {
            this.children = new HashSet<>();
        }
        return children;
    }

    public void setChildren(Set<R_OwningSideManyToOne> children) {
        this.children = children;
    }
}
