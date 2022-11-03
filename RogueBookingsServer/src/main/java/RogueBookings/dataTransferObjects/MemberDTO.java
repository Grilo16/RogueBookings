package RogueBookings.dataTransferObjects;

import RogueBookings.models.Business;
import RogueBookings.models.User;
import org.springframework.stereotype.Component;

@Component
public class MemberDTO {


    Business business;
    User user;

    public MemberDTO() {
    }

    public MemberDTO(Business business, User user) {
        this.business = business;
        this.user = user;
    }

    public Business getBusiness() {
        return business;
    }

    public void setBusiness(Business business) {
        this.business = business;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
