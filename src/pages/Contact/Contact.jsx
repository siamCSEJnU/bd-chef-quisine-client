import React from "react";
import { Container, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <Container>
      <h3 className="text-center text-secondary mt-3">
        Contact with BD QUSINIE
      </h3>
      <Form className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fs-5 fw-semibold text-success">
            Email address
          </Form.Label>
          <Form.Control type="email" placeholder="your email" />
        </Form.Group>
        <Form.Group
          className="mb-3 fs-5 fw-semibold text-success"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Ask for</Form.Label>
          <Form.Control as="textarea" placeholder="place your mind" rows={5} />
        </Form.Group>
        <button type="button" className="btn btn-success">
          Submit
        </button>
      </Form>
    </Container>
  );
};

export default Contact;
