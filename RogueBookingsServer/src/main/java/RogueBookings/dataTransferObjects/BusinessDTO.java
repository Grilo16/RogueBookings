package RogueBookings.dataTransferObjects;

import RogueBookings.converters.DTOConverter;
import RogueBookings.models.member.BusinessesMember;
import org.modelmapper.TypeToken;
import org.springframework.stereotype.Component;

import java.lang.reflect.Type;
import java.util.List;
import java.util.Set;

@Component
public class BusinessDTO {


    DTOConverter<MemberDTO, BusinessesMember> memberDTOConverter = new DTOConverter<>();

    Type memberDTOType = new TypeToken<MemberDTO>() {}.getType();

    String businessName;

    Set<BusinessesMember> businessMembers;

    public BusinessDTO() {
    }

    public BusinessDTO(String businessName, Set<BusinessesMember> businessMembers) {
        this.businessName = businessName;
        this.businessMembers = businessMembers;
    }


    public String getBusinessName() {
        return businessName;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    public List<MemberDTO> getBusinessMembers() {
        return memberDTOConverter.entityToDTO(this.businessMembers, memberDTOType);
    }

    public void setBusinessMembers(Set<BusinessesMember> businessMembers) {
        this.businessMembers = businessMembers;
    }
}
