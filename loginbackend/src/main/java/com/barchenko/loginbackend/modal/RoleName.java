package com.barchenko.loginbackend.modal;

public enum RoleName {
    USER_ROLE("USER"), ADMIN_ROLE("ADMIN");

    String value;

    RoleName(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
