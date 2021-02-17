package com.barchenko.loginbackend.dao;

import com.barchenko.loginbackend.modal.Role;
import com.barchenko.loginbackend.modal.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);

}
