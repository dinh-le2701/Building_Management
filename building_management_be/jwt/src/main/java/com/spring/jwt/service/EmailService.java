//package com.spring.jwt.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class EmailService {
//    @Autowired
//    private JavaMailSender mailSender;
//
//    public void sendResetPasswordEmail(String toEmail, String resetLink) {
//        try {
//            MimeMessage message = mailSender.createMimeMessage();
//            MimeMessageHelper helper = new MimeMessageHelper(message, true);
//
//            helper.setTo(toEmail);
//            helper.setSubject("Reset Password Request");
//            helper.setText("<p>Click the link below to reset your password:</p>" +
//                    "<p><a href=\"" + resetLink + "\">Reset Password</a></p>", true);
//
//            mailSender.send(message);
//        } catch (Exception e) {
//            throw new RuntimeException("Failed to send email", e);
//        }
//    }
//}
