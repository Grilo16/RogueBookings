package RogueBookings.models.student;

import RogueBookings.models.user.User;
import RogueBookings.models.Lesson.Lesson;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "lessons_students")
public class LessonsStudent {
    @EmbeddedId
    private LessonsStudentId id;

    @MapsId("lessonId")
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "lesson_id", nullable = false)
    private Lesson lesson;

    @MapsId("studentsId")
    @JsonBackReference
    @ManyToOne(optional = false)
    @JoinColumn(name = "students_id", nullable = false)
    private User students;

    @Column(name = "review")
    private String review;

    @Transient
    private String studentName;

    public LessonsStudent() {
    }

    public LessonsStudent(Lesson lesson, User students, String review, String studentName) {
        this.lesson = lesson;
        this.students = students;
        this.review = review;
        this.studentName = studentName;
    }

    public LessonsStudent(LessonsStudentId id, Lesson lesson, User students, String review, String studentName) {
        this.id = id;
        this.lesson = lesson;
        this.students = students;
        this.review = review;
        this.studentName = studentName;
    }

    public String getStudentName() {
        return students.getFirstName()+ " "+ students.getLastName();
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public LessonsStudentId getId() {
        return id;
    }

    public void setId(LessonsStudentId id) {
        this.id = id;
    }

    public Lesson getLesson() {
        return lesson;
    }

    public void setLesson(Lesson lesson) {
        this.lesson = lesson;
    }

    public User getStudents() {
        return students;
    }

    public void setStudents(User students) {
        this.students = students;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        LessonsStudent that = (LessonsStudent) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}