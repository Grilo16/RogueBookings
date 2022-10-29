package com.example.roguemageyogav3.controllers;

import com.example.roguemageyogav3.models.teacher.LessonsTeacher;
import com.example.roguemageyogav3.services.LessonTeacherService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "teachers")
public class LessonTeacherController {

    LessonTeacherService lessonTeacherService;

    public LessonTeacherController(LessonTeacherService lessonTeacherService) {
        this.lessonTeacherService = lessonTeacherService;
    }

    @GetMapping
    public List<LessonsTeacher> getAllLessonTeachers(){
        return lessonTeacherService.getAllLessonTeachers();
    }

    @PostMapping(path = "/new/{teacherId}/lesson/{lessonId}")
    public void addTeacherToLesson(@PathVariable Long teacherId, @PathVariable Long lessonId){
        lessonTeacherService.addTeacherToLesson(teacherId, lessonId, 420L, false);
    }
}
