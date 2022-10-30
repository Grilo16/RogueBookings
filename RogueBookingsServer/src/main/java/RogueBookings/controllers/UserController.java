package RogueBookings.controllers;


import RogueBookings.models.user.User;
import RogueBookings.dataTransferObjects.UserDTO;
import RogueBookings.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "http://localhost:3000/")
@RequestMapping(path = "users")
public class UserController {

    UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<UserDTO> getAllUsers(){
        return userService.getAllUsers();
    }

    @PostMapping
    public void addNewUser(@RequestBody User user){
        userService.addNewUser(user);
    }

    @DeleteMapping(path = "/{userId}")
    public void deleteUserById(@PathVariable Long userId){
        userService.deleteUserById(userId);
    }

    @PatchMapping(path = "/{userId}")
    public User editUser(@RequestBody UserDTO user, @PathVariable Long userId){
        return userService.editUser(user, userId);
    }

}
