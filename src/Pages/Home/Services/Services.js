import React, { useEffect, useState } from "react";
import { CardGroup, Container, Row } from "react-bootstrap";
import Service from "./Service/Service";
import "./Services.css";

const Services = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetch("locations.json")
      .then((res) => res.json())
      .then((data) => setLocations(data));
  }, []);
  return (
    <div className="mb-5">
      <h2 className="text-center my-5 fw-bold package-title">
        Travel <span>Packages</span>
      </h2>
      <Container fluid>
        <Row>
          <CardGroup className="gap-5">
            {locations.map((location) => (
              <Service key={location.id} location={location}></Service>
            ))}
          </CardGroup>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
