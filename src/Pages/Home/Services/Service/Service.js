import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ location }) => {
  const navigate = useNavigate();
  const { name, img, price, description } = location;
  return (
    <Card className="border border-light border-1">
      <Card.Img className="rounded" variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>${price}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <button
        onClick={() => navigate("/checkout")}
        className="border-0 btn-success py-2 fw-bold rounded"
      >
        Discover
      </button>
    </Card>
  );
};

export default Service;
