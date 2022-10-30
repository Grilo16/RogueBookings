package RogueBookings.models.business;

import RogueBookings.models.businessOwner.BusinessesOwner;
import RogueBookings.models.Lesson.Lesson;
import RogueBookings.models.member.BusinessesMember;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "businesses")
public class Business {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "business_seq")
    @SequenceGenerator(name = "business_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = false, unique = true)
    private String name;

    @Column(name = "balance", nullable = false)
    private Long balance = 0L;

    @OneToMany(mappedBy = "business", cascade = CascadeType.ALL)
    private Set<BusinessesOwner> businessesOwners = new LinkedHashSet<>();

    @OneToMany(mappedBy = "business", cascade = CascadeType.ALL)
    private Set<BusinessesMember> businessesMembers = new LinkedHashSet<>();

    @OneToMany(mappedBy = "business", cascade = CascadeType.ALL)
    private Set<Lesson> lessons = new LinkedHashSet<>();


    public Business() {
    }

    public Business(String name, Long balance, Set<BusinessesOwner> businessesOwners, Set<BusinessesMember> businessesMembers, Set<Lesson> lessons) {
        this.name = name;
        this.balance = balance;
        this.businessesOwners = businessesOwners;
        this.businessesMembers = businessesMembers;
        this.lessons = lessons;
    }

    public Business(Long id, String name, Long balance, Set<BusinessesOwner> businessesOwners, Set<BusinessesMember> businessesMembers, Set<Lesson> lessons) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.businessesOwners = businessesOwners;
        this.businessesMembers = businessesMembers;
        this.lessons = lessons;
    }

    public Set<BusinessesMember> getBusinessesMembers() {
        return businessesMembers;
    }

    public void setBusinessesMembers(Set<BusinessesMember> businessesMembers) {
        this.businessesMembers = businessesMembers;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getBalance() {
        return balance;
    }

    public void setBalance(Long balance) {
        this.balance = balance;
    }

    public Set<BusinessesOwner> getBusinessesOwners() {
        return businessesOwners;
    }

    public void setBusinessesOwners(Set<BusinessesOwner> businessesOwners) {
        this.businessesOwners = businessesOwners;
    }

    public Set<Lesson> getLessons() {
        return lessons;
    }

    public void setLessons(Set<Lesson> lessons) {
        this.lessons = lessons;
    }
}