package com.barchenko.loginFormBackend.rest;

import com.barchenko.loginFormBackend.dao.UserRepository;
import com.barchenko.loginFormBackend.modal.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/all")
    @PreAuthorize("hasRole('ADMIN')")
    public List<User> getCurrentUser() {
        List<User> users = userRepository.findAll();
        return users;
    }

//
//    @GetMapping("/user/me")
//    @PreAuthorize("hasRole('USER')")
//    public UserSummary getCurrentUser() {
//        return null;
//    }


}
