package com.diploma.backend.repositories;

import com.diploma.backend.entity.UserItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserItemRepository extends JpaRepository<UserItem, Integer> {
    void deleteByUserIdAndItemId(Integer userId, Integer itemId);
}
