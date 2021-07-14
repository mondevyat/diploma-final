package com.diploma.backend.entity.smartsearch;

import org.springframework.data.annotation.Id;

public class ItemWithCategory {
    @Id
    private Integer id;
    private String itemName;
    private String subcategoryName;
    private String categoryName;
    private String photography;
    private String price;

    public ItemWithCategory() {
    }

    public ItemWithCategory(Integer id, String itemName, String subcategoryName, String categoryName, String photo, String price) {
        this.id = id;
        this.itemName = itemName;
        this.subcategoryName = subcategoryName;
        this.categoryName = categoryName;
        this.photography = photo;
        this.price = price;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getSubcategoryName() {
        return subcategoryName;
    }

    public void setSubcategoryName(String subcategoryName) {
        this.subcategoryName = subcategoryName;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public void setPhotography(String photography) {
        this.photography = photography;
    }

    public String getPhotography() {
        return photography;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getPrice() {
        return price;
    }
}
