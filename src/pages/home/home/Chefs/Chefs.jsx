import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ChefCards from "../ChefCards/ChefCards";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <Container className="my-5">
      <h4>here are chefs</h4>
      {/* {chefs.map((chef) => (
        <ChefCards key={chef.id} chef={chef}></ChefCards>
      ))} */}
      <ChefCards chefs={chefs}></ChefCards>
    </Container>
  );
};

export default Chefs;
