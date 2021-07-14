package com.diploma.backend.controllers;

import com.diploma.backend.dto.SubcategoryDto;
import com.diploma.backend.entity.Item;
import com.diploma.backend.entity.Podcategory;
import com.diploma.backend.service.ItemService;
import com.diploma.backend.service.PodcategoryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(PodcategoryController.ROOT)
public class PodcategoryController {
    static final String ROOT = "/api";

    private final PodcategoryService podcategoryService;
    private static final Logger logger = LoggerFactory.getLogger(PodcategoryController.class);

    public PodcategoryController(PodcategoryService podcategoryService) {
        this.podcategoryService = podcategoryService;
    }

    @GetMapping(path = "/subcategory")
    public List<Podcategory> getPodcategories() {
        return podcategoryService.getPodcategories();
    }

    @GetMapping(path = "/subcategory/{categoryId}")
    public List<Podcategory> getPodcategoriesByCategoryId(@PathVariable Integer categoryId) {
        return podcategoryService.getPodcategoriesByCategoryId(categoryId);
    }

    @GetMapping(path = "/getSubcategory")
    public Podcategory getPodcategoryByName(@RequestParam String name) {
        return podcategoryService.getPodcategoryByNameSubcategory(name);
    }
}
