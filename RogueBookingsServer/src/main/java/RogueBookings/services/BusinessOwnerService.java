package RogueBookings.services;


import RogueBookings.models.businessOwner.BusinessesOwner;
import RogueBookings.repositories.BusinessesOwnerRepository;
import RogueBookings.repositories.UserRepository;
import RogueBookings.repositories.BusinessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusinessOwnerService {

    BusinessesOwnerRepository businessesOwnerRepository;
    BusinessRepository businessRepository;
    UserRepository userRepository;

    @Autowired
    public BusinessOwnerService(BusinessesOwnerRepository businessesOwnerRepository, BusinessRepository businessRepository, UserRepository userRepository) {
        this.businessesOwnerRepository = businessesOwnerRepository;
        this.businessRepository = businessRepository;
        this.userRepository = userRepository;
    }




    public List<BusinessesOwner> getAllBusinessOwners() {
        return businessesOwnerRepository.findAll();
    }

    public void addNewOwnerToBusiness(Long ownerId, Long businessId){
        businessesOwnerRepository.addOwnerToBusiness(ownerId, businessId);

    }

}
