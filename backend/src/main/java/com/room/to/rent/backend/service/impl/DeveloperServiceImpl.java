package com.room.to.rent.backend.service.impl;

import com.room.to.rent.backend.entity.Developer;
import com.room.to.rent.backend.repository.DeveloperRepository;
import com.room.to.rent.backend.service.DeveloperService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeveloperServiceImpl implements DeveloperService {

    private final DeveloperRepository developerRepository;

    public DeveloperServiceImpl(DeveloperRepository developerRepository) {
        this.developerRepository = developerRepository;
    }

    @Override
    public List<Developer> findAllDevelopers() {
        return developerRepository.findAll();
    }
}
