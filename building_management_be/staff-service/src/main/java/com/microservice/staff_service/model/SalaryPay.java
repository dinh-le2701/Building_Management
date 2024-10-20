package com.microservice.staff_service.model;

import jakarta.persistence.*;

import java.time.LocalDate;

//@Entity(name = "Salary")
public class SalaryPay {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "salary_id")
    private Long salary_id;

    private LocalDate payment_date;
    private LocalDate created_at;
    private LocalDate updated_at;
}
