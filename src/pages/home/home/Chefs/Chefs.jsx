import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ChefCards from "../ChefCards/ChefCards";
import LazyLoad from "react-lazyload";
import chefsLogo from "../../../../assets/chefs/logo1.jpg";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://bd-chef-quisine-server.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <Container>
      <LazyLoad className="d-flex align-items-center gap-4 ">
        <img src="https://i.postimg.cc/NFg6mvPZ/lazy.jpg" />
        <h3 className="text-success fs-1">Wellcome Foodie!!</h3>
      </LazyLoad>
      <div className="d-flex justify-content-center align-items-center">
        <h4 className="fw-bold fs-2  text-secondary text-center ">
          Cuisine <span className="text-info">Magicians</span>
        </h4>
        <img src={chefsLogo} style={{ height: "120px" }} alt="" />
      </div>
      <ChefCards chefs={chefs}></ChefCards>
    </Container>
  );
};

export default Chefs;
