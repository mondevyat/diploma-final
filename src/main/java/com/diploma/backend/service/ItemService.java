package com.diploma.backend.service;

import com.diploma.backend.entity.Item;
import com.diploma.backend.entity.smartsearch.ItemWithCategory;
import com.diploma.backend.exceptions.ItemNotFoundException;
import com.diploma.backend.repositories.ItemRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ItemService {
    private final ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<Item> getItems() {
        return itemRepository.findAll();
    }

    public Item getItemById(Integer id) {return  itemRepository.findById(id)
            .orElseThrow(() -> new ItemNotFoundException(id));}

    public Item newItem(Item newItem) {
        return itemRepository.save(newItem);
    }

    public List<Item> getItemPage(Integer index, Integer offset) {
        return itemRepository.findAll(PageRequest.of(index, offset, Sort.by("id"))).getContent();
    }

    public void deleteItem(Integer itemId) {
        itemRepository.deleteById(itemId);
    }

    public Item updateItem(Item newItem, Integer itemId)
    {
        if(itemRepository.existsById(itemId)) {
            newItem.setId(itemId);
            return itemRepository.save(newItem);
        }
        else {
            throw new ItemNotFoundException(itemId);
        }
    }

    public Item updateItemViews(Integer itemId)
    {
        Item item = getItemById(itemId);
        if(itemRepository.existsById(itemId)) {
            item.setViews(item.getViews() + 1);
            return itemRepository.save(item);
        }
        else {
            throw new ItemNotFoundException(itemId);
        }
    }

    public List<Item> getItemsByPodcategoryCategoryId(Integer categoryId, Integer index, Integer offset) {
        return itemRepository.getItemsByPodcategoryCategoryId(categoryId, PageRequest.of(index, offset, Sort.by("id")));
    }

    public List<Item> getItemsByPodcategoryId(Integer podcategoryId, Integer index, Integer offset) {
        return itemRepository.getItemsByPodcategoryId(podcategoryId, PageRequest.of(index, offset, Sort.by("id")));
    }

    public long countOfItems() {
        return itemRepository.count();
    }

    public long getCountOfItemsBySubcategoryId(Integer id) {
        return itemRepository.countItemsByPodcategoryId(id);
    }

    public long countItemsBySubcategoryCategoryId(Integer id) {
        return itemRepository.countItemsByPodcategoryCategoryId(id);
    }
}
