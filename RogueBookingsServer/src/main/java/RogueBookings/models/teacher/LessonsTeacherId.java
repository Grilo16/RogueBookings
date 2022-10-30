package RogueBookings.models.teacher;

import org.hibernate.Hibernate;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class LessonsTeacherId implements Serializable {
    private static final long serialVersionUID = 5623012914195041353L;
    @Column(name = "lesson_id", nullable = false)
    private Long lessonId;

    @Column(name = "teacher_id", nullable = false)
    private Long teacherId;

    public LessonsTeacherId() {
    }

    public LessonsTeacherId(Long lessonId, Long teacherId) {
        this.lessonId = lessonId;
        this.teacherId = teacherId;
    }


    public Long getLessonId() {
        return lessonId;
    }

    public void setLessonId(Long lessonId) {
        this.lessonId = lessonId;
    }

    public Long getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(Long teacherId) {
        this.teacherId = teacherId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        LessonsTeacherId entity = (LessonsTeacherId) o;
        return Objects.equals(this.teacherId, entity.teacherId) &&
                Objects.equals(this.lessonId, entity.lessonId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(teacherId, lessonId);
    }

}