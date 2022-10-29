package com.example.roguemageyogav3.models.user;

import com.example.roguemageyogav3.models.Lesson.Lesson;
import com.example.roguemageyogav3.models.business.Business;
import com.example.roguemageyogav3.models.businessOwner.BusinessesOwner;
import com.example.roguemageyogav3.models.member.BusinessesMember;
import com.example.roguemageyogav3.models.student.LessonsStudent;
import com.example.roguemageyogav3.models.teacher.LessonsTeacher;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "users_seq")
    @SequenceGenerator(name = "users_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "email", nullable = false, length = 319)
    private String email;

    @Column(name = "credits", nullable = false)
    private Long credits = 0L;

    @OneToMany(mappedBy = "owner", orphanRemoval = true)
    private Set<BusinessesOwner> businessesOwned = new LinkedHashSet<>();

    @OneToMany(mappedBy = "teacher", orphanRemoval = true)
    private Set<LessonsTeacher> teachingIn = new LinkedHashSet<>();

    @OneToMany(mappedBy = "students", orphanRemoval = true)
    private Set<LessonsStudent> lessonsStudents = new LinkedHashSet<>();

    @OneToMany(mappedBy = "members", orphanRemoval = true)
    private Set<BusinessesMember> businessesMembers = new LinkedHashSet<>();

    public User() {
    }

    public User(String firstName, String lastName, String email, Long credits, Set<BusinessesOwner> businessesOwned, Set<LessonsTeacher> teachingIn, Set<LessonsStudent> lessonsStudents, Set<BusinessesMember> businessesMembers) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.credits = credits;
        this.businessesOwned = businessesOwned;
        this.teachingIn = teachingIn;
        this.lessonsStudents = lessonsStudents;
        this.businessesMembers = businessesMembers;
    }

    public User(Long id, String firstName, String lastName, String email, Long credits, Set<BusinessesOwner> businessesOwned, Set<LessonsTeacher> teachingIn, Set<LessonsStudent> lessonsStudents, Set<BusinessesMember> businessesMembers) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.credits = credits;
        this.businessesOwned = businessesOwned;
        this.teachingIn = teachingIn;
        this.lessonsStudents = lessonsStudents;
        this.businessesMembers = businessesMembers;
    }

    public Set<BusinessesMember> getBusinessesMembers() {
        return businessesMembers;
    }

    public void setBusinessesMembers(Set<BusinessesMember> businessesMembers) {
        this.businessesMembers = businessesMembers;
    }

    public Set<LessonsStudent> getLessonsStudents() {
        return lessonsStudents;
    }

    public void setLessonsStudents(Set<LessonsStudent> lessonsStudents) {
        this.lessonsStudents = lessonsStudents;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Long getCredits() {
        return credits;
    }

    public void setCredits(Long credits) {
        this.credits = credits;
    }

    public Set<BusinessesOwner> getBusinessesOwned() {
        return businessesOwned;
    }

    public void setBusinessesOwned(Set<BusinessesOwner> businessesOwned) {
        this.businessesOwned = businessesOwned;
    }

    public Set<LessonsTeacher> getTeachingIn() {
        return teachingIn;
    }

    public void setTeachingIn(Set<LessonsTeacher> teachingIn) {
        this.teachingIn = teachingIn;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        User user = (User) o;
        return id != null && Objects.equals(id, user.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}