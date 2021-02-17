package com.barchenko.loginbackend.rest;

import com.barchenko.loginbackend.dao.UserRepository;
import com.barchenko.loginbackend.dto.UserRoleDto;
import com.barchenko.loginbackend.dto.UserSummary;
import com.barchenko.loginbackend.modal.Role;
import com.barchenko.loginbackend.modal.RoleName;
import com.barchenko.loginbackend.modal.User;
import com.barchenko.loginbackend.security.CurrentUser;
import com.barchenko.loginbackend.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/all")
    @PreAuthorize("hasRole('ADMIN')")
    public List<UserRoleDto> getCurrentUser() {
        List<User> users = userRepository.findAll();
        List<UserRoleDto> userRoleDtoList = new ArrayList<>();
//        users.forEach(i -> {
//            UserRoleDto userRoleDto = createUserRoleDto(i.getFirstName(), i.getLastName(), i.getRoles());
//            userRoleDtoList.add(userRoleDto);
//        });
        return userRoleDtoList;
    }

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public UserSummary getCurrentUser(@CurrentUser UserPrincipal currentUser) {
        UserSummary userSummary = new UserSummary(currentUser.getId(), currentUser.getUsername(), currentUser.getName());
        return userSummary;
    }


}
