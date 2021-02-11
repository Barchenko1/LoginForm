package com.barchenko.loginbackend.rest;

import com.barchenko.loginbackend.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserDao userDao;

    @PostMapping("signin")
    public ResponseEntity<?> authenticateUser() {
        return ResponseEntity.ok("");
    }

    @PostMapping("signup")
    public ResponseEntity<?> registerUser() {
        return ResponseEntity.ok("");
    }


}
