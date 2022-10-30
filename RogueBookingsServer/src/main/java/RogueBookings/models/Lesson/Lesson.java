package RogueBookings.models.Lesson;

import RogueBookings.models.business.Business;
import RogueBookings.models.teacher.LessonsTeacher;
import RogueBookings.models.user.User;
import com.fasterxml.jackson.annotation.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "lessons")
public class Lesson {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "lesson_seq")
    @SequenceGenerator(name = "lesson_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = false, unique = true)
    private String name;


    @Column(name = "date", nullable = false)
    private String date;

    @Column(name = "capacity", nullable = false)
    private Integer capacity;

    @Column(name = "description")
    private String description;

    @Column(name = "price", nullable = false)
    private Long price;


    @ManyToOne(optional = false)
    @JsonBackReference
    @JoinColumn(name = "business_id", nullable = false)
    private Business business;


    @OneToMany(mappedBy = "lesson", cascade = CascadeType.ALL)
    private Set<LessonsTeacher> lessonsTeachers = new LinkedHashSet<>();

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinTable(name = "lessons_students",
            joinColumns = @JoinColumn(name = "lesson_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "students_id", referencedColumnName = "id"))
    private Set<User> students = new LinkedHashSet<>();

    public Lesson() {
    }

    public Lesson(String name, String date, Integer capacity, String description, Long price, Business business, Set<LessonsTeacher> lessonsTeachers, Set<User> students) {
        this.name = name;
        this.date = date;
        this.capacity = capacity;
        this.description = description;
        this.price = price;
        this.business = business;
        this.lessonsTeachers = lessonsTeachers;
        this.students = students;
    }

    public Lesson(Long id, String name, String date, Integer capacity, String description, Long price, Business business, Set<LessonsTeacher> lessonsTeachers, Set<User> students) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.capacity = capacity;
        this.description = description;
        this.price = price;
        this.business = business;
        this.lessonsTeachers = lessonsTeachers;
        this.students = students;
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

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public Business getBusiness() {
        return business;
    }

    public void setBusiness(Business business) {
        this.business = business;
    }

    public Set<LessonsTeacher> getLessonsTeachers() {
        return lessonsTeachers;
    }

    public void setLessonsTeachers(Set<LessonsTeacher> lessonsTeachers) {
        this.lessonsTeachers = lessonsTeachers;
    }

    public Set<User> getStudents() {
        return students;
    }

    public void setStudents(Set<User> students) {
        this.students = students;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Lesson lesson = (Lesson) o;
        return id != null && Objects.equals(id, lesson.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}