import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import Recipe from "../Recipe/Recipe";

const ChefRecipes = () => {
  const chefWithRecipes = useLoaderData();
  console.log(chefWithRecipes);
  const {
    chef_img,
    chef_name,
    bio,
    likes,
    number_of_recipes,
    recipes,
    years_of_experience,
  } = chefWithRecipes;
  return (
    <Container>
      <div className="d-lg-flex mt-4 align-items-center text-center">
        <div className="flex-grow-1">
          <h4 className="text-black fw-bold fs-1 text-center">{chef_name}</h4>
          <p className="text-center text-success fst-italic">
            {bio?.designation} <br />
            {bio?.location}{" "}
          </p>
          <ul className="list-unstyled fs-4 fw-semibold text-secondary ">
            <li>Total Recipies : {number_of_recipes}</li>
            <li>Professional Experience : {years_of_experience} years</li>
            <li>
              Likes : {likes} <AiFillLike className="text-primary"></AiFillLike>{" "}
            </li>
          </ul>
        </div>
        <div>
          <img
            className="rounded-circle"
            style={{ height: "500px", objectFit: "cover" }}
            src={chef_img}
            alt=""
          />
        </div>
      </div>
      <div>
        <Recipe recipes={recipes}></Recipe>
      </div>
    </Container>
  );
};

export default ChefRecipes;
