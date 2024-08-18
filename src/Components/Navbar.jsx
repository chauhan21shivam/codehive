import React from "react";
import codehive from "../Components/Assets/CodeHive.webp";

const Navbar = () => {
  return (
    <div className="main flex items-center px-4 bg-[#2f3640] py-4">
        <div className="logo font-bold text-2xl text-white text-center flex">
          <img
            className="w-10 rounded-3xl mr-2"
            src={codehive}
            alt="Code Hive Logo"
          />
          <span className="text-2x font-serif my-1">Code Hive</span>
        </div>
    </div>
  );
};

export default Navbar;
