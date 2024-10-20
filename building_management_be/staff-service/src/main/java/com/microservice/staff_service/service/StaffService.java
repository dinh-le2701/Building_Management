package com.microservice.staff_service.service;

import com.microservice.staff_service.model.Staff;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface StaffService {

//    List<Staff> getAllVehicles(int page, int size, String sort);

    Page<Staff> getAllStaffs(int page, int size);

    Optional<Staff> getStaffById(Long staff_id);

    Staff createNewStaff(Staff staff);

    Staff updateStaff(Long staff_id, Staff updateStaff);

    void deleteStaff(Long staff_id);
}
