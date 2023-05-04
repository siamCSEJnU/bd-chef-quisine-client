import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Kitchen from "../Kitchen/Kitchen";

const Kitchens = () => {
  const [kitchens, setKitchens] = useState([]);
  useEffect(() => {
    fetch("https://bd-chef-quisine-server.vercel.app/kitchen")
      .then((res) => res.json())
      .then((data) => setKitchens(data));
  }, []);
  return (
    <Container className="my-5">
      <h4 className="fw-bold fs-2 p-2 text-primary text-center mb-3 ">
        Abroad <span className="text-secondary">Bengali </span>{" "}
        <span className="text-info">Kitchen</span>
      </h4>
      <Kitchen kitchens={kitchens}></Kitchen>
    </Container>
  );
};

export default Kitchens;
