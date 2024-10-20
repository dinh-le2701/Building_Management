import React, { useEffect, useState } from 'react';
import { Table, Button, Container, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

const Staff = () => {
    const [staffs, setStaffs] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [size, setSize] = useState(7); // Số mục trên mỗi trang, mặc định là 10

    // Hàm gọi API với phân trang
    const getAllStaff = async (page, size) => {
        try {
            const response = await fetch(`http://localhost:8907/api/v1/staff?page=${page}&size=${size}`);
            if (!response.ok) {
                throw new Error('Failed to fetch staff data');
            }
            const data = await response.json();
            setStaffs(data.content); // Giả sử dữ liệu được trả về trong `data.content`
            setTotalPages(data.totalPages); // Giả sử dữ liệu tổng số trang là `data.totalPages`
            console.log(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // Gọi hàm API khi trang hoặc pageSize thay đổi
    useEffect(() => {
        getAllStaff(currentPage, size);
    }, [currentPage, size]);

    // Xử lý thay đổi trang
    const handlePageChange = (newPage) => {
        if (newPage >= 0 && newPage < totalPages) {
            setCurrentPage(newPage);
        }
    };

    // Xử lý khi người dùng thay đổi số lượng mục hiển thị trên mỗi trang
    const handlePageSizeChange = (event) => {
        setSize(Number(event.target.value)); // Cập nhật pageSize
        setCurrentPage(0); // Reset về trang đầu tiên
    };

    const navigate = useNavigate(); // Hook điều hướng
    const handleResidentDetails = (staff_id) => {
        // Navigate to the resident details page with the ID in the URL
        navigate(`/staff/${staff_id}`);
    };

    return (
        <div className='staff'>
            <div className='header p-3 w-100 bg-white d-flex justify-content-between align-items-center'>
                <h3 className='m-0'>Danh Sách Nhân Viên</h3>
                <Button className='me-3'>Thêm mới</Button>
            </div>

            <div className="table-content bg-white m-3 p-3">
                {/* Dropdown chọn số lượng mục */}
                <div className="select-group">
                    Hiển thị
                    <select name="" id="" className="mx-2" value={size} onChange={handlePageSizeChange}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                    </select>
                    mục
                </div>

                <div className="func-table d-flex justify-content-end align-items-center py-3">
                    <div>
                        <Button variant='success'>In</Button>
                    </div>
                </div>

                {/* Bảng hiển thị dữ liệu */}
                <Table hover striped className='w-100 m-0 text-center'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên Nhân Viên</th>
                            <th>Email</th>
                            <th>Số Điện Thoại</th>
                            <th>Ngày Sinh</th>
                            <th>Số giờ làm</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr><td colSpan="8">Loading...</td></tr>
                        ) : error ? (
                            <tr><td colSpan="8">Error: {error}</td></tr>
                        ) : staffs.length > 0 ? (
                            staffs.map((staff, index) => (
                                <tr key={index}>
                                    <td>{(currentPage - 0) * size + index + 1}</td> {/* Tính STT dựa trên trang hiện tại */}
                                    <td>{staff.staff_name}</td>
                                    <td>{staff.email}</td>
                                    <td>{staff.phone}</td>
                                    <td>{staff.birthday}</td>
                                    <td>{staff.work_time}</td>
                                    <td className='d-flex justify-content-around align-items-center'>
                                        <Button variant="secondary">
                                            <FaEye className='pb-1'
                                                onClick={() => handleResidentDetails(staff.staff_id)}
                                            />
                                        </Button>
                                        <Button variant="warning"
                                            //onClick={() => updateApartmentById(apartment.apartment_id)}
                                        >
                                            <CiEdit className='pb-1' />
                                        </Button>
                                        <Button variant="danger"
                                            //onClick={() => deleteApartmentById(apartment.apartment_id)}
                                        >
                                            <CiTrash className='pb-1' />
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="text-center">No staff data available</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <div className="mt-3 pagination d-flex justify-content-center align-items-center">
                    <Pagination className=''>
                        <Pagination.First onClick={() => handlePageChange(0)} />
                        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} />
                        <Pagination.Item>{currentPage + 1} / {totalPages}</Pagination.Item>
                        {/* <Pagination.Item>{totalPages}</Pagination.Item> */}
                        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                        <Pagination.Last onClick={() => handlePageChange(totalPages - 1)} />
                    </Pagination>
                </div>
            </div>
        </div>
    );
};

export default Staff;
