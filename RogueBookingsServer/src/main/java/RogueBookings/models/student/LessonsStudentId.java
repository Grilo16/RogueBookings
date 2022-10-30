package RogueBookings.models.student;

import org.hibernate.Hibernate;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class LessonsStudentId implements Serializable {
    private static final long serialVersionUID = 5225443826369833353L;
    @Column(name = "lesson_id", nullable = false)
    private Long lessonId;

    @Column(name = "students_id", nullable = false)
    private Long studentsId;

    public Long getLessonId() {
        return lessonId;
    }

    public void setLessonId(Long lessonId) {
        this.lessonId = lessonId;
    }

    public Long getStudentsId() {
        return studentsId;
    }

    public void setStudentsId(Long studentsId) {
        this.studentsId = studentsId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        LessonsStudentId entity = (LessonsStudentId) o;
        return Objects.equals(this.studentsId, entity.studentsId) &&
                Objects.equals(this.lessonId, entity.lessonId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(studentsId, lessonId);
    }

}