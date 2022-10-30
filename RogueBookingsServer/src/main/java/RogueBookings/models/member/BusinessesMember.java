package RogueBookings.models.member;

import RogueBookings.models.business.Business;
import RogueBookings.models.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "businesses_members")
public class BusinessesMember {
    @EmbeddedId
    private BusinessesMemberId id;

    @MapsId("businessId")
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "business_id", nullable = false)
    private Business business;

    @MapsId("membersId")
    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "members_id", nullable = false)
    private User members;

    @Transient
    private String memberName;

    @Transient
    private String businessName;


    public BusinessesMember() {
    }

    public BusinessesMember(Business business, User members, String memberName, String businessName) {
        this.business = business;
        this.members = members;
        this.memberName = memberName;
        this.businessName = businessName;
    }

    public BusinessesMember(BusinessesMemberId id, Business business, User members, String memberName, String businessName) {
        this.id = id;
        this.business = business;
        this.members = members;
        this.memberName = memberName;
        this.businessName = businessName;
    }

    public String getBusinessName() {
        return business.getName();
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }


    public String getMemberName() {
        return members.getFirstName() + " " + members.getLastName();
    }

    public void setMemberName(String memberName) {
        this.memberName = memberName;
    }

    public BusinessesMemberId getId() {
        return id;
    }

    public void setId(BusinessesMemberId id) {
        this.id = id;
    }

    public Business getBusiness() {
        return business;
    }

    public void setBusiness(Business business) {
        this.business = business;
    }

    public User getMembers() {
        return members;
    }

    public void setMembers(User members) {
        this.members = members;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        BusinessesMember that = (BusinessesMember) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}