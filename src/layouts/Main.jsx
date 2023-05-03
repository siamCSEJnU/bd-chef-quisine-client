/* eslint-disable no-unused-vars */
import React from "react";
import NavigationBar from "../pages/shared/NavigationBar/NavigationBar";
import Footer from "../pages/shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Container style={{ minHeight: "calc(100vh - 333px)" }}>
        {" "}
        <Outlet></Outlet>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
