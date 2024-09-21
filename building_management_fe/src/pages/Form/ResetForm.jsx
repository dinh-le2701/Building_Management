import React, { useState } from 'react';
import './Form.css';
import { Form, Container, Button, Row, Col } from 'react-bootstrap';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:1999/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    console.log(data); // Hiển thị phản hồi từ API
  }

  return (
    <div className="reset">
      <Container className='form-container d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
        <Row className="w-100">
          <Col xs={12} sm={10} md={8} lg={6} className="mx-auto">
            <div className="form-control p-4">
              <h2 className='text-center'>Reset Password</h2>
              <Form onSubmit={handleSubmit}>

                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Email</Form.Label>
                  <Form.Control
                    placeholder='Please Type Your Email Here!'
                    type='text'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required />
                </Form.Group>

                <Form.Group className='mb-2 text-center'>
                  <Button className='w-50' type='submit' >Submit</Button>
                </Form.Group>

                <Form.Group className='mb-3 text-center'>
                    <a href="/signin">Sign In</a> <a href="/signup">Sign Up</a>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signin;
