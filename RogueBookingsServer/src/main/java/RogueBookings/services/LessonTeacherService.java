package RogueBookings.services;

import RogueBookings.models.teacher.LessonsTeacher;
import RogueBookings.repositories.LessonRepository;
import RogueBookings.repositories.LessonsTeacherRepository;
import RogueBookings.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LessonTeacherService {


    LessonsTeacherRepository lessonsTeacherRepository;
    UserRepository userRepository;
    LessonRepository lessonRepository;


    @Autowired
    public LessonTeacherService(LessonsTeacherRepository lessonsTeacherRepository, UserRepository userRepository, LessonRepository lessonRepository) {
        this.lessonsTeacherRepository = lessonsTeacherRepository;
        this.userRepository = userRepository;
        this.lessonRepository = lessonRepository;
    }





    public void addTeacherToLesson(Long teacherId, Long lessonId, Long payment, Boolean admin) {
        lessonsTeacherRepository.addTeacherToLessonByIds(teacherId, lessonId, payment, admin);
    }

    public List<LessonsTeacher> getAllLessonTeachers() {
        return lessonsTeacherRepository.findAll();
    }
}
