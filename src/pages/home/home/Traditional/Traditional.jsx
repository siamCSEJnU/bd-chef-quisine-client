import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import TraditionalItems from "../TraditionalItems/TraditionalItems";

const Traditional = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/traditional")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <Container>
      <h4 className="fw-bold fs-2 p-2 text-info text-center mb-4">
        Traditional <span className="text-secondary">Recipes</span>
      </h4>
      <TraditionalItems items={items}></TraditionalItems>
    </Container>
  );
};

export default Traditional;
