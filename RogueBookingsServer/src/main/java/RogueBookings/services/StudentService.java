package RogueBookings.services;

import RogueBookings.models.Lesson;
import RogueBookings.models.Member;
import RogueBookings.models.User;
import RogueBookings.models.userLogs.LessonLog;
import RogueBookings.repositories.*;
import RogueBookings.models.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private LessonRepository lessonRepository;
    private LessonLogRepository lessonLogRepository;

    private StudentRepository studentRepository;

    private MemberRepository memberRepository;

    @Autowired
    public StudentService(LessonRepository lessonRepository, LessonLogRepository lessonLogRepository, StudentRepository studentRepository, MemberRepository memberRepository) {
        this.lessonRepository = lessonRepository;
        this.lessonLogRepository = lessonLogRepository;
        this.studentRepository = studentRepository;
        this.memberRepository = memberRepository;
    }

    public List<Student> getAllLessonStudents() {
        return studentRepository.findAll();
    }

    public void addStudentToLesson(Long memberId, Long lessonId) {
        Lesson lesson = lessonRepository.findById(lessonId).get();
        Member member = memberRepository.findById(memberId).get();
        Student student = new Student();
        student.setLesson(lesson);
        student.setMember(member);
        studentRepository.save(student);
        LessonLog lessonLog = new LessonLog();
        lessonLog.setLessonName(lesson.getName());
        lessonLog.setRole("student");
        lessonLog.setAction("Signed up");
        lessonLog.setUserLogs(member.getUser().getUserLogs());
        lessonLogRepository.save(lessonLog);
    }

    public void removeStudentFromLessonByStudentId(Long studentId){
        Student student = studentRepository.findById(studentId).get();
        Lesson lesson = student.getLesson();
        User user = student.getMember().getUser();
        LessonLog lessonLog = new LessonLog();
        lessonLog.setLessonName(lesson.getName());
        lessonLog.setRole("student");
        lessonLog.setAction("Left lesson");
        lessonLog.setUserLogs(user.getUserLogs());
        lessonLogRepository.save(lessonLog);
        studentRepository.delete(student);

    }
}

