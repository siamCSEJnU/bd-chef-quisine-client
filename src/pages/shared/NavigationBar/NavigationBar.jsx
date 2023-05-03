/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Container className="mt-3 bg-secondary p-2 ">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="bg-secondary"
        variant="bg-secondary"
      >
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            BD QUISINE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              {/* <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link> */}
              <li className="me-2">Home</li>
              <li>Blog</li>
            </Nav>
            <Nav>
              <li>userProfile</li>
              <Link to="/login">
                <button className="ms-2">login</button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
