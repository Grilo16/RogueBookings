package com.example.roguemageyogav3.tryingout;

import org.hibernate.Hibernate;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class BusinessUserId implements Serializable {
    private static final long serialVersionUID = 5502529504732077017L;
    @Column(name = "business_id", nullable = false)
    private Long businessId;

    @Column(name = "users_id", nullable = false)
    private Long usersId;

    public Long getBusinessId() {
        return businessId;
    }

    public void setBusinessId(Long businessId) {
        this.businessId = businessId;
    }

    public Long getUsersId() {
        return usersId;
    }

    public void setUsersId(Long usersId) {
        this.usersId = usersId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        BusinessUserId entity = (BusinessUserId) o;
        return Objects.equals(this.businessId, entity.businessId) &&
                Objects.equals(this.usersId, entity.usersId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(businessId, usersId);
    }

}