package com.microservice.apartment_service.repository;

import com.microservice.apartment_service.model.Apartment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApartmentRepository extends JpaRepository<Apartment, Integer> {
    Page<Apartment> findAll(Pageable pageable);
}
