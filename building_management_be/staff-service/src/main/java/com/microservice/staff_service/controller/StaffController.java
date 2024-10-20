package com.microservice.staff_service.controller;

import com.microservice.staff_service.model.Staff;
import com.microservice.staff_service.service.StaffService;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.tool.schema.spi.SqlScriptException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpStatusCodeException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/staff")
@Slf4j
public class StaffController {

    @Autowired
    private StaffService staffService;

    // Phương thức lấy toàn bộ Nhân viên và phân trang nhân viên
    @GetMapping("")
    public ResponseEntity<Page<Staff>> getAllStaff(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(defaultValue = "id") String sort
    ){
        try {
            Page<Staff> staffs = staffService.getAllStaffs(page, size);
            return new ResponseEntity<>(staffs, HttpStatus.OK);
        } catch (SqlScriptException e){
            log.warn(String.valueOf(e));
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    // Phương thức tìm Nhân viên theo mã
    @GetMapping("/{staff_id}")
    public ResponseEntity<Optional<Staff>> getStaffById(@PathVariable("staff_id") Long staff_id){
        try {
            Optional<Staff> staff = staffService.getStaffById(staff_id);
            log.info("Tìm thành công staff có id: " + staff_id);
            return new ResponseEntity<>(staff, HttpStatus.OK);
        } catch (SqlScriptException e){
            log.warn("Không tìm thấy staff có id: " + staff_id + e);
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


    // Phương thức tạo mới Nhân viên
    @PostMapping("")
    public ResponseEntity<Staff> createStaff(@RequestBody Staff staff){
        try {
            Staff newStaff = staffService.createNewStaff(staff);
            return new ResponseEntity<>(newStaff, HttpStatus.OK);
        } catch (SqlScriptException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{staff_id}")
    public ResponseEntity<Staff> updateStaff(@PathVariable("staff_id") Long staff_id, Staff updateStaff){
        try {
            Staff staff = staffService.updateStaff(staff_id, updateStaff);
            log.info("Cập nhật thông tin nhân viên với id: " + staff_id + " thành công!");
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (SqlScriptException e){
            log.warn("Cập nhật thông tin thất bại!" + e);
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{staff_id}")
    public void deleteStaff(@PathVariable("staff_id") Long staff_id){
        try {
            staffService.deleteStaff(staff_id);
        } catch (HttpStatusCodeException h){
            throw new RuntimeException(h);
        }
    }
}
