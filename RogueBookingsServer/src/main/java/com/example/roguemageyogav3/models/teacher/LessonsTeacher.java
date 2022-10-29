package com.example.roguemageyogav3.models.teacher;

import com.example.roguemageyogav3.models.Lesson.Lesson;
import com.example.roguemageyogav3.models.user.User;
import com.fasterxml.jackson.annotation.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "lessons_teachers")
public class LessonsTeacher {
    @EmbeddedId
    private LessonsTeacherId id;

    @MapsId("lessonId")
    @JsonIgnore
    @ManyToOne(optional = false)
    @JoinColumn(name = "lesson_id", nullable = false)
    private Lesson lesson;

    @MapsId("teacherId")
    @JsonBackReference
    @ManyToOne(optional = false)
    @JoinColumn(name = "teacher_id", nullable = false)
    private User teacher;

    @Transient
    private String lessonName;

    @Transient
    private String businessName;

    @Transient
    private String teacherName;

    @Column(name = "admin")
    private Boolean admin = false;

    @Column(name = "payment")
    private Long payment;

    public LessonsTeacher() {
    }

    public LessonsTeacher(Lesson lesson, User teacher, String lessonName, String businessName, String teacherName, Boolean admin, Long payment) {
        this.lesson = lesson;
        this.teacher = teacher;
        this.lessonName = lessonName;
        this.businessName = businessName;
        this.teacherName = teacherName;
        this.admin = admin;
        this.payment = payment;
    }

    public LessonsTeacher(LessonsTeacherId id, Lesson lesson, User teacher, String lessonName, String businessName, String teacherName, Boolean admin, Long payment) {
        this.id = id;
        this.lesson = lesson;
        this.teacher = teacher;
        this.lessonName = lessonName;
        this.businessName = businessName;
        this.teacherName = teacherName;
        this.admin = admin;
        this.payment = payment;
    }

    public String getLessonName() {
        return lesson.getName();
    }

    public void setLessonName(String lessonName) {
        this.lessonName = lessonName;
    }

    public String getBusinessName() {
        return lesson.getBusiness().getName();
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }


    public String getTeacherName() {
        return teacher.getFirstName() + " "+ teacher.getLastName();
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }

    public Long getPayment() {
        return payment;
    }

    public void setPayment(Long payment) {
        this.payment = payment;
    }

    public Boolean getAdmin() {
        return admin;
    }

    public void setAdmin(Boolean admin) {
        this.admin = admin;
    }

    public LessonsTeacherId getId() {
        return id;
    }

    public void setId(LessonsTeacherId id) {
        this.id = id;
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
        LessonsTeacher that = (LessonsTeacher) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}