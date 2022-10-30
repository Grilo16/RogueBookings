package RogueBookings.models.businessOwner;

import org.hibernate.Hibernate;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class BusinessesOwnerId implements Serializable {
    @Column(name = "business_id", nullable = false)
    private Long businessId;

    @Column(name = "owner_id", nullable = false)
    private Long ownerId;

    public BusinessesOwnerId() {
    }

    public BusinessesOwnerId(Long businessId, Long ownerId) {
        this.businessId = businessId;
        this.ownerId = ownerId;
    }

    public Long getBusinessId() {
        return businessId;
    }

    public void setBusinessId(Long businessId) {
        this.businessId = businessId;
    }

    public Long getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Long ownerId) {
        this.ownerId = ownerId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        BusinessesOwnerId entity = (BusinessesOwnerId) o;
        return Objects.equals(this.businessId, entity.businessId) &&
                Objects.equals(this.ownerId, entity.ownerId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(businessId, ownerId);
    }

}