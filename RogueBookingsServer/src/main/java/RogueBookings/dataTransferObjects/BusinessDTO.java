package RogueBookings.dataTransferObjects;

import RogueBookings.converters.DTOConverter;
import RogueBookings.models.Owner;
import RogueBookings.models.Member;
import org.modelmapper.TypeToken;
import org.springframework.stereotype.Component;

import java.lang.reflect.Type;
import java.util.Set;

@Component
public class BusinessDTO {


    DTOConverter<MemberDTO, Member> memberDTOConverter = new DTOConverter<>();

    Type memberDTOType = new TypeToken<MemberDTO>() {}.getType();

    private String businessName;

    private Long balance;

    private Set<Member> members;

    private Set<Owner> owners;

    public BusinessDTO() {
    }

    public BusinessDTO(String businessName, Long balance, Set<Member> members, Set<Owner> owners) {
        this.businessName = businessName;
        this.balance = balance;
        this.members = members;
        this.owners = owners;
    }

    public String getBusinessName() {
        return businessName;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    public Long getBalance() {
        return balance;
    }

    public void setBalance(Long balance) {
        this.balance = balance;
    }

    public Set<Owner> getOwners() {
        return owners;
    }

    public void setOwners(Set<Owner> owners) {
        this.owners = owners;
    }

    public Set<Member> getMembers() {
        return members;
    }

    public void setMembers(Set<Member> members) {
        this.members = members;
    }
}
