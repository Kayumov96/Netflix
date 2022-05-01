import React from "react";
import logo from "../assets/images/logo.png";
import { signInWithGoogle } from "../firebase/config";

export const Login = () => {
  return (
    <div className="login">
      <img src={logo} alt="logo" loading="lazy" />
      <br />
      <button className="loginBtn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
};
export default Login;
