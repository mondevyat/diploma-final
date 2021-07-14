package com.diploma.backend.repositories;

import com.diploma.backend.entity.Podcategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PodcategoryRepository extends JpaRepository<Podcategory, Integer> {
    List<Podcategory> getPodcategoriesByCategoryId(Integer id);
    Podcategory getPodcategoryByNameSubcategory(String name);
}
