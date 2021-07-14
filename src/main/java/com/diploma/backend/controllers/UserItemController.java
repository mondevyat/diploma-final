package com.diploma.backend.controllers;

import com.diploma.backend.entity.UserItem;
import com.diploma.backend.service.UserItemService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(ItemController.ROOT)
public class UserItemController {
    public static final String ROOT = "/api";
    private final UserItemService userItemService;
    private static final Logger logger = LoggerFactory.getLogger(UserItemController.class);

    public UserItemController(UserItemService userItemService) {
        this.userItemService = userItemService;
    }

    @PostMapping(path = "/items/userItem")
    public UserItem newUserItemReference(@RequestBody UserItem newUserItem) {
        logger.info(
                "Request to save a new user-item reference is received. New user-item ref: {}", newUserItem.toString());
        return userItemService.saveUserItem(newUserItem);
    }

    @CrossOrigin
    @Transactional
    @RequestMapping(method = RequestMethod.DELETE, path = "/items/deleteItem/{userId}/{itemId}")
    public void deleteUserItem(@PathVariable Integer userId, @PathVariable String itemId) {
        logger.info(
                "Request to delete a reference user-item is received. UserID: {}, itemId: {}", userId, itemId);
        userItemService.deleteUserItem(userId, Integer.valueOf(itemId));
    }
}
