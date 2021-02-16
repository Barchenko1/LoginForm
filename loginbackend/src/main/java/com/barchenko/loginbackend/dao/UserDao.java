package com.barchenko.loginbackend.dao;

import com.barchenko.loginbackend.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserDao extends JpaRepository<User, Long> {
    Optional<User> findUserByLogin(String login);
    Boolean existsUserByLogin(String login);
}
