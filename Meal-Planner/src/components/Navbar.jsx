import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { createBrowserRouter } from 'react-router-dom';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <NavLink to="/"><img src={logo} alt="img" className="h-24"/></NavLink>
        </div>

        {/* Centered Links with Mobile Responsive */}
        

        {/* Right-Aligned Search Bar (Visible on md and larger) */}
        <div className="hidden md:flex font-semibold flex-grow justify-end space-x-6 text-navtext">
          <NavLink to="/" className="text-navtext hover:text-gray-200">Home</NavLink>
          <NavLink to="/mealplanning" className="text-navtext hover:text-gray-200">Meal Planning</NavLink>
          <NavLink to="/recipes" className="text-navtext hover:text-gray-200">Recipes</NavLink>
          <NavLink to="/quickbasket" className="text-navtext hover:text-gray-200">Quick basket</NavLink>
          <NavLink to="/community" className="text-navtext hover:text-gray-200">Community</NavLink>
          <NavLink to="/cart" className="text-navtext hover:text-gray-200 ml-8 "><i className="fas fa-shopping-cart text-blue text-3xl ml-2"></i></NavLink>

        </div>
          <button
          style={{
            backgroundImage: 'linear-gradient(to right, #f26522, #f26ca7)',
            
            textAlign: 'center',
          }}
            type="submit"
            className="ml-2 hover:from-pink-500 hover:to-orange-50 text-gray font-semibold text-white rounded-3xl w-20 "
          >
          </button>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <button className="text-blue focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Vertical Dropdown) */}
      {isOpen && (
        <div className="md:hidden text-navtext space-y-2 mt-2 p-4 flex flex-col items-end ">
          <NavLink to="/" className="text-navtext hover:text-gray-200">Home</NavLink>
          <NavLink to="/mealplanning" className="text-navtext hover:text-gray-200">Meal Planning</NavLink>
          <NavLink to="/recipes" className="text-navtext hover:text-gray-200">Recipes</NavLink>
          <NavLink to="/quickbasket" className="text-navtext hover:text-gray-200">Quick basket</NavLink>
          <NavLink to="/community" className="text-navtext hover:text-gray-200">Community</NavLink>
          <NavLink to="/cart" className="text-navtext hover:text-gray-200"><i className="fas fa-shopping-cart text-blue text-3xl ml-2"></i></NavLink>

        </div>
      )}
    </nav>
  );
}

export default Navbar;
