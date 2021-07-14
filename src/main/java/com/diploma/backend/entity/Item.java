package com.diploma.backend.entity;

import com.sun.istack.NotNull;
import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "ITEMS")
public class Item {
    @Id
    @NotNull
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "items_id_seq")
    private Integer id;
    @NotNull
    @Column(name = "NAME")
    private String name;
    @NotNull
    @Column(name = "CREATED_AT")
    private Timestamp timeCreated;
    @NotNull
    @Column(name = "COUNTRY_CODE")
    private Integer countryCode;
    @Column(name = "PHOTO")
    private String photo;
    @Column(name = "DESCRIPTION")
    private String description;
    @NotNull
    @Column(name = "PRICE")
    private String price;
    @NotNull
    @Column(name = "VIEWS")
    private Integer views;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "podcategory_id", referencedColumnName = "id")
    private Podcategory podcategory;

    public Item() {
    }

    public Item(Integer id, String name, Timestamp timeCreated, Integer countryCode, String photo, String description, String price, Integer views, Podcategory podcategory) {
        this.id = id;
        this.name = name;
        this.timeCreated = timeCreated;
        this.countryCode = countryCode;
        this.photo = photo;
        this.description = description;
        this.price = price;
        this.views = views;
        this.podcategory = podcategory;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Timestamp getTimeCreated() {
        return timeCreated;
    }

    public void setTimeCreated(Timestamp timeCreated) {
        this.timeCreated = timeCreated;
    }

    public Integer getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(Integer countryCode) {
        this.countryCode = countryCode;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Podcategory getPodcategory() {
        return podcategory;
    }

    public void setPodcategory(Podcategory podcategory) {
        this.podcategory = podcategory;
    }

    public Integer getViews() {
        return views;
    }

    public void setViews(Integer views) {
        this.views = views;
    }
}
