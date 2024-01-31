package com.room.to.rent.backend.controller;

import com.room.to.rent.backend.entity.Developer;
import com.room.to.rent.backend.service.DeveloperService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/room-to-rent")
@CrossOrigin(origins = "http://room-to-rent.s3-website-ap-southeast-2.amazonaws.com/")
public class TestController {

    private final DeveloperService developerService;

    public TestController(DeveloperService developerService) {
        this.developerService = developerService;
    }

    @GetMapping("/welcome")
    public String welcome(){
        return "Welcome to Room-To-Rent";
    }

    @GetMapping("/developers")
    public ResponseEntity<List<Developer>> developers() {
        List<Developer> allDevelopers = developerService.findAllDevelopers();
        return new ResponseEntity<>(allDevelopers, HttpStatus.OK);
    }
}
