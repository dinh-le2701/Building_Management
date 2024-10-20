package com.microservice.api_gateway_service.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.config.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class WebConfig implements WebMvcConfigurer {

    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Cho phép tất cả các URL
                .allowedOrigins("http://localhost:3000", "https://center-building.vercel.app/") // Cho phép từ localhost:3000 (React)
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Các phương thức HTTP được phép
                .allowedHeaders("*") // Cho phép tất cả các header
                .allowCredentials(true); // Cho phép gửi cookie hoặc thông tin xác thực
    }
}