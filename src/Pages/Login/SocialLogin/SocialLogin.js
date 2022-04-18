import React from "react";
import { Button } from "react-bootstrap";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (googleLoading) {
    return <Loading></Loading>;
  }
  if (googleError) {
    googleError.message =
      "Please authorize with a valid account and give permission to Login";
  }
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center mt-3">
        <span className="register-hr d-inline-block"></span>
        <span className="d-inline-block px-2 fw-bold">or</span>
        <span className="register-hr d-inline-block"></span>
      </div>
      <p
        className={`text-danger fw-bold ${googleError ? "d-block" : "d-none"}`}
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
  );
};

export default SocialLogin;
