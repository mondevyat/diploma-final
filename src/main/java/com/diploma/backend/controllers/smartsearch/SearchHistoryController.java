package com.diploma.backend.controllers.smartsearch;

import com.diploma.backend.entity.smartsearch.SearchHistory;
import com.diploma.backend.service.SearchHistoryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(SearchHistoryController.ROOT)
public class SearchHistoryController {
    public static final String ROOT = "/api";
    private final SearchHistoryService searchHistoryService;
    private static final Logger logger = LoggerFactory.getLogger(SearchHistoryController.class);

    private JdbcTemplate jdbcTemplate;

    public SearchHistoryController(SearchHistoryService searchHistoryService, JdbcTemplate jdbcTemplate) {
        this.searchHistoryService = searchHistoryService;
        this.jdbcTemplate = jdbcTemplate;
    }

    @PostMapping(path = "/searchHistory")
    public SearchHistory newSearchHistory(@RequestBody SearchHistory searchHistory) {
        return searchHistoryService.newSearchHistory(searchHistory);
    }

    @PutMapping(path = "/updateSearchHistory")
    public SearchHistory updateSearchHistory(@RequestBody SearchHistory searchHistory) {
        return searchHistoryService.updateSearchHistory(searchHistory);
    }

    @GetMapping(path = "getSearchHistory/{userId}")
    public List<SearchHistory> getUserSearchHistory(@PathVariable Integer userId) {
        String SQL = "SELECT search_history.id, search_history.search_results FROM users\n" +
                "INNER JOIN search_history\n" +
                "ON users.history_id = search_history.id\n" +
                "WHERE users.id = " + userId;
        List<SearchHistory> searchHistories = jdbcTemplate.query(SQL,
                rs -> {
                    List<SearchHistory> list = new ArrayList<SearchHistory>();
                    while (rs.next()) {
                        SearchHistory SearchHistory1 = new SearchHistory();
                        SearchHistory1.setId(rs.getInt("id"));
                        SearchHistory1.setSearchResults(rs.getString("search_results"));
                        list.add(SearchHistory1);
                    }
                    return list;
                });
        return searchHistories;
    }
}
