package RogueBookings.converters;

import RogueBookings.dataTransferObjects.UserDTO;
import RogueBookings.models.user.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserDTOConverter {

    ModelMapper modelMapper;

    @Autowired
    public UserDTOConverter() {
        this.modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setSkipNullEnabled(true);
    }

    public UserDTO userToDTO(User user){
        UserDTO userDTO = modelMapper.map(user, UserDTO.class);
        System.out.println(userDTO);
        return userDTO;
    }

    public List<UserDTO> userToDTO(List<User> users){
        return users.stream().map(this::userToDTO).toList();
    }

    public User DTOToUser(UserDTO userDTO){
        return modelMapper.map(userDTO, User.class);

    }

}
