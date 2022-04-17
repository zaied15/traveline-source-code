import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Register.css";

const Register = () => {
  const [show, setShow] = useState(false);
  const [terms, setTerms] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [customError, setCustomError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, googelUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

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
    e.preventDefault();
    if (password === confirmPass) {
      createUserWithEmailAndPassword(email, password);
    } else {
      setCustomError(`Password didn't match. Please check again.`);
    }
  };

  if (user) {
    navigate("/");
  }
  if (googleError) {
    googleError.message =
      "Please authorize with valid account and give permission to register";
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
        <div className="d-flex align-items-center justify-content-center mt-3">
          <span className="register-hr d-inline-block"></span>
          <span className="d-inline-block px-2 fw-bold">or</span>
          <span className="register-hr d-inline-block"></span>
        </div>
        <p
          className={`text-danger fw-bold ${
            googleError ? "d-block" : "d-none"
          }`}
        >
          {googleError ? googleError.message : ""}
        </p>
        <Button
          onClick={() => signInWithGoogle()}
          variant="dark"
          className="fw-bold text-white"
        >
          Google Sign In
        </Button>
      </div>
    </div>
  );
};

export default Register;
