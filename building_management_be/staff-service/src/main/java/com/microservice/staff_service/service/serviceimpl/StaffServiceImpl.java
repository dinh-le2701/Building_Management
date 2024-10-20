package com.microservice.staff_service.service.serviceimpl;

import com.microservice.staff_service.model.Staff;
import com.microservice.staff_service.repository.StaffRepository;
import com.microservice.staff_service.service.StaffService;
import jakarta.persistence.EntityNotFoundException;
import org.hibernate.tool.schema.spi.SqlScriptException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StaffServiceImpl implements StaffService {

    @Autowired
    private StaffRepository staffRepository;
//    @Override
//    public List<Staff> getAllVehicles(int page, int size, String sort) {
//        Pageable paging = PageRequest.of(page, size, Sort.by(sort));
//
//        Page<Staff> pagedResult = staffRepository.findAll(paging);
//
//        if(pagedResult.hasContent()) {
//            return pagedResult.getContent();
//        } else {
//            return new ArrayList<Staff>();
//        }
//    }

    public Page<Staff> getAllStaffs(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return staffRepository.findAll(pageable);
    }

    public Optional<Staff> getStaffById(Long staff_id){
        Optional<Staff> staff = staffRepository.findById(staff_id);
        return staff;
    }

    @Override
    public Staff createNewStaff(Staff staff) {
        return staffRepository.save(staff);
    }

    @Override
    public Staff updateStaff(Long staff_id, Staff updateStaff) {
        Staff staff = new Staff();

        staff.setStaff_name(updateStaff.getStaff_name());
        staff.setStaff_position(updateStaff.getStaff_position());
        staff.setStaff_img(updateStaff.getStaff_img());
        staff.setPhone(updateStaff.getPhone());
        staff.setEmail(updateStaff.getEmail());
        staff.setBirthday(updateStaff.getBirthday());
        staff.setWork_time(updateStaff.getWork_time());
        staff.setCreate_date(updateStaff.getCreate_date());
        staff.setUpdate_date(updateStaff.getUpdate_date());

        return staffRepository.save(staff);
    }

    @Override
    public void deleteStaff(Long staff_id) {
        try {
            Optional<Staff> staff = staffRepository.findById(staff_id); // Kiểm tra sự tồn tại của staff
            if (staff.isPresent()) {
                staffRepository.deleteById(staff_id); // Xóa nếu tìm thấy staff
            } else {
                throw new EntityNotFoundException("Không tìm thấy staff với ID: " + staff_id); // Ném lỗi nếu không tìm thấy
            }
        } catch (SqlScriptException e) {
            throw new RuntimeException(e);
        }
    }


}
