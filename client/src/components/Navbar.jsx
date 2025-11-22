import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaHome } from 'react-icons/fa';
import { GiNoodles } from "react-icons/gi";
import { FaClipboardList, FaBagShopping } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { FiSettings, FiHelpCircle, FiLogOut } from "react-icons/fi";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex">

      {/* ===================== UNIVERSAL SIDEBAR (mobile + desktop) ===================== */}
      <nav className="
        flex flex-col
        w-20 min-h-screen
        bg-[#EAF7F2]
        pt-6 pb-6 px-3
        items-center justify-between
        border-r border-[#D0EDE3]
        fixed left-0 top-0
        z-50
      ">

        {/* MENU ITEMS */}
        <div className="flex flex-col items-center gap-8 py-6">
          <div className="flex flex-col gap-4">

            {[
              { to: "/", label: "Home", icon: <FaHome className="text-xl" /> },
              { to: "/mealplanning", label: "Meals", icon: <GiNoodles className="text-xl" /> },
              { to: "/recipes", label: "Recipes", icon: <FaClipboardList className="text-xl" /> },
              { to: "/quickbasket", label: "Basket", icon: <FaBagShopping className="text-xl" /> },
              { to: "/community", label: "People", icon: <BsPeopleFill className="text-xl" /> },
            ].map((item, idx) => (
              <NavLink
                key={idx}
                to={item.to}
                className={({ isActive }) =>
                  `
                    flex flex-col items-center justify-center
                    w-14 py-2 transition-all duration-200
                    ${
                      isActive
                        ? "bg-white shadow-md rounded-2xl scale-[1.06] text-[#2E6F52]"
                        : "text-[#5B8873] hover:bg-white/60 hover:rounded-2xl"
                    }
                  `
                }
              >
                {item.icon}
                <span className="text-[10px] mt-1">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Bottom icons */}
        <div className="flex flex-col gap-4 items-center">
          <NavLink to="/settings" className="text-[#5B8873] hover:bg-white/60 p-2 rounded-xl">
            <FiSettings className="text-xl" />
          </NavLink>

          <NavLink to="/help" className="text-[#5B8873] hover:bg-white/60 p-2 rounded-xl">
            <FiHelpCircle className="text-xl" />
          </NavLink>

          {token && (
            <button onClick={handleLogout} className="text-[#5B8873] hover:bg-white/60 p-2 rounded-xl">
              <FiLogOut className="text-xl" />
            </button>
          )}
        </div>
      </nav>

    </div>
  );
}

export default Navbar;
