package RogueBookings.dataTransferObjects;

import RogueBookings.models.Owner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserDTO {

    private String firstName;
    private String lastName;
    private String email;

    private List<Owner> businesses;

    public UserDTO() {
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
}
