package com.room.to.rent.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/room-to-rent")
@CrossOrigin(origins = "http://localhost:5173")
public class TestController {

    @GetMapping("/welcome")
    public String welcome(){
        return "Welcome to Room-To-Rent";
    }
}
