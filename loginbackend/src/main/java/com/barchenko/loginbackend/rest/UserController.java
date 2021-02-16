package com.barchenko.loginbackend.rest;

import com.barchenko.loginbackend.dao.RoleDao;
import com.barchenko.loginbackend.dao.UserDao;
import com.barchenko.loginbackend.dto.UserRoleDto;
import com.barchenko.loginbackend.modal.Role;
import com.barchenko.loginbackend.modal.RoleName;
import com.barchenko.loginbackend.modal.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static com.barchenko.loginbackend.builder.UserBuilder.createUserRoleDto;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private RoleDao roleDao;

    @Autowired
    private UserDao userDao;

    @GetMapping("/user/all")
    @PreAuthorize("hasRole('ADMIN')")
    public List<UserRoleDto> getCurrentUser() {
        List<User> users = userDao.findAll();
        List<UserRoleDto> userRoleDtoList = new ArrayList<>();
        users.forEach(i -> {
//            Role role = roleDao.findById(i.getRole().getId()).get();
            UserRoleDto userRoleDto = createUserRoleDto(i.getFirstName(), i.getLastName(), i.getRole().getName());
            userRoleDtoList.add(userRoleDto);
        });
        return userRoleDtoList;
    }

    @PostMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public UserRoleDto getCurrentUser(@RequestParam(value = "login") String login) {
        User user = userDao.findUserByLogin(login).orElse(new User());
        UserRoleDto userRoleDto = createUserRoleDto(user.getFirstName(), user.getLastName(), user.getRole().getName());
        return userRoleDto;
    }


}
