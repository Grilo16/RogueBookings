package RogueBookings.models.businessOwner;

import RogueBookings.models.business.Business;
import RogueBookings.models.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "businesses_owners")
public class BusinessesOwner {
    @EmbeddedId
    private BusinessesOwnerId id;

    @MapsId("businessId")
    @JsonIgnore
    @ManyToOne(optional = false)
    private Business business;

    @MapsId("ownerId")
    @JsonBackReference
    @ManyToOne(optional = false)
    private User owner;

    @Transient
    private String ownerName;

    @Transient
    private String businessName;

    public BusinessesOwner() {
    }

    public BusinessesOwner(Business business, User owner, String ownerName, String businessName) {
        this.business = business;
        this.owner = owner;
        this.ownerName = ownerName;
        this.businessName = businessName;
    }

    public BusinessesOwner(BusinessesOwnerId id, Business business, User owner, String ownerName, String businessName) {
        this.id = id;
        this.business = business;
        this.owner = owner;
        this.ownerName = ownerName;
        this.businessName = businessName;
    }

    public String getBusinessName() {
        return business.getName();
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    public String getOwnerName() {
        return owner.getFirstName() + " " + owner.getLastName();
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public BusinessesOwnerId getId() {
        return id;
    }

    public void setId(BusinessesOwnerId id) {
        this.id = id;
    }

    public Business getBusiness() {
        return business;
    }

    public void setBusiness(Business business) {
        this.business = business;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        BusinessesOwner that = (BusinessesOwner) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}