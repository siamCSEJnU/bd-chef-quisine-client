/* eslint-disable no-unused-vars */
import React from "react";
import NavigationBar from "../pages/shared/NavigationBar/NavigationBar";
import Footer from "../pages/shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div style={{ minHeight: "calc(100vh - 333px)" }}>
        {" "}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
