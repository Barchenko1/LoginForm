package com.barchenko.loginFormBackend.dao;

import com.barchenko.loginFormBackend.modal.Role;
import com.barchenko.loginFormBackend.modal.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);

}
