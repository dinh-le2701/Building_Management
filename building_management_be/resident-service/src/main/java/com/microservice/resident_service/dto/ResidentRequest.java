package com.microservice.resident_service.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.microservice.resident_service.model.Vehicle;
import lombok.*;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ResidentRequest {
    private String resident_name;
    private String phone_number;
    private String email;
    private LocalDate  birthday;
    private List<Vehicle> vehicles;
}
