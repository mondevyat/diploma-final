package com.diploma.backend.entity;

import com.sun.istack.NotNull;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "podcategory")
public class Podcategory {
    @Id
    @NotNull
    @Column(name = "ID")
    private Integer id;
    @NotNull
    @Column(name = "NAME_PODCATEGORY")
    private String nameSubcategory;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;

    public Podcategory() {
    }

    public Podcategory(Integer id, String nameSubcategory, Category category) {
        this.id = id;
        this.nameSubcategory = nameSubcategory;
        this.category = category;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameSubcategory() {
        return nameSubcategory;
    }

    public void setNameSubcategory(String nameSubcategory) {
        this.nameSubcategory = nameSubcategory;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Podcategory that = (Podcategory) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(nameSubcategory, that.nameSubcategory) &&
                Objects.equals(category, that.category);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nameSubcategory, category);
    }

    @Override
    public String toString() {
        return "Podcategory{" +
                "id=" + id +
                ", nameSubcategory='" + nameSubcategory + '\'' +
                ", category=" + category +
                '}';
    }
}
