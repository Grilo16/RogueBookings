package com.example.roguemageyogav3.services;

import com.example.roguemageyogav3.models.Lesson.Lesson;
import com.example.roguemageyogav3.models.business.Business;
import com.example.roguemageyogav3.repositories.BusinessRepository;
import com.example.roguemageyogav3.repositories.LessonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LessonService {

    LessonRepository lessonRepository;
    BusinessRepository businessRepository;

    @Autowired
    public LessonService(LessonRepository lessonRepository, BusinessRepository businessRepository) {
        this.lessonRepository = lessonRepository;
        this.businessRepository = businessRepository;
    }


    public List<Lesson> getAllLessons(){
        return lessonRepository.findAll();
    }

    public void createNewLesson(Long businessId, Lesson lesson) {
        Business business = businessRepository.findById(businessId).get();
        lesson.setBusiness(business);
        lessonRepository.save(lesson);
    }

    public void deleteLessonById(Long lessonId) {
        lessonRepository.deleteById(lessonId);
    }
}


