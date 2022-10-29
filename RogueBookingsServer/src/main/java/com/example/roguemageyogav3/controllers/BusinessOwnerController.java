package com.example.roguemageyogav3.controllers;


import com.example.roguemageyogav3.models.businessOwner.BusinessesOwner;
import com.example.roguemageyogav3.services.BusinessOwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "owners")
public class BusinessOwnerController {

    BusinessOwnerService businessOwnerService;

    @Autowired
    public BusinessOwnerController(BusinessOwnerService businessOwnerService) {
        this.businessOwnerService = businessOwnerService;
    }

    @GetMapping
    public List<BusinessesOwner> getAllBusinessOwners(){
        return businessOwnerService.getAllBusinessOwners();
    }

    @PostMapping(value = "/{ownerId}/business/{businessId}")
    public void addOwnerToBusiness(@PathVariable Long ownerId, @PathVariable Long businessId){
        businessOwnerService.addNewOwnerToBusiness(ownerId, businessId);
    }
}
