package RogueBookings.dataTransferObjects;

import RogueBookings.models.Lesson;
import RogueBookings.models.Owner;
import RogueBookings.models.Student;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserDTO {

    private String firstName;
    private String lastName;
    private String email;

    private List<Owner> businesses;

    private List<Student> students;

    public UserDTO() {
    }

    public UserDTO(String firstName, String lastName, String email, List<Owner> businesses, List<Student> students) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.businesses = businesses;
        this.students = students;
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
}
