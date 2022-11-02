package RogueBookings.services;

import RogueBookings.converters.DTOConverter;
import RogueBookings.exception.OopsieRequestException;
import RogueBookings.models.User;
import RogueBookings.models.userLogs.UserLogs;
import RogueBookings.repositories.UserLogsRepository;
import RogueBookings.repositories.UserRepository;
import RogueBookings.dataTransferObjects.UserDTO;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    UserRepository userRepository;
    ModelMapper modelMapper;
    DTOConverter<UserDTO, User> dtoConverter;
    Type userDTOType = new TypeToken<UserDTO>() {}.getType();
    Type userType = new TypeToken<User>() {}.getType();

    private User user;
    private UserLogs userLogs;
    UserLogsRepository userLogsRepository;


    @Autowired
    public UserService(UserRepository userRepository, DTOConverter<UserDTO, User> dtoConverter, UserLogsRepository userLogsRepository) {
        this.userRepository = userRepository;
        this.dtoConverter = dtoConverter;
        this.userLogsRepository = userLogsRepository;
        this.modelMapper = new ModelMapper();

        modelMapper.getConfiguration().setSkipNullEnabled(true);
    }

    public List<UserDTO> getAllUsers() {
        return dtoConverter.entityToDTO(userRepository.findAll(), userDTOType);
    }
    public UserDTO addNewUser(UserDTO userDTO) {
        user = dtoConverter.DTOtoEntity(userDTO, userType);
        userLogs = new UserLogs();
        userLogs.setUser(user);
        user.setUserLogs(userLogs);
        try {
            return dtoConverter.entityToDTO(userRepository.save(user), userDTOType);
        }catch (Exception e){
            throw new OopsieRequestException("save did not work try again lol");
        }
    }

    public ResponseEntity<String> deleteUserById(Long userId) {
        if (!userRepository.existsById(userId)) {
            throw new OopsieRequestException("Oopsie This user doesnt exist sadge");
        }
        userRepository.deleteById(userId);
        return new ResponseEntity<>("Successfully deleted user", HttpStatus.OK);
    }

    public UserDTO editUser(UserDTO userDTO, Long userId) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()){
            User userToUpdate = user.get();
            User updatedUser;
                try {
                    User patchObj = dtoConverter.DTOtoEntity(userDTO, userType);
                    modelMapper.map(patchObj, userToUpdate);
                    updatedUser = userRepository.save(userToUpdate);
                }catch (Exception e){
                    throw new OopsieRequestException("Edits did not work sry");
                }
                return dtoConverter.entityToDTO(updatedUser, userDTOType);
        }
        throw new OopsieRequestException("Oopsie This user doesnt exist sadge");
    }
}

