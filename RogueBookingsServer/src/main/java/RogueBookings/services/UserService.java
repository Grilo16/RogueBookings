package RogueBookings.services;

import RogueBookings.converters.DTOConverter;
import RogueBookings.models.user.User;
import RogueBookings.repositories.UserRepository;
import RogueBookings.dataTransferObjects.UserDTO;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.util.List;

@Service
public class UserService {

    UserRepository userRepository;
    UserDTO userDTO;
    ModelMapper modelMapper;
    DTOConverter<UserDTO, User> dtoConverter;
    Type userDTOType = new TypeToken<UserDTO>() {}.getType();
    Type userType = new TypeToken<User>() {}.getType();

    @Autowired
    public UserService(UserRepository userRepository, UserDTO userDTO, DTOConverter<UserDTO, User> dtoConverter) {
        this.userRepository = userRepository;
        this.userDTO = userDTO;
        this.dtoConverter = dtoConverter;
        this.modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setSkipNullEnabled(true);
    }


    public List<UserDTO> getAllUsers() {
        return dtoConverter.entityToDTO(userRepository.findAll(), userDTOType);
    }
    public void addNewUser(User user) {
        userRepository.save(user);
    }

    public void deleteUserById(Long userId) {
        userRepository.deleteById(userId);
    }

    public User editUser(UserDTO userDTO, Long userId) {
        User patchObj = dtoConverter.DTOtoEntity(userDTO, userType);
        User user = userRepository.findById(userId).get();
        modelMapper.map(patchObj, user);
        user.setId(userId);
        userRepository.save(user);
        return user;


    }
}
