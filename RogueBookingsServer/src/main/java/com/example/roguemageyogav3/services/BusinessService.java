package com.example.roguemageyogav3.services;

import com.example.roguemageyogav3.models.business.Business;
import com.example.roguemageyogav3.models.businessOwner.BusinessesOwner;
import com.example.roguemageyogav3.repositories.BusinessRepository;
import com.example.roguemageyogav3.repositories.BusinessesOwnerRepository;
import com.example.roguemageyogav3.models.user.User;
import com.example.roguemageyogav3.repositories.UserRepository;
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
