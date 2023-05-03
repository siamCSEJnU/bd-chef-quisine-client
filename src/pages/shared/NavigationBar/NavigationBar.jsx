/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Overlay,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const NavigationBar = () => {
  const { user, logOut, loading } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("sucessfull logOut");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container className="mt-3 bg-secondary p-2 ">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="bg-secondary"
        variant="bg-secondary"
      >
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-2">
            BD QUISINE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              {/* <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link> */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-decoration-none text-light fw-semibold fs-5"
                    : "text-decoration-none text-black fw-semibold fs-5"
                }
              >
                <li className="me-5">Home</li>
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "text-decoration-none text-light fw-semibold fs-5"
                    : "text-decoration-none text-black fw-semibold fs-5"
                }
              >
                <li>Blog</li>
              </NavLink>
            </Nav>
            <Nav>
              {/* <li>userProfile</li>
              <Link to="/login">
                <button className="ms-2">login</button>
              </Link> */}

              {user && (
                <OverlayTrigger
                  placement="left"
                  overlay={<Tooltip>{user?.displayName}</Tooltip>}
                >
                  <img
                    style={{ height: "60px" }}
                    className="rounded-circle me-2"
                    src={user?.photoURL}
                  ></img>
                </OverlayTrigger>
              )}
              {user ? (
                <Button variant="info" onClick={handleLogOut}>
                  Sign Out
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="info">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
