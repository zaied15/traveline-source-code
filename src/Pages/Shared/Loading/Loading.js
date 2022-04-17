import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="d-flex align-items-center justify-content-center checkout">
      <Spinner animation="border" variant="success" />
    </div>
  );
};

export default Loading;
