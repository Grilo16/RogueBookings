package RogueBookings.dataTransferObjects;

import RogueBookings.models.businessOwner.BusinessesOwner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserDTO {

    private String firstName;
    private String lastName;
    private String email;

    private List<BusinessesOwner> businessesOwned;

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

    public List<BusinessesOwner> getBusinessesOwned() {
        return businessesOwned;
    }

    public void setBusinessesOwned(List<BusinessesOwner> businessesOwned) {
        this.businessesOwned = businessesOwned;
    }
}
