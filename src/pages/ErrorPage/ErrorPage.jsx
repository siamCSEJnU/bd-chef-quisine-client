import React from "react";
import { Container } from "react-bootstrap";
import error from "../../assets/error.jpg";

const ErrorPage = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <img src={error} alt="error" style={{ height: "700px" }} />
    </Container>
  );
};

export default ErrorPage;
