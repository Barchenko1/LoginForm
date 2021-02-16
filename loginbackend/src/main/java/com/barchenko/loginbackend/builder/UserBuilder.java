package com.barchenko.loginbackend.builder;

import com.barchenko.loginbackend.dto.UserRoleDto;
import com.barchenko.loginbackend.modal.Role;
import com.barchenko.loginbackend.modal.User;

public class UserBuilder {
    public static User createUser(String firstName, String lastName, String login, String password, Role role) {
        User user = new User();
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setLogin(login);
        user.setPassword(password);
        user.setRole(role);
        return user;
    }

    public static UserRoleDto createUserRoleDto(String firstName, String lastName, String role) {
        UserRoleDto userRoleDto = new UserRoleDto();
        userRoleDto.setFirstName(firstName);
        userRoleDto.setLastName(lastName);
        userRoleDto.setRole(role);
        return userRoleDto;
    }
}
