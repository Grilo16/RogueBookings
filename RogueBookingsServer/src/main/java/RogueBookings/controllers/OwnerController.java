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

    @PostMapping(value = "/{userId}/business/{businessId}")
    public void addOwnerToBusiness(@PathVariable Long userId, @PathVariable Long businessId){
        ownerService.addNewOwnerToBusiness(userId, businessId);
    }

    @PutMapping(path = "/{ownerId}/leave")
    public void removeOwnerFromBusiness(@PathVariable Long ownerId){
        ownerService.removeOwnerFromBusiness(ownerId);
    }
}
