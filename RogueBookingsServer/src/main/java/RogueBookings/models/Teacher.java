package RogueBookings.models;

import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "lessons_teachers")
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "lessons_teachers_gen")
    @SequenceGenerator(name = "lessons_teachers_gen", sequenceName = "lessons_teachers_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "admin")
    private Boolean admin = false;

    @Column(name = "payment")
    private Long payment;


    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "lesson_id")
    private Lesson lesson;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User teacher;

    public Teacher() {
    }

    public Teacher(Boolean admin, Long payment, Lesson lesson, User teacher) {
        this.admin = admin;
        this.payment = payment;
        this.lesson = lesson;
        this.teacher = teacher;
    }

    public Teacher(Long id, Boolean admin, Long payment, Lesson lesson, User teacher) {
        this.id = id;
        this.admin = admin;
        this.payment = payment;
        this.lesson = lesson;
        this.teacher = teacher;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean getAdmin() {
        return admin;
    }

    public void setAdmin(Boolean admin) {
        this.admin = admin;
    }

    public Long getPayment() {
        return payment;
    }

    public void setPayment(Long payment) {
        this.payment = payment;
    }

    public Lesson getLesson() {
        return lesson;
    }

    public void setLesson(Lesson lesson) {
        this.lesson = lesson;
    }

    public User getTeacher() {
        return teacher;
    }

    public void setTeacher(User teacher) {
        this.teacher = teacher;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Teacher that = (Teacher) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}