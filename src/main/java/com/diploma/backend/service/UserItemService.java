package com.diploma.backend.service;

import com.diploma.backend.entity.UserItem;
import com.diploma.backend.repositories.UserItemRepository;
import org.springframework.stereotype.Service;

@Service
public class UserItemService {
    private UserItemRepository userItemRepository;

    public UserItemService(UserItemRepository userItemRepository) {
        this.userItemRepository = userItemRepository;
    }

    public UserItem saveUserItem(UserItem userItem) {
        return userItemRepository.save(userItem);
    }

    public void deleteUserItem(Integer userId, Integer itemId) {
        userItemRepository.deleteByUserIdAndItemId(userId, itemId);
    }
}
