package com.diploma.backend.entity.smartsearch;

import com.sun.istack.NotNull;


import javax.persistence.*;

@Entity
@Table(name = "SEARCH_HISTORY")
public class SearchHistory {
    @Id
    @NotNull
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "search_history_id_seq")
    private Integer id;
    @Column(name = "SEARCH_RESULTS")
    private String searchResults;


    public SearchHistory() {
    }

    public SearchHistory(Integer id, String searchResults) {
        this.id = id;
        this.searchResults = searchResults;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSearchResults() {
        return searchResults;
    }

    public void setSearchResults(String searchResults) {
        this.searchResults = searchResults;
    }
}
