package com.example.roguemageyogav3.repositories;

import com.example.roguemageyogav3.models.student.LessonsStudent;
import com.example.roguemageyogav3.models.student.LessonsStudentId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface LessonsStudentRepository extends JpaRepository<LessonsStudent, LessonsStudentId> {
    @Transactional
    @Modifying(clearAutomatically = true)
    @Query(value = "insert into lessons_students (students_id, lesson_id) values (:studentId, :lessonId)", nativeQuery = true)
    public void addStudentToLesson(Long studentId, Long lessonId);

}