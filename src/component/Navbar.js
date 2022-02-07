import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';


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
              <NavDropdown title='Contact Team' id='collasible-nav-dropdown'>
                  <NavDropdown.Item href='#action/3.1'>Blessing</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.2'>Oreofe</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.3'>David</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.4'>Armineh</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.5'>Mehmet</NavDropdown.Item>
                </NavDropdown>
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
