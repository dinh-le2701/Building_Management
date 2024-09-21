package com.spring.jwt.service;

import org.springframework.stereotype.Service;

@Service
public interface PasswordResetService {
    void sendPasswordResetEmail(String email);
}
