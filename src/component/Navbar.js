import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, Nav } from 'react-bootstrap';


const NavbarCom = () => {

  return(
    <div>
      <header>
        <Navbar className='bg-blue' collapseOnSelect expand='lg' variant='dark'>
          <Container>
            <Navbar.Brand href='/'><h2>Toucan Logo</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='#page-1'>Create Vote</Nav.Link>
                <Nav.Link href='#page-2'>Past Votes</Nav.Link>
                
              </Nav>

              <Nav>
                <Nav.Link href='#page-3'>Login</Nav.Link>
                <Nav.Link href='#page-4'>Sign Up</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  )
    
  
};

export default NavbarCom;
