import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';


const NavbarCom = () => {
  // let voter = prompt("Welcome to Toucan's Voting Space. What is your Name?")
  return(
    <div>
      <header>
        <Navbar className='bg-blue' collapseOnSelect expand='lg' variant='dark'>
          <Container>
            <Navbar.Brand href='/'><h2>Toucan Logo</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='#'>Create Vote</Nav.Link>
                <Nav.Link href='#'>Past Votes</Nav.Link>
                
              </Nav>

              <Nav>
              <NavDropdown title='Contact Team' id='collasible-nav-dropdown'>
                  <NavDropdown.Item href='#action/3.1'>Blessing</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.2'>Oreofe</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.3'>David</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.4'>Armineh</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.5'>Mehmet</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.6'>Dami</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href='#'>Login</Nav.Link>
                <Nav.Link href='#'>Sign Up</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  )
};

export default NavbarCom;
