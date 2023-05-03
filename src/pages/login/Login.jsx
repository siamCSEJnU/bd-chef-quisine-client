import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { GithubSignIn, GoogleSignIn, user, setUser } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    GithubSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubSignIn = () => {
    GoogleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <Button onClick={handleGoogleSignIn} variant="outline-info">
          <FaGoogle></FaGoogle> Login with Google
        </Button>

        <Button onClick={handleGithubSignIn} variant="outline-secondary">
          <FaGithub></FaGithub> Login with Github
        </Button>
      </div>
    </Container>
  );
};

export default Login;
