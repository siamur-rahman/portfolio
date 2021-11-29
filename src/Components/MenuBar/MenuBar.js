import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import './MenuBar.css';

const MenuBar = () => {
   return (
      <>
         <Navbar className="navbar py-2" variant="dark" expand="lg">
            <Container>
               <Navbar.Brand href="#home">
                  <Stack direction="horizontal" gap={2}>
                     <img className="Profile-img" src="https://i.ibb.co/LxtbhMj/79502582-550130529143209-3625298829886095360-n.jpg" alt="..." />
                     <h3 className="fw-bold">Siamur Rahman </h3>
                  </Stack>
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                     <Nav.Link className="me-4 fs-5" href="#home">Home</Nav.Link>

                     <Nav.Link className="me-4 fs-5" href="#skills">Skills</Nav.Link>

                     <Nav.Link className="me-4 fs-5" href="#service">services</Nav.Link>

                     <Nav.Link className="me-4 fs-5" href="#resume">Resume</Nav.Link>

                     <Nav.Link className="me-4 fs-5" href="#aboutUs">About</Nav.Link>

                     <Nav.Link className="me-4 fs-5" href="#contactMe">Contact</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   );
};

export default MenuBar;