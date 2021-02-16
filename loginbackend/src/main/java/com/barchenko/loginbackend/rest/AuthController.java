package com.barchenko.loginbackend.rest;

import com.barchenko.loginbackend.auth.AuthenticationBean;
import com.barchenko.loginbackend.dao.RoleDao;
import com.barchenko.loginbackend.dao.UserDao;
import com.barchenko.loginbackend.dto.LoginRequest;
import com.barchenko.loginbackend.dto.RegistrationRequest;
import com.barchenko.loginbackend.modal.Role;
import com.barchenko.loginbackend.modal.RoleName;
import com.barchenko.loginbackend.modal.User;
import com.barchenko.loginbackend.payload.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.Optional;

import static com.barchenko.loginbackend.builder.UserBuilder.createUser;
import static com.barchenko.loginbackend.modal.RoleName.ADMIN_ROLE;
import static com.barchenko.loginbackend.modal.RoleName.USER_ROLE;


@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private RoleDao roleDao;

    @Autowired
    private UserDao userDao;

    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser() {
        return ResponseEntity.ok(new AuthenticationBean("You are authenticated"));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody RegistrationRequest registrationRequest) {
        if(userDao.existsUserByLogin(registrationRequest.getLogin())) {
            return new ResponseEntity(new ApiResponse(false, "Username is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }

        Role role = roleDao.findRoleByName(registrationRequest.getRole())
                .orElse(roleDao.findById(1L).get());

        User user = createUser(registrationRequest.getFirstName(),
                registrationRequest.getLastName(),
                registrationRequest.getLogin(),
                passwordEncoder.encode(registrationRequest.getPassword()),
                role
                );

        User result = userDao.save(user);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/api/user/me")
                .buildAndExpand(result.getLogin()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "User registered successfully"));
    }


}
