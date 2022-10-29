package com.example.roguemageyogav3.tryingout;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "business")
public class Business {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "business_seq")
    @SequenceGenerator(name = "business_seq")
    @Column(name = "id", nullable = false)
    private Long id;

    public Business() {
    }

    public Business(Long id, Set<BusinessUser> businessUsers) {
        this.id = id;
        this.businessUsers = businessUsers;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @OneToMany(mappedBy = "business", orphanRemoval = true)
    private Set<BusinessUser> businessUsers = new LinkedHashSet<>();

    public Set<BusinessUser> getBusinessUsers() {
        return businessUsers;
    }

    public void setBusinessUsers(Set<BusinessUser> businessUsers) {
        this.businessUsers = businessUsers;
    }
}