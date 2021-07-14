package com.diploma.backend.exceptions;

public class ItemNotFoundException extends RuntimeException {
    public ItemNotFoundException(Integer id) {
        super("Could not find item with ID=" + id);
    }
}