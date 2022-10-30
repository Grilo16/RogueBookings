package RogueBookings.services;

import RogueBookings.converters.DTOConverter;
import RogueBookings.dataTransferObjects.BusinessDTO;
import RogueBookings.models.business.Business;
import RogueBookings.repositories.BusinessRepository;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.util.List;

@Service
public class BusinessService {


    BusinessRepository businessRepository;

    DTOConverter<BusinessDTO, Business> dtoConverter;

    Type businessDTOType = new TypeToken<BusinessDTO>() {}.getType();
    @Autowired
    public BusinessService( BusinessRepository businessRepository, DTOConverter<BusinessDTO, Business> dtoConverter) {
        this.businessRepository = businessRepository;
        this.dtoConverter = dtoConverter;
    }

    public List<BusinessDTO> getAllBusinesses() {
        return dtoConverter.entityToDTO(businessRepository.findAll(), businessDTOType);
    }

    public void createNewBusiness(Business business) {
        businessRepository.save(business);
    }

    public void deleteBusinessByid(Long id) {
        businessRepository.deleteById(id);
    }
}
