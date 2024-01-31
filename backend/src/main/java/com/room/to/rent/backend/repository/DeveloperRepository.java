package com.room.to.rent.backend.repository;

import com.room.to.rent.backend.entity.Developer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DeveloperRepository extends JpaRepository<Developer, Integer> {
}
