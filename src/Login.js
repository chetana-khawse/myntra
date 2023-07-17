import React from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data)
  if(data.email==='chet@gmail.com' && data.password==='0101'){
navigate("/Dashboard");
  }
  
  
  }
  return (
    <div>
<Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                      <Form.Group className="mb-3" >
                        <Form.Label >
                          Email Address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                        {...register("email", { required: "Email Address is required" })}
                        aria-invalid={errors.email ? "true" : "false"}/>
                        {errors.email && <p style={{color:"red"}} role="alert">{errors.email?.message}</p>}
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" {...register("password", { required: " Password is required" })}
                        aria-invalid={errors.password ? "true" : "false"}/>
                        {errors.password && <p style={{color:"red"}} role="alert">{errors.password?.message}</p>}

                      </Form.Group>
                     
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Login
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
    </div>
    
  )
}

export default Login