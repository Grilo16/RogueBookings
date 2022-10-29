package com.example.roguemageyogav3.repositories;

import com.example.roguemageyogav3.models.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

public interface UserRepository extends JpaRepository<User, Long> {
// Working on it
//    @Transactional
//    @Modifying
//    @Query("update User u set u.firstName = ?1, u.lastName = ?2, u. where u.id = ?3")
//    void setUserInfoById(String firstName, String lastName, Long userId);
}