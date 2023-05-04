import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Kitchen from "../Kitchen/Kitchen";
import restaurantLogo from "../../../../assets/restaurant/restaurant2.jpg";

const Kitchens = () => {
  const [kitchens, setKitchens] = useState([]);
  useEffect(() => {
    fetch("https://bd-chef-quisine-server.vercel.app/kitchen")
      .then((res) => res.json())
      .then((data) => setKitchens(data));
  }, []);
  return (
    <Container className="mt-3 py-3">
      <h4 className="fw-bold fs-2 p-2 text-primary text-center mt-5 pb-3">
        Abroad <span className="text-secondary">Bengali </span>{" "}
        <span className="text-info">Kitchen</span>
        <img
          src={restaurantLogo}
          style={{ height: "50px" }}
          className="ps-3 "
          alt=""
        />
      </h4>
      <Kitchen kitchens={kitchens}></Kitchen>
    </Container>
  );
};

export default Kitchens;
