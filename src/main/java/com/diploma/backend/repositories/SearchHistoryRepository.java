package com.diploma.backend.repositories;

import com.diploma.backend.entity.smartsearch.SearchHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SearchHistoryRepository extends JpaRepository<SearchHistory, Integer> {
    
}
