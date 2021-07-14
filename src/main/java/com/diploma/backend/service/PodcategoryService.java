package com.diploma.backend.service;

import com.diploma.backend.entity.Podcategory;
import com.diploma.backend.exceptions.PodcategoryNotFoundException;
import com.diploma.backend.repositories.PodcategoryRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PodcategoryService {
    private PodcategoryRepository podcategoryRepository;

    public PodcategoryService(PodcategoryRepository podcategoryRepository) {
        this.podcategoryRepository = podcategoryRepository;
    }

    public List<Podcategory> getPodcategories() {
        return podcategoryRepository.findAll();
    }

    public Podcategory getPodcategoryById(Integer id) {return  podcategoryRepository.findById(id)
            .orElseThrow(() -> new PodcategoryNotFoundException(id));}

    public Podcategory getPodcategoryByNameSubcategory(String subcategoryName) {return  podcategoryRepository.getPodcategoryByNameSubcategory(subcategoryName);}

    public Podcategory newUser(Podcategory newPodcategory) {
        return podcategoryRepository.save(newPodcategory);
    }

    public List<Podcategory> getPodcategoryPage(Integer index, Integer offset) {
        return podcategoryRepository.findAll(PageRequest.of(index, offset, Sort.by("id"))).getContent();
    }

    public void deletePodcategory(Integer itemId) {
        podcategoryRepository.deleteById(itemId);
    }

    public Podcategory updatePodcategory(Podcategory newPodcategory, Integer podcategoryId)
    {
        if(podcategoryRepository.existsById(podcategoryId)) {
            newPodcategory.setId(podcategoryId);
            return podcategoryRepository.save(newPodcategory);
        }
        else {
            throw new PodcategoryNotFoundException(podcategoryId);
        }
    }

    public List<Podcategory> getPodcategoriesByCategoryId(Integer id) {
        return podcategoryRepository.getPodcategoriesByCategoryId(id);
    }
}
