import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ChefCards from "../ChefCards/ChefCards";
import LazyLoad from "react-lazyload";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <Container className="my-3">
      <LazyLoad className="d-flex align-items-center gap-4 ">
        <img src="https://i.postimg.cc/NFg6mvPZ/lazy.jpg" />
        <h3 className="text-success fs-1">Wellcome Foodie!!</h3>
      </LazyLoad>
      <h4 className="fw-bold fs-2 p-2 text-secondary text-center mb-4">
        Cuisine <span className="text-info">Magicians</span>
      </h4>
      {/* {chefs.map((chef) => (
        <ChefCards key={chef.id} chef={chef}></ChefCards>
      ))} */}
      <ChefCards chefs={chefs}></ChefCards>
    </Container>
  );
};

export default Chefs;
