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

    Long balance;

    Set<BusinessesMember> businessMembers;

    public BusinessDTO() {
    }

    public BusinessDTO(String businessName, Long balance, Set<BusinessesMember> businessMembers) {
        this.businessName = businessName;
        this.balance = balance;
        this.businessMembers = businessMembers;
    }

    public String getBusinessName() {
        return businessName;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    public List<MemberDTO> getBusinessMembers() {
        if (this.businessMembers == null){
            return null;
        }
        return memberDTOConverter.entityToDTO(this.businessMembers, memberDTOType);
    }

    public void setBusinessMembers(Set<BusinessesMember> businessMembers) {
        this.businessMembers = businessMembers;
    }

    public Long getBalance() {
        return balance;
    }

    public void setBalance(Long balance) {
        this.balance = balance;
    }
}
