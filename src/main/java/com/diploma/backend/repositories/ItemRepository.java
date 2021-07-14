package com.diploma.backend.repositories;

import com.diploma.backend.entity.Item;
import com.diploma.backend.entity.smartsearch.ItemWithCategory;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {
    List<Item> getItemsByPodcategoryId(Integer categoryId, Pageable pageRequest);
    List<Item> getItemsByPodcategoryCategoryId(Integer categoryId, Pageable pageRequest);
    long countItemsByPodcategoryId(Integer id);
    long countItemsByPodcategoryCategoryId(Integer id);
}
