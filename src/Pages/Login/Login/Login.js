import { async } from "@firebase/util";
import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [show, setShow] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (loading || sending) {
    return <Loading></Loading>;
  }

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
              type={!show ? "password" : "text"}
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Check
            onClick={() => setShow(!show)}
            type="checkbox"
            label="Show Password"
            className="mb-3"
          />
          <p className={`text-danger fw-bold ${error ? "d-block" : "d-none"}`}>
            {error ? error.message : ""}
          </p>
          <Button variant="success" type="submit" className="fw-bold px-5">
            Login
          </Button>
          <div>
            <p>
              Forgot Your Password?{" "}
              <button
                onClick={resetPassword}
                style={{ cursor: "pointer" }}
                className="btn btn-secondary"
              >
                Reset Password
              </button>
            </p>
          </div>
          <p>
            Are you new to traveline? <Link to="/register">Register</Link>
          </p>
        </Form>
        <SocialLogin></SocialLogin>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
