package RogueBookings.services;


import RogueBookings.converters.DTOConverter;
import RogueBookings.dataTransferObjects.OwnerDTO;
import RogueBookings.models.Business;
import RogueBookings.models.Owner;
import RogueBookings.models.User;
import RogueBookings.repositories.BusinessRepository;
import RogueBookings.repositories.OwnerRepository;
import RogueBookings.repositories.UserRepository;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.util.List;

@Service
public class OwnerService {

    private OwnerRepository ownerRepository;

    private UserRepository userRepository;
    private BusinessRepository businessRepository;

    DTOConverter<OwnerDTO, Owner> dtoConverter;
    Type ownerDTOType = new TypeToken<OwnerDTO>() {}.getType();
    Type businessOwnerType = new TypeToken<Owner>() {}.getType();


    @Autowired
    public OwnerService(OwnerRepository ownerRepository, UserRepository userRepository, BusinessRepository businessRepository, DTOConverter<OwnerDTO, Owner> dtoConverter) {
        this.ownerRepository = ownerRepository;
        this.userRepository = userRepository;
        this.businessRepository = businessRepository;
        this.dtoConverter = dtoConverter;
    }

    public List<OwnerDTO> getAllBusinessOwners() {
        return dtoConverter.entityToDTO(ownerRepository.findAll(), ownerDTOType);
    }

    public void addNewOwnerToBusiness(Long ownerId, Long businessId){
        User user = userRepository.findById(ownerId).get();
        Business business = businessRepository.findById(businessId).get();
        Owner owner = new Owner();
        owner.setBusiness(business);
        owner.setOwner(user);
        ownerRepository.save(owner);
    }

}
