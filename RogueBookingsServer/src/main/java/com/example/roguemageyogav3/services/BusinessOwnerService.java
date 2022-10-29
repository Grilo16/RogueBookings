package com.example.roguemageyogav3.services;


import com.example.roguemageyogav3.models.business.Business;
import com.example.roguemageyogav3.models.businessOwner.BusinessesOwner;
import com.example.roguemageyogav3.models.user.User;
import com.example.roguemageyogav3.repositories.BusinessRepository;
import com.example.roguemageyogav3.repositories.BusinessesOwnerRepository;
import com.example.roguemageyogav3.repositories.UserRepository;
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
