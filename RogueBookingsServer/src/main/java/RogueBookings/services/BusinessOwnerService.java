package RogueBookings.services;


import RogueBookings.converters.DTOConverter;
import RogueBookings.dataTransferObjects.OwnerDTO;
import RogueBookings.dataTransferObjects.UserDTO;
import RogueBookings.models.businessOwner.BusinessesOwner;
import RogueBookings.models.user.User;
import RogueBookings.repositories.BusinessesOwnerRepository;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.util.List;

@Service
public class BusinessOwnerService {

    BusinessesOwnerRepository businessesOwnerRepository;

    DTOConverter<OwnerDTO, BusinessesOwner> dtoConverter;
    Type ownerDTOType = new TypeToken<OwnerDTO>() {}.getType();
    Type businessOwnerType = new TypeToken<BusinessesOwner>() {}.getType();


    @Autowired
    public BusinessOwnerService(BusinessesOwnerRepository businessesOwnerRepository, DTOConverter<OwnerDTO, BusinessesOwner> dtoConverter) {
        this.businessesOwnerRepository = businessesOwnerRepository;
        this.dtoConverter = dtoConverter;
    }





    public List<OwnerDTO> getAllBusinessOwners() {
        return dtoConverter.entityToDTO(businessesOwnerRepository.findAll(), ownerDTOType);
    }

    public void addNewOwnerToBusiness(Long ownerId, Long businessId){
        businessesOwnerRepository.addOwnerToBusiness(ownerId, businessId);

    }

}
