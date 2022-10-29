package com.example.roguemageyogav3.services;

import com.example.roguemageyogav3.models.student.LessonsStudent;
import com.example.roguemageyogav3.repositories.LessonsStudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LessonStudentService {

    LessonsStudentRepository lessonsStudentRepository;

    @Autowired
    public LessonStudentService(LessonsStudentRepository lessonsStudentRepository) {
        this.lessonsStudentRepository = lessonsStudentRepository;
    }


    public List<LessonsStudent> getAllLessonStudents() {
        return lessonsStudentRepository.findAll();
    }

    public void addStudentToLesson(Long studentId, Long lessonId) {
        lessonsStudentRepository.addStudentToLesson(studentId, lessonId);
    }
}

