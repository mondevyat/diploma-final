package com.diploma.backend.controllers;

import com.diploma.backend.entity.Item;
import com.diploma.backend.service.ItemService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(ItemController.ROOT)
public class ItemController {
    static final String ROOT = "/api";

    private final ItemService itemsService;
    private static final Logger logger = LoggerFactory.getLogger(ItemController.class);

    public ItemController(ItemService itemsService) {
        this.itemsService = itemsService;
    }

    @GetMapping(path = "/items")
    public List<Item> getItems() {
        return itemsService.getItems();
    }

    @GetMapping(path = "/items/{id}")
    public Item getItem(@PathVariable Integer id) {
        return itemsService.getItemById(id);
    }

    //localhost:8090/api/items/category/1?index=0&offset=20
    @GetMapping(path = "/items/category/{categoryId}")
    public List<Item> getItemsByPodcategoryCategoryId(@PathVariable Integer categoryId, @RequestParam Integer index, @RequestParam Integer offset) {
        return itemsService.getItemsByPodcategoryCategoryId(categoryId, index, offset);
    }

    @GetMapping(path = "/items/podcategory/{podcategoryId}")
    public List<Item> getItemsByPodcategoryId(@PathVariable Integer podcategoryId, @RequestParam Integer index, @RequestParam Integer offset) {
        return itemsService.getItemsByPodcategoryId(podcategoryId, index, offset);
    }

    //localhost:8090/api/items/page?index=0&offset=20
    @GetMapping(path = "/items/page")
    public List<Item> getItemPage(@RequestParam Integer index, @RequestParam Integer offset) {
        logger.info("Getting page with items. Index: {}, Offset: {}", index, offset);
        return itemsService.getItemPage(index, offset);
    }

    @PostMapping(path = "/items/newItem")
    public Item newItem(@RequestBody Item newItem) {
        logger.info(
                "Request to save a new item is received. New item: {}", newItem.toString());
        return itemsService.newItem(newItem);
    }

    @DeleteMapping(path = "/items/{itemId}")
    public void deleteItem(@PathVariable Integer itemId) {
        logger.info("Request to delete an item with ID={} received", itemId);
        itemsService.deleteItem(itemId);
    }

    @PutMapping(path = "/items/{itemId}")
    public Item updateItem(@RequestBody Item newItem, @PathVariable Integer itemId) {
        logger.info("Request to update an item with ID={} received", itemId);
        return itemsService.updateItem(newItem, itemId);
    }

    @GetMapping(path = "/items/count")
    public long getCountItems() {
        return itemsService.countOfItems();
    }

    @GetMapping(path = "/items/countSubcategory/{subcategoryId}")
    public long getCountOfItemsSubcategory(@PathVariable Integer subcategoryId) {
        return itemsService.getCountOfItemsBySubcategoryId(subcategoryId);
    }

    @GetMapping(path = "/items/countCategory/{categoryId}")
    public long getCountOfItemsCategory(@PathVariable Integer categoryId) {
        return itemsService.countItemsBySubcategoryCategoryId(categoryId);
    }

    @PutMapping(path = "/items/views/{itemId}")
    public Item updateItemViews(@PathVariable Integer itemId) {
        logger.info("Request to update an item views with ID={} received", itemId);
        return itemsService.updateItemViews(itemId);
    }
}
