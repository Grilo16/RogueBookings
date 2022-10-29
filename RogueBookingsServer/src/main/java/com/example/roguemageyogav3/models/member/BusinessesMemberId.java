package com.example.roguemageyogav3.models.member;

import org.hibernate.Hibernate;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class BusinessesMemberId implements Serializable {
    private static final long serialVersionUID = -9124352259520826147L;
    @Column(name = "business_id", nullable = false)
    private Long businessId;

    @Column(name = "members_id", nullable = false)
    private Long membersId;

    public Long getBusinessId() {
        return businessId;
    }

    public void setBusinessId(Long businessId) {
        this.businessId = businessId;
    }

    public Long getMembersId() {
        return membersId;
    }

    public void setMembersId(Long membersId) {
        this.membersId = membersId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        BusinessesMemberId entity = (BusinessesMemberId) o;
        return Objects.equals(this.membersId, entity.membersId) &&
                Objects.equals(this.businessId, entity.businessId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(membersId, businessId);
    }

}