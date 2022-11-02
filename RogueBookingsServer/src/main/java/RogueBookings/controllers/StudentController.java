package RogueBookings.controllers;


import RogueBookings.services.StudentService;
import RogueBookings.models.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "http://localhost:3000/")
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

    @PostMapping(value = "/{userId}/lesson/{lessonId}")
    public void addStudentToLesson(@PathVariable Long userId, @PathVariable Long lessonId){
        studentService.addStudentToLesson(userId, lessonId);
    }

    @PutMapping(value = "/{studentId}/leave")
    public void removeStudentFromLessonById(@PathVariable Long studentId){
        studentService.removeStudentFromLessonByStudentId(studentId);
    }

}
