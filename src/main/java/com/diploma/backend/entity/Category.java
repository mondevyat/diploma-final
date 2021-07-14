package com.diploma.backend.entity;

import com.sun.istack.NotNull;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Objects;

@Entity
@Table(name = "category")
public class Category {
    @Id
    @NotNull
    @Column(name = "ID")
    private Integer id;
    @NotNull
    @Column(name = "NAME_CATEGORY")
    private String nameCategory;

    public Category() {
    }

    public Category(Integer id, String nameCategory) {
        this.id = id;
        this.nameCategory = nameCategory;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCategory() {
        return nameCategory;
    }

    public void setCategory(String nameCategory) {
        this.nameCategory = nameCategory;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Category nameCategory1 = (Category) o;
        return Objects.equals(id, nameCategory1.id) &&
                Objects.equals(nameCategory, nameCategory1.nameCategory);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nameCategory);
    }

    @Override
    public String toString() {
        return "Category{" +
                "id=" + id +
                ", category='" + nameCategory + '\'' +
                '}';
    }
}
