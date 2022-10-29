package com.example.roguemageyogav3.repositories;

import com.example.roguemageyogav3.models.Lesson.Lesson;
import com.example.roguemageyogav3.models.teacher.LessonsTeacher;
import com.example.roguemageyogav3.models.teacher.LessonsTeacherId;
import com.example.roguemageyogav3.models.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface LessonsTeacherRepository extends JpaRepository<LessonsTeacher, LessonsTeacherId> {
    @Transactional
    @Modifying(clearAutomatically = true)
    @Query(value = "insert into lessons_teachers (lesson_id, teacher_id, payment, admin) values (:lessonId, :teacherId, :payment, :admin)", nativeQuery = true)
    public void addTeacherToLessonByIds(Long teacherId, Long lessonId, Long payment, Boolean admin);

}