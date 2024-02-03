package com.room.to.rent.backend.controller;

import com.room.to.rent.backend.user.AppUser;
import com.room.to.rent.backend.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/room-to-rent/admin")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    private final UserRepository userRepository;
    @GetMapping
    @PreAuthorize("hasAuthority('admin:read')")
    public String welcome(){
        return "Welcome to admin section";
    }

    @GetMapping("/developers")
    @PreAuthorize("hasAuthority('admin:read')")
    public ResponseEntity<AppUser> developers(){
        AppUser admin = userRepository.findByEmail("admin@gmail.com")
                .orElseThrow();
        return new ResponseEntity<>(admin, HttpStatus.OK);
    }
}
