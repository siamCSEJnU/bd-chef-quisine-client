import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { FcRating } from "react-icons/fc";

const Kitchen = ({ kitchens }) => {
  console.log(kitchens);
  return (
    <Container className="py-3">
      <Row xs={2} md={4} className="g-4">
        {kitchens.map((kitchen) => (
          <Col key={kitchen.id}>
            <Card className="p-2">
              <Card.Img
                variant="top"
                src={kitchen.kitchen_img}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{kitchen.kitchen_name}</Card.Title>
                <Card.Text className="text-secondary">
                  Ratings: {kitchen.rating} <FcRating></FcRating>
                </Card.Text>
                <Button variant="info">
                  <FaArrowLeft></FaArrowLeft> Check Out
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Kitchen;
