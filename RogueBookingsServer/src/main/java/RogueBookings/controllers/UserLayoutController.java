package RogueBookings.controllers;


import RogueBookings.models.UserLayout;
import RogueBookings.services.UserLayoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(value = "http://localhost:3000/")
@RequestMapping(path = "layouts")
public class UserLayoutController {

    private UserLayoutService userLayoutService;

    @Autowired
    public UserLayoutController(UserLayoutService userLayoutService) {
        this.userLayoutService = userLayoutService;
    }

    @GetMapping
    public List<UserLayout> getAllUserLayouts(){
        return userLayoutService.getAllUserLayouts();
    }
}
