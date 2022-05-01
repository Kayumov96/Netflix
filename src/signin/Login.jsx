import React from "react";
import { signInWithGoogle } from "../firebase/config";

export const Login = () => {
  return (
    <div>
      <button className="loginBtn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
};
export default Login;
