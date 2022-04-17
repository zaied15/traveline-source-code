import { async } from "@firebase/util";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, sendingError] =
    useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Please Enter Your Email Address");
    }
  };

  if (user) {
    navigate(from, { replace: true });
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
          <p className={`text-danger fw-bold ${error ? "d-block" : "d-none"}`}>
            {error ? error.message : ""}
          </p>
          <Button variant="success" type="submit">
            Login
          </Button>
          <div>
            <p
              onClick={resetPassword}
              style={{ cursor: "pointer" }}
              className="d-inline-block"
            >
              Forget Password?
            </p>
          </div>
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
      <ToastContainer />
    </div>
  );
};

export default Login;
