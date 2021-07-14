package com.diploma.backend.exceptions;

public class PodcategoryNotFoundException extends RuntimeException {
    public PodcategoryNotFoundException(Integer id) {
        super("Could not find subcategory with ID=" + id);
    }
}