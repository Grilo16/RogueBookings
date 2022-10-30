package RogueBookings.dataTransferObjects;

import org.springframework.stereotype.Component;

@Component
public class TeacherDTO {

    private String teacherName;

    public TeacherDTO() {
    }

    public String getTeacherName() {
        return teacherName;
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }
}
