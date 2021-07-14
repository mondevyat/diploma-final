package com.diploma.backend.service;

import com.diploma.backend.entity.Role;
import com.diploma.backend.entity.User;
import com.diploma.backend.exceptions.UserNotFoundException;
import com.diploma.backend.repositories.RoleEntityRepository;
import com.diploma.backend.repositories.UserRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private UserRepository userRepository;
    private RoleEntityRepository roleEntityRepository;
    private PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, RoleEntityRepository roleEntityRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleEntityRepository = roleEntityRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Integer id) {return  userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException(id));}

    public User saveUser(User user) {
        Role userRole = roleEntityRepository.findByName("ROLE_USER");
        user.setRole(userRole);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User updateUser(User newUser, Integer itemId)
    {
        if(userRepository.existsById(itemId)) {
            newUser.setId(itemId);
            return userRepository.save(newUser);
        }
        else {
            throw new UserNotFoundException(itemId);
        }
    }

    public List<User> getUserPage(Integer index, Integer offset) {
        return userRepository.findAll(PageRequest.of(index, offset, Sort.by("id"))).getContent();
    }

    public void deleteUser(Integer itemId) {
        userRepository.deleteById(itemId);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User findByLoginAndPassword(String login, String password) {
        User userEntity = findByEmail(login);
        if (userEntity != null) {
            if (passwordEncoder.matches(password, userEntity.getPassword())) {
                return userEntity;
            }
        }
        return null;
    }
}
