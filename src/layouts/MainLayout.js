import React from "react";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="w-full border content">{children}</div>
    </div>
  );
};

export default MainLayout;
