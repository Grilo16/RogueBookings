package RogueBookings.controllers;


import RogueBookings.dataTransferObjects.OwnerDTO;
import RogueBookings.services.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "owners")
public class OwnerController {

    OwnerService ownerService;

    @Autowired
    public OwnerController(OwnerService ownerService) {
        this.ownerService = ownerService;
    }

    @GetMapping
    public List<OwnerDTO> getAllBusinessOwners(){
        return ownerService.getAllBusinessOwners();
    }

    @PostMapping(value = "/{ownerId}/business/{businessId}")
    public void addOwnerToBusiness(@PathVariable Long ownerId, @PathVariable Long businessId){
        ownerService.addNewOwnerToBusiness(ownerId, businessId);
    }
}
