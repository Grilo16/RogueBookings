package com.example.roguemageyogav3.repositories;

import com.example.roguemageyogav3.models.Lesson.Lesson;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LessonRepository extends JpaRepository<Lesson, Long> {
}