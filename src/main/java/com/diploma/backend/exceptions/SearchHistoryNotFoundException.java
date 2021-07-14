package com.diploma.backend.exceptions;

public class SearchHistoryNotFoundException extends RuntimeException {
    public SearchHistoryNotFoundException(Integer id) {
        super("Could not find search history with ID=" + id);
    }
}