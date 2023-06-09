/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import vintage3 from "../../../assets/vintage/vintage3.jpg";
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
          <Navbar.Brand href="#home">
            <img
              style={{ height: "100px" }}
              className="rounded-circle"
              src={vintage3}
              alt=""
            />
            <span className="fw-bold text-info fs-2 ms-2">BD QUISINE</span>
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
                    ? "text-decoration-none text-info fw-semibold fs-5"
                    : "text-decoration-none text-black fw-semibold fs-5"
                }
              >
                <li className="me-3">Home</li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-decoration-none text-info fw-semibold fs-5"
                    : "text-decoration-none text-black fw-semibold fs-5"
                }
              >
                <li className="me-3">About</li>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-decoration-none text-info fw-semibold fs-5"
                    : "text-decoration-none text-black fw-semibold fs-5"
                }
              >
                <li className="me-3">Contact</li>
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "text-decoration-none text-info fw-semibold fs-5"
                    : "text-decoration-none text-black fw-semibold fs-5"
                }
              >
                <li>Blog</li>
              </NavLink>
            </Nav>
            <Nav className="d-flex align-items-center gap-2">
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
                <Button
                  variant="info"
                  // style={{ height: "60px" }}
                  onClick={handleLogOut}
                >
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
