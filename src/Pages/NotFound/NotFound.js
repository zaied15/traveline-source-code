import React from "react";
import { Container, Row } from "react-bootstrap";
import notFoundImg from "../../images/404.jpg";

const NotFound = () => {
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center">
          <img className="w-75 mt-5 mb-2" src={notFoundImg} alt="" />
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
