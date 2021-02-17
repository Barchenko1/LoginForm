package com.barchenko.loginbackend.builder;

import com.barchenko.loginbackend.dto.UserRoleDto;
import com.barchenko.loginbackend.modal.Role;
import com.barchenko.loginbackend.modal.User;

import java.util.Collection;
import java.util.Collections;
import java.util.Set;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class UserBuilder {
//    public static User createUser(String firstName, String lastName, String login, String email, String password, Set<Role> roles) {
//        User user = new User();
//        user.setFirstName(firstName);
//        user.setLastName(lastName);
//        user.setLogin(login);
//        user.setEmail(email);
//        user.setPassword(password);
//        user.setRoles(roles);
//        return user;
//    }

//    public static UserRoleDto createUserRoleDto(String firstName, String lastName, Set<Role> roles) {
//        UserRoleDto userRoleDto = new UserRoleDto();
//        userRoleDto.setFirstName(firstName);
//        userRoleDto.setLastName(lastName);
//        roles.stream().map(Role::getName).collect(Collectors.toSet());
//        userRoleDto.setRole(roles.stream().map(Role::getName).collect(Collectors.toSet()));
//        return userRoleDto;
//    }
}
