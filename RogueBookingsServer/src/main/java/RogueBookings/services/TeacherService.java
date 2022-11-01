package RogueBookings.services;

import RogueBookings.models.Lesson;
import RogueBookings.models.Teacher;
import RogueBookings.models.User;
import RogueBookings.models.userLogs.LessonLog;
import RogueBookings.repositories.LessonRepository;
import RogueBookings.repositories.TeacherRepository;
import RogueBookings.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {


    private UserRepository userRepository;
    private TeacherRepository teacherRepository;
    private LessonRepository lessonRepository;



    @Autowired
    public TeacherService(UserRepository userRepository, TeacherRepository teacherRepository, LessonRepository lessonRepository) {
        this.userRepository = userRepository;
        this.teacherRepository = teacherRepository;
        this.lessonRepository = lessonRepository;
    }


    public Teacher addTeacherToLesson(Teacher teacher, Long teacherId, Long lessonId) {
        Lesson lesson = lessonRepository.findById(lessonId).get();
        User user = userRepository.findById(teacherId).get();
        LessonLog lessonLog = new LessonLog();
        lessonLog.setLessonName(lesson.getName());
        lessonLog.setRole("teacher");
        lessonLog.setAction("Signed up");
        lessonLog.setUserLogs(user.getUserLogs());
        teacher.setTeacher(user);
        user.getUserLogs().getLessonLogs().add(lessonLog);
        teacher.setLesson(lesson);
        teacherRepository.save(teacher);


        return teacher;

    }

    public List<Teacher> getAllLessonTeachers() {
        return teacherRepository.findAll();
    }
}
