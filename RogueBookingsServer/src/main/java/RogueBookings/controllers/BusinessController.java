package RogueBookings.controllers;

import RogueBookings.dataTransferObjects.BusinessDTO;
import RogueBookings.dataTransferObjects.LessonDTO;
import RogueBookings.models.Lesson.Lesson;
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
    public List<BusinessDTO> getAllBusinesses(){
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

    @PatchMapping(path = "/{businessId}")
    public Business editBusiness(@RequestBody BusinessDTO businessDTO, @PathVariable Long businessId){
        return businessService.editBusiness(businessDTO, businessId);
    }
}
