package com.diploma.backend.entity;

import com.sun.istack.NotNull;

import javax.persistence.*;

@Entity
@Table(name = "USER_ITEMS")
public class UserItem {
    @Id
    @NotNull
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotNull
    @Column(name = "USER_ID")
    private Integer userId;
    @NotNull
    @Column(name = "ITEM_ID")
    private Integer itemId;

    public UserItem() {
    }

    public UserItem(Integer userId, Integer itemId) {
        this.userId = userId;
        this.itemId = itemId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getItemId() {
        return itemId;
    }

    public void setItemId(Integer itemId) {
        this.itemId = itemId;
    }
}
