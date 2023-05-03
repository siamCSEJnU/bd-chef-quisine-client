import React from "react";
import quisine from "../../../../assets/first-slide.jpg";
import { Container } from "react-bootstrap";

const Banner = () => {
  return (
    <Container className="d-lg-flex mt-4 align-items-center">
      <div className="flex-grow-1">
        <h4>
          <span className="text-primary fw-bold fs-1">Bangladeshi Cuisine</span>{" "}
          <br /> <span className="text-info fs-2 fw-semiblod">at its Best</span>{" "}
        </h4>
        <p className="text-secondary mt-3">
          {" "}
          Explore the delicious world of Bangladeshi food with our collection of{" "}
          authentic recipes <br /> from top chefs in the country. From
          mouth-watering biryanis to delicious curries, <br /> discover the best
          of what Bangladesh has to offer.
        </p>
      </div>
      <div>
        <img src={quisine} alt="" />
      </div>
    </Container>
  );
};

export default Banner;
