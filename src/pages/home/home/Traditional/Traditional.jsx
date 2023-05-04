import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import TraditionalItems from "../TraditionalItems/TraditionalItems";
import traditionalLogo from "../../../../assets/recipe/recipe2.jpg";

const Traditional = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://bd-chef-quisine-server.vercel.app/traditional")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <Container>
      <h4 className="fw-bold fs-2  text-info text-center mt-5 pt-5 pb-3">
        Traditional <span className="text-secondary">Recipes</span>
        <img
          src={traditionalLogo}
          alt=""
          // className="ps-3"
          style={{ height: "90px" }}
        />
      </h4>
      <TraditionalItems items={items}></TraditionalItems>
    </Container>
  );
};

export default Traditional;
