package RogueBookings.controllers;

import RogueBookings.models.Teacher;
import RogueBookings.services.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "http://localhost:3000/")
@RequestMapping(path = "teachers")
public class TeacherController {

    TeacherService teacherService;

    @Autowired
    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    @GetMapping
    public List<Teacher> getAllLessonTeachers(){
        return teacherService.getAllLessonTeachers();
    }

    @PostMapping(path = "/{teacherId}/lesson/{lessonId}")
    public Teacher addTeacherToLesson(@RequestBody Teacher teacher, @PathVariable Long teacherId, @PathVariable Long lessonId){
        return teacherService.addTeacherToLesson(teacher, teacherId, lessonId);
    }


    @PutMapping(path = "/{teacherId}/leave")
    public void removeTeacherFromLesson(@PathVariable Long teacherId){
        teacherService.removeTeacherFromLessonByTeacherId(teacherId);
    }
}
