package com.room.to.rent.backend.controller;

import com.room.to.rent.backend.entity.Developer;
import com.room.to.rent.backend.service.DeveloperService;
import com.room.to.rent.backend.user.AppUser;
import com.room.to.rent.backend.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/room-to-rent")
@RequiredArgsConstructor
public class TestController {

    private final UserRepository userRepository;

    @GetMapping("/welcome")
    public String welcome(){
        return "Welcome to Room-To-Rent1";
    }

    @GetMapping("/developers")
    public ResponseEntity<List<AppUser>> developers() {
        List<AppUser> allDevelopers = userRepository.findAll();
        return new ResponseEntity<>(allDevelopers, HttpStatus.OK);
    }
}
