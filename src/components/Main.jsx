import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";

export const Main = ({ user }) => {
  return (
    <div>
      <Navbar user={user} />
      <Banner />
    </div>
  );
};
export default Main;
