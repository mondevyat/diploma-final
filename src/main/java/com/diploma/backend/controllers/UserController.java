package com.diploma.backend.controllers;

import com.diploma.backend.entity.User;
import com.diploma.backend.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(ItemController.ROOT)
public class UserController {
    static final String ROOT = "/api";

    private final UserService userService;
    private static final Logger logger = LoggerFactory.getLogger(ItemController.class);

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(path = "/users")
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @GetMapping(path = "/users/{id}")
    public User getUser(@PathVariable Integer id) {
        return userService.getUserById(id);
    }
}
