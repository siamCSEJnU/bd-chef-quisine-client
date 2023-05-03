import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  ToastContainer,
} from "react-bootstrap";
import { FcRating } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipe = ({ recipes }) => {
  const [favorites, setFavorites] = useState(recipes.map((recipe) => false));

  const handleFavorites = (index) => {
    toast.success("This recipe is your favorite!");
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };
  return (
    <>
      <Container className="my-5">
        <h4 className="my-4 fs-2 fw-bold text-success">My Favourites</h4>
        <Row xs={1} md={3} className="g-4">
          {recipes.map((recipe, index) => (
            <Col key={recipe.id}>
              <Card className="p-2">
                <Card.Img
                  variant="top"
                  src={recipe.recipe_img}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="fs-3">{recipe.name}</Card.Title>
                  <Card.Text className="text-secondary">
                    <span className="fs-5 text-black fw-semibold">
                      {" "}
                      Ingredients :
                    </span>{" "}
                    <ul>
                      {" "}
                      {recipe.ingredients.map((ingredient) => (
                        <li key={ingredient}>{ingredient}</li>
                      ))}
                    </ul>
                    <br />
                    <span className="fs-5 text-black fw-semibold">
                      {" "}
                      Cooking Method :
                    </span>{" "}
                    {recipe.cooking_method}
                    <br />
                    <span className="fs-5 text-black fw-semibold">
                      Rating:
                    </span>{" "}
                    <span className="text-success fs-5 fw-semibold">
                      {recipe.rating}
                    </span>{" "}
                    <FcRating></FcRating>
                  </Card.Text>

                  <Button
                    onClick={() => handleFavorites(index)}
                    disabled={favorites[index]}
                    variant="success"
                    type="submit"
                  >
                    {favorites[index] ? "Favorited" : "Add to Favorites"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Recipe;
