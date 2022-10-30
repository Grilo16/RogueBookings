package RogueBookings.controllers;


import RogueBookings.services.LessonStudentService;
import RogueBookings.models.student.LessonsStudent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "students")
public class LessonStudentController {

    LessonStudentService lessonStudentService;

    @Autowired
    public LessonStudentController(LessonStudentService lessonStudentService) {
        this.lessonStudentService = lessonStudentService;
    }

    @GetMapping
    public List<LessonsStudent> getAllLessonStudents(){
        return lessonStudentService.getAllLessonStudents();
    }

    @PostMapping(value = "/{studentId}/lesson/{lessonId}")
    public void addStudentToLesson(@PathVariable Long studentId, @PathVariable Long lessonId){
        lessonStudentService.addStudentToLesson(studentId, lessonId);

    }
}
