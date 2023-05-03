import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { AiFillLike } from "react-icons/ai";

const TraditionalItems = ({ items }) => {
  return (
    <Container>
      <Row xs={2} md={4} className="g-4">
        {items.map((item) => (
          <Col key={item.id}>
            <Card className="p-2">
              <Card.Img
                variant="top"
                src={item.item_img}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{item.item_name}</Card.Title>
                <Card.Text className="text-secondary">
                  Likes: {item.likes} <AiFillLike></AiFillLike>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TraditionalItems;
