import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Register.css";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [show, setShow] = useState(false);
  const [terms, setTerms] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [customError, setCustomError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();

  // Get Input Value From Registration Form
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPass(e.target.value);
  };

  // Registration Process
  const handleRegistration = (e) => {
    setShow(false);
    setTerms(false);
    e.preventDefault();
    if (password === confirmPass) {
      createUserWithEmailAndPassword(email, password);
    } else {
      setCustomError(`Password didn't match. Please check again.`);
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate("/");
  }

  return (
    <div className="mx-auto register-area d-flex align-items-center justify-content-center">
      <div className="w-100">
        <h2 className="fw-bold">Please Register</h2>
        <Form onSubmit={handleRegistration}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onBlur={handleEmail}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              onBlur={handlePassword}
              type={!show ? "password" : "text"}
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              onBlur={handleConfirmPassword}
              type={!show ? "password" : "text"}
              placeholder="Confirm Password"
              required
            />
          </Form.Group>
          <p className={`text-danger ${customError ? "d-block" : "d-none"}`}>
            {customError ? customError : ""}
          </p>
          <p className={`text-danger ${error ? "d-block" : "d-none"}`}>
            {error ? error.message : ""}
          </p>
          <Form.Check
            onClick={() => setShow(!show)}
            type="checkbox"
            label="Show Password"
            className="mb-3"
          />
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onClick={() => setTerms(!terms)}
              type="checkbox"
              label="I have agreed all the terms and conditions"
            />
          </Form.Group>
          <Button
            disabled={terms ? false : true}
            variant="success"
            type="submit"
          >
            Register
          </Button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
