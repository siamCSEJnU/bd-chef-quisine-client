import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginWithEmail = () => {
  return (
    <Container className="mx-auto w-25 mt-3">
      <h3>Please Login!!</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="info" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Don't Have an Account? <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
      <h4 className="mt-4">Or,</h4>
      <div>
        <Button variant="outline-info">
          <FaGoogle></FaGoogle> Login with Google
        </Button>{" "}
        <Button variant="outline-secondary">
          <FaGithub></FaGithub> Login with Github
        </Button>{" "}
      </div>
    </Container>
  );
};

export default LoginWithEmail;
