package RogueBookings.dataTransferObjects;

import org.springframework.stereotype.Component;

@Component
public class OwnerDTO {

    private String ownerName;

    public OwnerDTO() {
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }
}
