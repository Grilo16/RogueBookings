package RogueBookings.services;

import RogueBookings.models.Lesson;
import RogueBookings.models.Teacher;
import RogueBookings.models.Member;
import RogueBookings.models.userLogs.LessonLog;
import RogueBookings.repositories.LessonLogRepository;
import RogueBookings.repositories.LessonRepository;
import RogueBookings.repositories.MemberRepository;
import RogueBookings.repositories.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {


    private MemberRepository memberRepository;
    private TeacherRepository teacherRepository;
    private LessonRepository lessonRepository;

    private LessonLogRepository lessonLogRepository;



    @Autowired
    public TeacherService(MemberRepository memberRepository, TeacherRepository teacherRepository, LessonRepository lessonRepository, LessonLogRepository lessonLogRepository) {
        this.memberRepository = memberRepository;
        this.teacherRepository = teacherRepository;
        this.lessonRepository = lessonRepository;
        this.lessonLogRepository = lessonLogRepository;
    }


    public Teacher addTeacherToLesson(Teacher teacher, Long memberId, Long lessonId) {
        Lesson lesson = lessonRepository.findById(lessonId).get();
        Member member = memberRepository.findById(memberId).get();
        LessonLog lessonLog = new LessonLog();
        lessonLog.setLessonName(lesson.getName());
        lessonLog.setRole("teacher");
        lessonLog.setAction("Signed up");
        lessonLog.setUserLogs(member.getUser().getUserLogs());
        teacher.setMember(member);
        member.getUser().getUserLogs().getLessonLogs().add(lessonLog);
        teacher.setLesson(lesson);
        teacherRepository.save(teacher);
        return teacher;

    }

    public List<Teacher> getAllLessonTeachers() {
        return teacherRepository.findAll();
    }

    public void removeTeacherFromLessonByTeacherId(Long teacherId){
        Teacher teacher = teacherRepository.findById(teacherId).get();
        Lesson lesson = teacher.getLesson();
        Member member = teacher.getMember();
        LessonLog lessonLog = new LessonLog();
        lessonLog.setLessonName(lesson.getName());
        lessonLog.setRole("teacher");
        lessonLog.setAction("Left teaching job found a new purpoise in life");
        lessonLog.setUserLogs(member.getUser().getUserLogs());
        teacherRepository.delete(teacher);
        lessonLogRepository.save(lessonLog);


    }
}
