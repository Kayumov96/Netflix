import React from "react";
import Navbar from "./Navbar";

export const Main = ({ user }) => {
  return (
    <div>
      <Navbar user={user} />
    </div>
  );
};
export default Main;
