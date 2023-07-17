import React from 'react'
import { useForm } from 'react-hook-form';

import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  
  return (
    <>
    <Container>
    <Row className="vh-100 d-flex justify-content-center ">
      <Col md={8} lg={6} xs={12}>
        <div className="border border-3 "></div>
        <Card className="shadow">
          <Card.Body>
            <div className="mb-3 mt-md-4">
              <div className="mb-3">
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3" >
                    <Form.Control type="first" placeholder="Enter first name"  {...register("first", { required: "First name is required" })}
                        aria-invalid={errors.first ? "true" : "false"}/>
                        {errors.first && <p style={{color:"red"}}tyle role="alert">{errors.first?.message}</p>}
                  </Form.Group>
                  <Form.Group className="mb-3" >
                    <Form.Control type="last" placeholder="Enter last name" 
                    {...register("last", { required: "Last name is required" })}
                    aria-invalid={errors.last? "true" : "false"}/>
                    {errors.last && <p role="alert">{errors.last?.message}</p>}
                  </Form.Group>
                  <Form.Group className="mb-3" >
                 <Form.Control type="email" placeholder="Enter email" 
                        {...register("email", { required: "Email Address is required" })}
                        aria-invalid={errors.email ? "true" : "false"}/>
                        {errors.email && <p role="alert">{errors.email?.message}</p>}
                      </Form.Group>

                      <Form.Group
                        className="mb-3"

                      >
                        <Form.Control type="password" placeholder="Password" {...register("password", { required: " Password is required" })}
                        aria-invalid={errors.password ? "true" : "false"}/>
                        {errors.password && <p role="alert">{errors.password?.message}</p>}

                      </Form.Group>

                  <Form.Group
                    className="mb-3">
                    <Form.Control type="address" placeholder="address" 
                    {...register("address", { required: " address is required" })}
                    aria-invalid={errors.password ? "true" : "false"}/>
                    {errors.address && <p role="alert">{errors.address?.message}</p>}
                    
                  </Form.Group>
                  
                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Register
                    </Button>
                  </div>
                </Form>
                
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  </>
  );
  
}

export default Register;