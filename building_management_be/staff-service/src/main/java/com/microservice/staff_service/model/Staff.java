package com.microservice.staff_service.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity(name = "Staff")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Staff {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "staff_id")
    private Long staff_id;

    @Column(name = "staff_name")
    @NotBlank(message = "Tên không được để trống")
    @Pattern(regexp = "^[a-zA-ZÀ-ỹ ]+$", message = "Tên không được chứa số hoặc ký tự đặc biệt")
    private String staff_name;

    @Column(name = "staff_img")
    private String staff_img;

    @Column(name = "staff_position")
    private String staff_position;

    @Column(name = "phone")
    @NotBlank(message = "Số điện thoại không được để trống")
    @Pattern(regexp = "^0[0-9]{9}$", message = "Số điện thoại phải là 10 số và bắt đầu bằng 0")
    private String phone;

    @Column(name = "email")
    @Email(regexp = "^[a-zA-Z0-9._%+-]+@gmail\\.com$", message = "Email phải có dạng @gmail.com")
    private String email;

    @Column(name = "birthday")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy", timezone = "Asia/Ho_Chi_Minh")
    @Temporal(TemporalType.DATE)
    private LocalDate birthday;

    @Column(name = "work_time")
    private int work_time = 0;

    @Column(name = "status")
    private boolean status = false;

    @Column(name = "create_date")
    private LocalDateTime create_date;

    @Column(name = "update_date")
    private LocalDateTime update_date;
}
