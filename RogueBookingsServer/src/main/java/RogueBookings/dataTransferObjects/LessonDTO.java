package RogueBookings.dataTransferObjects;

import RogueBookings.converters.DTOConverter;
import RogueBookings.models.business.Business;
import RogueBookings.models.student.LessonsStudent;
import RogueBookings.models.teacher.LessonsTeacher;
import org.modelmapper.TypeToken;
import org.springframework.stereotype.Component;

import java.lang.reflect.Type;
import java.util.List;
import java.util.Set;


@Component
public class LessonDTO {





    private String name;

    private String date;

    private Integer capacity;

    private String description;

    private Long price;

    private Business business;

    private Set<LessonsTeacher> teachers;

    private Set<LessonsStudent> students;


    DTOConverter<BusinessDTO, Business> businessDTOConverter = new DTOConverter<>();

    Type businessDTOType = new TypeToken<BusinessDTO>() {}.getType();

    DTOConverter<TeacherDTO, LessonsTeacher> teacherDTOConverter = new DTOConverter<>();

    Type teacherDTOType = new TypeToken<TeacherDTO>() {}.getType();


    DTOConverter<StudentDTO, LessonsStudent> studentDTOConverter = new DTOConverter<>();

    Type studentDTOType = new TypeToken<StudentDTO>() {}.getType();


    public LessonDTO() {
    }

    public LessonDTO(String name, String date, Integer capacity, String description, Long price, Business business, Set<LessonsTeacher> teachers, Set<LessonsStudent> students) {
        this.name = name;
        this.date = date;
        this.capacity = capacity;
        this.description = description;
        this.price = price;
        this.business = business;
        this.teachers = teachers;
        this.students = students;
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

    public BusinessDTO getBusiness() {
        if (this.business == null){
            return null;
        }
        return businessDTOConverter.entityToDTO(this.business, businessDTOType);
    }

    public void setBusiness(Business business) {
        this.business = business;
    }

    public List<TeacherDTO> getTeachers() {
        if (this.teachers == null){
            return null;
        }
        return teacherDTOConverter.entityToDTO(this.teachers, teacherDTOType);
    }

    public void setTeachers(Set<LessonsTeacher> teachers) {
        this.teachers = teachers;
    }

    public List<StudentDTO> getStudents() {
        if (this.students == null){
            return null;
        }
        return studentDTOConverter.entityToDTO(this.students, studentDTOType);
    }

    public void setStudents(Set<LessonsStudent> students) {
        this.students = students;
    }
}
