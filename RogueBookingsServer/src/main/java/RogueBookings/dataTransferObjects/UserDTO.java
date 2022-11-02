package RogueBookings.dataTransferObjects;

import RogueBookings.models.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserDTO {

    private String firstName;
    private String lastName;
    private String email;

    private List<Owner> businesses;

    private List<Student> students;

    private List<Member> memberships;

    private List<Teacher> teachers;

    public UserDTO() {
    }

    public UserDTO(String firstName, String lastName, String email, List<Owner> businesses, List<Student> students, List<Member> memberships, List<Teacher> teachers) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.businesses = businesses;
        this.students = students;
        this.memberships = memberships;
        this.teachers = teachers;
    }

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
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

    public List<Owner> getBusinesses() {
        return businesses;
    }

    public void setBusinesses(List<Owner> businesses) {
        this.businesses = businesses;
    }

    public List<Member> getMemberships() {
        return memberships;
    }

    public void setMemberships(List<Member> memberships) {
        this.memberships = memberships;
    }

    public List<Teacher> getTeachers() {
        return teachers;
    }

    public void setTeachers(List<Teacher> teachers) {
        this.teachers = teachers;
    }
}
