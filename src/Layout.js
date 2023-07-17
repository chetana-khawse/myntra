import React from 'react'
import { Outlet} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Layout() {
  return (
    
        <div align="center" style={{fontSize:"20px"}}>

 <Navbar bg="light" data-bs-theme="light">
        <Container >
          <Nav className="me-auto" >
            <Nav.Link href="/Register"  className="text-primary fw-bold" >Register</Nav.Link>
            <Nav.Link href="/Login"  className="text-primary fw-bold"> Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
 
<Outlet />   
    </div>
  )
}

export default Layout;