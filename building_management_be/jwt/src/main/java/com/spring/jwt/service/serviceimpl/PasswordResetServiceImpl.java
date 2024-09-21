//package com.spring.jwt.service.serviceimpl;
//
//import com.spring.jwt.model.OurUsers;
//import com.spring.jwt.repository.OurUserRepository;
//import com.spring.jwt.service.PasswordResetService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.time.Instant;
//import java.time.temporal.ChronoUnit;
//import java.util.UUID;
//
//@Service
//public class PasswordResetServiceImpl implements PasswordResetService {
//
//    @Autowired
//    private OurUserRepository ourUserRepository;
//
//    @Autowired
//    private EmailService emailService;
//
//    @Override
//    public void sendPasswordResetEmail(String email) {
//        OurUsers ourUsers = ourUserRepository.findByEmail(email)
//                .orElseThrow(() -> new RuntimeException("User not found"));
//
//        // Tạo token đặt lại mật khẩu
//        String token = UUID.randomUUID().toString();
//        ourUsers.setResetPasswordToken(token);
//        ourUsers.setTokenExpirationDate(Instant.now().plus(1, ChronoUnit.HOURS)); // Hết hạn sau 1 giờ
//
//        ourUserRepository.save(ourUsers);
//
//        // Gửi email đặt lại mật khẩu
//        String resetLink = "http://localhost:3000/reset-password?token=" + token;
//        emailService.sendResetPasswordEmail(ourUsers.getEmail(), resetLink);
//    }
//}
