import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Checkout.css";

const Checkout = () => {
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState("");
  const updateProfile = (e) => {
    e.preventDefault();
    setMessage("Thanks For Booking My Service");
  };
  return (
    <div>
      <div className="checkout d-flex align-items-center justify-content-center w-25 mx-auto text-center">
        <div className="w-100 border rounded p-2">
          <h2
            className={`text-success fw-bold text-center mb-5 ${
              message ? "d-block" : "d-none"
            }`}
          >
            {message}
          </h2>
          <h2 className="mb-5">Booking Service Form</h2>
          <Form onSubmit={updateProfile}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="text" placeholder="Enter Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={user.email}
                readOnly
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Control type="text" placeholder="Enter Phone" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Control type="text" placeholder="Enter Address" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
