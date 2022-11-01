package RogueBookings.services;

import RogueBookings.models.Lesson;
import RogueBookings.models.User;
import RogueBookings.models.userLogs.LessonLog;
import RogueBookings.repositories.LessonLogRepository;
import RogueBookings.repositories.LessonRepository;
import RogueBookings.models.Student;
import RogueBookings.repositories.StudentRepository;
import RogueBookings.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class StudentService {

    private LessonRepository lessonRepository;
    private LessonLogRepository lessonLogRepository;

    private StudentRepository studentRepository;

    private UserRepository userRepository;

    @Autowired
    public StudentService(LessonRepository lessonRepository, LessonLogRepository lessonLogRepository, StudentRepository studentRepository, UserRepository userRepository) {
        this.lessonRepository = lessonRepository;
        this.lessonLogRepository = lessonLogRepository;
        this.studentRepository = studentRepository;
        this.userRepository = userRepository;
    }

    public List<Student> getAllLessonStudents() {
        return studentRepository.findAll();
    }

    public void addStudentToLesson(Long studentId, Long lessonId) {
        Lesson lesson = lessonRepository.findById(lessonId).get();
        User user = userRepository.findById(studentId).get();
        Student student = new Student();
        student.setLesson(lesson);
        student.setStudent(user);
        studentRepository.save(student);
        LessonLog lessonLog = new LessonLog();
        lessonLog.setLessonName(lesson.getName());
        lessonLog.setRole("student");
        lessonLog.setAction("Signed up");
        lessonLog.setUserLogs(user.getUserLogs());
        lessonLogRepository.save(lessonLog);
    }

    public void removeStudentFromLessonByStudentId(Long studentId){
        Student student = studentRepository.findById(studentId).get();
        Lesson lesson = student.getLesson();
        User user = student.getStudent();
        LessonLog lessonLog = new LessonLog();
        lessonLog.setLessonName(lesson.getName());
        lessonLog.setRole("student");
        lessonLog.setAction("Left lesson");
        lessonLog.setUserLogs(user.getUserLogs());
        lessonLogRepository.save(lessonLog);
        studentRepository.delete(student);

    }
}
