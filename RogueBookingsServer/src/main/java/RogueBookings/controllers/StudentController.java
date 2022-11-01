package RogueBookings.controllers;


import RogueBookings.services.StudentService;
import RogueBookings.models.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "students")
public class StudentController {

    StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> getAllLessonStudents(){
        return studentService.getAllLessonStudents();
    }

    @PostMapping(value = "/{studentId}/lesson/{lessonId}")
    public void addStudentToLesson(@PathVariable Long studentId, @PathVariable Long lessonId){
        studentService.addStudentToLesson(studentId, lessonId);

    }
}
