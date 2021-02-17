use medilabLoginFormDB;
CREATE TABLE `users` (
                         `id` bigint(20) NOT NULL AUTO_INCREMENT,
                         `first_name` varchar(45) NOT NULL,
                         `last_name` varchar(45) NOT NULL,
                         `email` varchar(45) NOT NULL,
                         `login` varchar(45) NOT NULL,
                         `password` varchar(45) NOT NULL,
                         PRIMARY KEY (`id`),
                         UNIQUE KEY `uk_users_username` (`login`),
                         UNIQUE KEY `uk_users_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `roles` (
                         `id` bigint(20) NOT NULL AUTO_INCREMENT,
                         `name` varchar(45) NOT NULL,
                         PRIMARY KEY (`id`),
                         UNIQUE KEY `uk_roles_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;


CREATE TABLE `user_roles` (
                              `user_id` bigint(20) NOT NULL,
                              `role_id` bigint(20) NOT NULL,
                              PRIMARY KEY (`user_id`,`role_id`),
                              KEY `fk_user_roles_role_id` (`role_id`),
                              CONSTRAINT `fk_user_roles_role_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
                              CONSTRAINT `fk_user_roles_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;