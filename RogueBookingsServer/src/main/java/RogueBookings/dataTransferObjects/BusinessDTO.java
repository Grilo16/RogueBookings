package RogueBookings.dataTransferObjects;

import RogueBookings.models.Owner;
import RogueBookings.models.Member;
import org.springframework.stereotype.Component;

import java.util.Set;

@Component
public class BusinessDTO {

    private String name;

    private Long balance;

    private Set<Member> members;

    private Set<Owner> owners;

    public BusinessDTO() {
    }

    public BusinessDTO(String name, Long balance, Set<Member> members, Set<Owner> owners) {
        this.name = name;
        this.balance = balance;
        this.members = members;
        this.owners = owners;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
