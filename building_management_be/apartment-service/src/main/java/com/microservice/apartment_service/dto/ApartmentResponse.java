package com.microservice.apartment_service.dto;

import com.microservice.apartment_service.model.Apartment;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ApartmentResponse {
    private List<Apartment> apartments;
    private int total;
}
