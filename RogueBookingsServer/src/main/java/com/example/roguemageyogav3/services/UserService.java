package com.example.roguemageyogav3.services;

import com.example.roguemageyogav3.repositories.UserRepository;
import com.example.roguemageyogav3.models.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();

    }
    public void addNewUser(User user) {
        userRepository.save(user);
    }

    public void deleteUserById(Long userId) {
        userRepository.deleteById(userId);
    }

    public void editUserById(Long userId){
        User userToUpdate = userRepository.findById(userId).get();


    }
}
