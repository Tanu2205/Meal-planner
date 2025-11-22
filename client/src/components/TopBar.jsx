import React from "react";
import { NavLink } from "react-router-dom";
import { FiPlus, FiHelpCircle, FiBell, FiChevronDown } from "react-icons/fi";

import logo from '../assets/logo.png';
import { FaShoppingCart } from "react-icons/fa";
function TopBar() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="w-full flex items-center justify-between bg-lgreen py-3 px-4 rounded-full shadow-sm ">

      {/* LEFT SIDE (Empty or add logo later) */}
      <div>
        <img src={logo} alt="Logo" className="w-10" />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">

        {/* ADD BUTTON */}
        

        {/* HELP ICON */}
        <NavLink to="/cart">
        <FaShoppingCart
          size={22}
          className="text-gray-600 cursor-pointer hover:text-black transition"
        /></NavLink>
        

        {/* NOTIFICATION BELL */}
        <FiBell
          size={22}
          className="text-gray-600 cursor-pointer hover:text-black transition"
        />

        {token ? (
          <div className="flex items-center gap-3 bg-white px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-50 transition">

            {/* User Image */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />

            {/* Username */}
            <span className="text-gray-700 font-medium">
              {user?.username || "User"}
            </span>

            {/* Dropdown arrow */}
            <FiChevronDown className="text-gray-600" />

          </div>
        ) : (
          <>
            <NavLink
              to="/signup"
              className="px-4 py-2 bg-white border border-[#A3D9C5] rounded-xl text-[#2E6F52] font-medium hover:bg-[#EAF7F2] transition"
            >
              Sign Up
            </NavLink>

            <NavLink
              to="/login"
              className="px-4 py-2 bg-[#2E6F52] text-white rounded-xl font-medium hover:bg-[#22533E] transition"
            >
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default TopBar;
