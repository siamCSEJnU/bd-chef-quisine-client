import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

const ChefCards = ({ chefs }) => {
  //   const { chef_name, chef_img, years_of_experience, number_of_recipes, likes } =
  //     chef;
  //   console.log(
  //     chef_name,
  //     chef_img,
  //     years_of_experience,
  //     number_of_recipes,
  //     likes
  //   );
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {chefs.map((chef) => (
          <Col key={chef.id}>
            <Card className="p-2">
              <Card.Img
                variant="top"
                src={chef.chef_img}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{chef.chef_name}</Card.Title>
                <Card.Text className="text-secondary">
                  Years of Experience: {chef.years_of_experience}
                  <br />
                  Number of Recipes: {chef.number_of_recipes}
                  <br />
                  Likes: {chef.likes}{" "}
                  <AiFillLike className="text-primary"></AiFillLike>
                </Card.Text>
                <Button variant="info">
                  <FaArrowLeft></FaArrowLeft> view recipes
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ChefCards;
