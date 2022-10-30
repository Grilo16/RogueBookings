package RogueBookings.controllers;

import RogueBookings.models.business.Business;
import RogueBookings.services.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path = "businesses")
public class BusinessController {

    BusinessService businessService;

    @Autowired
    public BusinessController(BusinessService businessService) {
        this.businessService = businessService;
    }


    @GetMapping
    public List<Business> getAllBusinesses(){
        return businessService.getAllBusinesses();
    }

    @PostMapping
    public void createNewBusiness(@RequestBody Business business){
        businessService.createNewBusiness(business);
    }

    @DeleteMapping(value = "/{businessId}")
    public void deleteBusinessById(@PathVariable Long businessId){
        businessService.deleteBusinessByid(businessId);

    }
}
