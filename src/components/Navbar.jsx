import React, { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import logo from "../assets/images/logo.png";

export const Navbar = ({ user }) => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setFixed(true); // navbar after 100 px will be fixed
      } else {
        setFixed(false);
      }
    });
  });
  return (
    <div className={`navbar ${fixed && "fixedNav"}`}>
      <a href="#" className="brand">
        <img src={logo} alt="logo" />
      </a>
      <button className="authBtn" onClick={() => auth.signOut()}>
        <img src={user.photoURL} alt="auth user" className="userImage" />
        {/* Log out */}
      </button>
    </div>
  );
};
export default Navbar;
