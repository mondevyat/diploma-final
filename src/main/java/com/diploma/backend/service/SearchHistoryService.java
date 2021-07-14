package com.diploma.backend.service;

import com.diploma.backend.entity.smartsearch.SearchHistory;
import com.diploma.backend.exceptions.SearchHistoryNotFoundException;
import com.diploma.backend.repositories.SearchHistoryRepository;
import org.springframework.stereotype.Service;

@Service
public class SearchHistoryService {
    private SearchHistoryRepository searchHistoryRepository;

    public SearchHistoryService(SearchHistoryRepository searchHistoryRepository) {
        this.searchHistoryRepository = searchHistoryRepository;
    }

    public SearchHistory newSearchHistory(SearchHistory searchHistory) {
        return searchHistoryRepository.save(searchHistory);
    }

    public SearchHistory updateSearchHistory(SearchHistory searchHistory)
    {
        if(searchHistoryRepository.existsById(searchHistory.getId())) {
            return searchHistoryRepository.save(searchHistory);
        }
        else {
            throw new SearchHistoryNotFoundException(searchHistory.getId());
        }
    }
}
