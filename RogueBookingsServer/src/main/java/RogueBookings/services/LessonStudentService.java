package RogueBookings.services;

import RogueBookings.repositories.LessonsStudentRepository;
import RogueBookings.models.student.LessonsStudent;
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

