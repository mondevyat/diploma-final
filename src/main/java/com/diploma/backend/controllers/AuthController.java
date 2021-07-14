package com.diploma.backend.controllers;

import com.diploma.backend.config.jwt.JwtProvider;
import com.diploma.backend.dto.RegisteredUser;
import com.diploma.backend.entity.AuthRequest;
import com.diploma.backend.entity.User;
import com.diploma.backend.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class AuthController {
    private UserService userService;
    private JwtProvider jwtProvider;

    public AuthController(UserService userService, JwtProvider jwtProvider) {
        this.userService = userService;
        this.jwtProvider = jwtProvider;
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody @Valid User user) {
        User u = new User();
        u.setName(user.getName());
        u.setUserSurname(user.getUserSurname());
        u.setPassword(user.getPassword());
        u.setEmail(user.getEmail());
        u.setHistoryId(user.getHistoryId());
            userService.saveUser(u);
        return "OK";
    }

    @PostMapping("/auth")
    public RegisteredUser auth(@RequestBody AuthRequest request) {
        User userEntity = userService.findByLoginAndPassword(request.getEmail(), request.getPassword());
        String token = jwtProvider.generateToken(userEntity.getEmail());
        return new RegisteredUser(userEntity.getId(), userEntity.getName(), userEntity.getUserSurname(), userEntity.getEmail(), token);
    }
}