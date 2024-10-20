package com.microservice.resident_service.repository;

import com.microservice.resident_service.model.Resident;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface ResidentRepository extends JpaRepository<Resident, Integer> {
    Page<Resident> findAll(Pageable pageable);
}
