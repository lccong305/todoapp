import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[60px] w-[1180px] mx-auto">
      <div className="flex items-center justify-center h-full py-4 gap-x-10">
        <Link to="/" className="text-2xl font-bold text-[#31fe6a]">
          Home
        </Link>
        <Link to="/todo" className="text-2xl font-bold text-[#31fe6a]">
          Todo
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
