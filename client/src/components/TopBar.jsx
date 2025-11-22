import React from "react";
import { NavLink } from "react-router-dom";
import { FiPlus, FiHelpCircle, FiBell, FiChevronDown } from "react-icons/fi";
import logo from '../assets/logo.png';
import { FaShoppingCart } from "react-icons/fa";

function TopBar() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="w-full flex items-center justify-between bg-lgreen py-2 px-3 sm:py-3 sm:px-4 rounded-full shadow-sm">

      {/* LEFT SIDE */}
      <div>
        <img src={logo} alt="Logo" className="w-8 sm:w-10" />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 sm:gap-6">

        {/* CART */}
        <NavLink to="/cart">
          <FaShoppingCart
            size={20}
            className="text-gray-600 cursor-pointer hover:text-black transition sm:size-[22px]"
          />
        </NavLink>

        {/* NOTIFICATION */}
        <FiBell
          size={20}
          className="text-gray-600 cursor-pointer hover:text-black transition sm:size-[22px]"
        />

        {token ? (
          <div className="flex items-center gap-2 sm:gap-3 bg-white px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-50 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
              alt="User"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
            />

            {/* Username hidden on small screens */}
            <span className="text-gray-700 font-medium hidden sm:inline">
              {user?.username || "User"}
            </span>

            <FiChevronDown className="text-gray-600" />
          </div>
        ) : (
          <>
            <NavLink
              to="/signup"
              className="px-3 py-1 sm:px-4 sm:py-2 bg-white border border-[#A3D9C5] rounded-xl text-[#2E6F52] font-medium hover:bg-[#EAF7F2] transition text-sm sm:text-base"
            >
              Sign Up
            </NavLink>

            <NavLink
              to="/login"
              className="px-3 py-1 sm:px-4 sm:py-2 bg-[#2E6F52] text-white rounded-xl font-medium hover:bg-[#22533E] transition text-sm sm:text-base"
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
