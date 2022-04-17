import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const email = emailRef.current.value;
  const password = passwordRef.current.value;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate("/about");
  }
  return (
    <div className="mx-auto register-area d-flex align-items-center justify-content-center">
      <div className="w-100">
        <h2 className="fw-bold">Please Login</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Login
          </Button>
          <p>
            Are you new to traveline? <Link to="/register">Register</Link>
          </p>
        </Form>
        <div className="d-flex align-items-center justify-content-center mt-3">
          <span className="register-hr d-inline-block"></span>
          <span className="d-inline-block px-2 fw-bold">or</span>
          <span className="register-hr d-inline-block"></span>
        </div>
        <Button
          // onClick={() => signInWithGoogle()}
          variant="dark"
          className="fw-bold text-white"
        >
          Google Sign In
        </Button>
      </div>
    </div>
  );
};

export default Login;
