/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-secondary p-4">
      <Container>
        <div>
          <Row>
            <Col sm={4}>
              <h4>About Us</h4>
              <ul className="list-unstyled">
                <li>
                  <p>
                    We offer very highly qualified chefs throughout
                    Bangladesh.Also we provide many more exceptional recepies
                    that are traditionaly renowned
                  </p>
                </li>
              </ul>
            </Col>
            <Col sm={4}>
              <h4>
                Subscribe to get <br /> important updates
              </h4>
              <Form.Control
                type="email"
                placeholder="your email"
                className="mb-2"
              />
              <Button variant="info">Subscribe</Button>
            </Col>
            <Col sm={4}>
              <div>
                <h4>Contact Us</h4>
                <ul className="list-unstyled">
                  <li>Phone : +0096790639</li>
                  <li>Email : bdquisinie@gmail.com</li>
                  <li>Address : Gulshan1,Dhaka</li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt-5">
          <p className="text-center">
            &copy; copyright {new Date().getFullYear()} - All Rights Reserved
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
