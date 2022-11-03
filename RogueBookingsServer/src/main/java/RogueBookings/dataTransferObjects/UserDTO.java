package RogueBookings.dataTransferObjects;

import RogueBookings.models.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserDTO {

    private String firstName;
    private String lastName;
    private String email;

    private List<Owner> businesses;

    private List<Member> memberships;

    public UserDTO() {
    }

    public UserDTO(String firstName, String lastName, String email, List<Owner> businesses, List<Member> memberships) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.businesses = businesses;
        this.memberships = memberships;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Owner> getBusinesses() {
        return businesses;
    }

    public void setBusinesses(List<Owner> businesses) {
        this.businesses = businesses;
    }

    public List<Member> getMemberships() {
        return memberships;
    }

    public void setMemberships(List<Member> memberships) {
        this.memberships = memberships;
    }
}
