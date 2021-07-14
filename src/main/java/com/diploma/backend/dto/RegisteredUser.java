package com.diploma.backend.dto;

public class RegisteredUser {
    private Integer id;
    private String name;
    private String userSurname;
    private String email;
    private String token;

    public RegisteredUser(Integer id, String name, String userSurname, String email, String token) {
        this.id = id;
        this.name = name;
        this.userSurname = userSurname;
        this.email = email;
        this.token = token;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUserSurname() {
        return userSurname;
    }

    public void setUserSurname(String userSurname) {
        this.userSurname = userSurname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
