package RogueBookings.controllers;


import RogueBookings.dataTransferObjects.LessonDTO;
import RogueBookings.services.LessonService;
import RogueBookings.models.Lesson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "lessons")
public class LessonController {

    LessonService lessonService;

    @Autowired
    public LessonController(LessonService lessonService) {
        this.lessonService = lessonService;
    }

    @GetMapping
    public List<LessonDTO> getAllLessons(){
        return lessonService.getAllLessons();
    }

    @PostMapping(value = "/{businessId}/new")
    public void createNewLessonByBusinessId(@PathVariable Long businessId, @RequestBody Lesson lesson){
        lessonService.createNewLesson(businessId, lesson);
    }

    @DeleteMapping(value = "/{lessonId}")
    public void deleteBusinessById(@PathVariable Long lessonId){
        lessonService.deleteLessonById(lessonId);
    }


    @PatchMapping(path = "/{lessonId}")
    public Lesson editUser(@RequestBody LessonDTO lessonDTO, @PathVariable Long lessonId){
        return lessonService.editLesson(lessonDTO, lessonId);
    }

}

