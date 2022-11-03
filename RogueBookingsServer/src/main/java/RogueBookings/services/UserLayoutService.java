package RogueBookings.services;

import RogueBookings.models.UserLayout;
import RogueBookings.repositories.UserLayoutRepository;
import RogueBookings.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserLayoutService {

    private UserLayoutRepository userLayoutRepository;

    @Autowired
    public UserLayoutService(UserLayoutRepository userLayoutRepository) {
        this.userLayoutRepository = userLayoutRepository;
    }

    public List<UserLayout> getAllUserLayouts() {
        return userLayoutRepository.findAll();
    }
}
