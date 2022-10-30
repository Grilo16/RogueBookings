package RogueBookings.services;

import RogueBookings.converters.UserDTOConverter;
import RogueBookings.models.user.User;
import RogueBookings.repositories.UserRepository;
import RogueBookings.dataTransferObjects.UserDTO;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    UserRepository userRepository;
    UserDTO userDTO;
    UserDTOConverter userDTOConverter;

    ModelMapper modelMapper;

    @Autowired
    public UserService(UserRepository userRepository, UserDTO userDTO, UserDTOConverter userDTOConverter) {
        this.userRepository = userRepository;
        this.userDTO = userDTO;
        this.userDTOConverter = userDTOConverter;
        this.modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setSkipNullEnabled(true);
    }


    public List<UserDTO> getAllUsers() {
        return userDTOConverter.userToDTO(userRepository.findAll());
    }
    public void addNewUser(User user) {
        userRepository.save(user);
    }

    public void deleteUserById(Long userId) {
        userRepository.deleteById(userId);
    }

    public User editUser(UserDTO userDTO, Long userId) {
        User patchObj = userDTOConverter.DTOToUser(userDTO);
        User user = userRepository.findById(userId).get();
        modelMapper.map(patchObj, user);
        user.setId(userId);
        userRepository.save(user);
        return user;


    }
}
