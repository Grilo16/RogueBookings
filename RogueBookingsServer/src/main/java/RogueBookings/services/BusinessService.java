package RogueBookings.services;

import RogueBookings.converters.DTOConverter;
import RogueBookings.dataTransferObjects.BusinessDTO;
import RogueBookings.models.Business;
import RogueBookings.repositories.BusinessRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.util.List;

@Service
public class BusinessService {

    ModelMapper modelMapper;

    BusinessRepository businessRepository;

    DTOConverter<BusinessDTO, Business> dtoConverter;

    Type businessDTOType = new TypeToken<BusinessDTO>() {}.getType();

    Type businessType = new TypeToken<Business>() {}.getType();





    @Autowired
    public BusinessService( BusinessRepository businessRepository, DTOConverter<BusinessDTO, Business> dtoConverter) {
        this.businessRepository = businessRepository;
        this.dtoConverter = dtoConverter;
        this.modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setSkipNullEnabled(true);
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

    public Business editBusiness(BusinessDTO businessDTO, Long businessId) {
        Business patchObj = dtoConverter.DTOtoEntity(businessDTO, businessType);
        Business business = businessRepository.findById(businessId).get();
        modelMapper.map(patchObj, business);
        businessRepository.save(business);
        return business;
    }
}
