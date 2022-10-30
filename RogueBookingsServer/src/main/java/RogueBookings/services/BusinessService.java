package RogueBookings.services;

import RogueBookings.models.business.Business;
import RogueBookings.repositories.UserRepository;
import RogueBookings.repositories.BusinessRepository;
import RogueBookings.repositories.BusinessesOwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusinessService {


    UserRepository userRepository;
    BusinessRepository businessRepository;

    BusinessesOwnerRepository businessesOwnerRepository;

    @Autowired
    public BusinessService(UserRepository userRepository, BusinessRepository businessRepository, BusinessesOwnerRepository businessesOwnerRepository) {
        this.userRepository = userRepository;
        this.businessRepository = businessRepository;
        this.businessesOwnerRepository = businessesOwnerRepository;
    }

    public List<Business> getAllBusinesses() {
        return businessRepository.findAll();
    }

    public void createNewBusiness(Business business) {
        businessRepository.save(business);
    }

    public void deleteBusinessByid(Long id) {
        businessRepository.deleteById(id);
    }
}
