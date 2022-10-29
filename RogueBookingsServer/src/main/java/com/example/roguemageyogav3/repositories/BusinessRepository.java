package com.example.roguemageyogav3.repositories;

import com.example.roguemageyogav3.models.business.Business;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusinessRepository extends JpaRepository<Business, Long> {
}