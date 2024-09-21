import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { PiPinwheelLight } from "react-icons/pi";
import { FaProjectDiagram } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { MdErrorOutline } from "react-icons/md";

export const SideBar = () => {
  return (
    <div className='sidebar'>
            <div className="logo">
            </div>
            <Container className="p-3 text-light">
                <Nav className="me-auto mb-3">
                    <Nav.Link className='form-control d-flex align-items-center text-light' href="/">
                        <MdOutlineDashboard className='me-3' />
                        <span>Trang Chủ</span>
                    </Nav.Link>
                </Nav>

                <Nav className="me-auto mb-3">
                    <Nav.Link className='form-control d-flex align-items-center text-light' href="/employee">
                        <FaRegUser className='me-3' />
                        <span>Nhân Viên</span>
                    </Nav.Link>
                </Nav>

                <Nav className="me-auto mb-3">
                    <Nav.Link className='form-control d-flex align-items-center text-light' href="/role">
                        <PiPinwheelLight className='me-3' />
                        <span>Quyền</span>
                    </Nav.Link>
                </Nav>

                <Nav className="me-auto mb-3">
                    <Nav.Link className='form-control d-flex align-items-center text-light' href="/project">
                        <FaProjectDiagram className='me-3' />
                        <span>Dự Án</span>
                    </Nav.Link>
                </Nav>

                <Nav className="me-auto mb-3">
                    <Nav.Link className='form-control d-flex align-items-center text-light' href="/task">
                        <FaTasks className='me-3' />
                        <span>Công Việc</span>
                    </Nav.Link>
                </Nav>

                <Nav className="me-auto mb-3">
                    <Nav.Link className='form-control d-flex align-items-center text-light' href="/blank">
                        <RiCheckboxMultipleBlankLine className='me-3' />
                        <span>Blank Page</span>
                    </Nav.Link>
                </Nav>

                <Nav className="me-auto mb-3">
                    <Nav.Link className='form-control d-flex align-items-center text-light' href="/error">
                        <MdErrorOutline className='me-3' />
                        <span>Error Page</span>
                    </Nav.Link>
                </Nav>
            </Container>
        </div>
  )
}
