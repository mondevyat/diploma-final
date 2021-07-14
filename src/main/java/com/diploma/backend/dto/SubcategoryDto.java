package com.diploma.backend.dto;

public class SubcategoryDto {
    private String subcategoryName;

    public SubcategoryDto() {
    }

    public SubcategoryDto(String subcategoryName) {
        this.subcategoryName = subcategoryName;
    }

    public String getSubcategoryName() {
        return subcategoryName;
    }

    public void setSubcategoryName(String subcategoryName) {
        this.subcategoryName = subcategoryName;
    }
}
