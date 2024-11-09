import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx'
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
  };
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <NavLink to="/"><img src={logo} alt="img" className="h-24 "/></NavLink>
        </div>

        {/* Centered Links with Mobile Responsive */}
        

        {/* Right-Aligned Search Bar (Visible on md and larger) */}
        <form onSubmit={handleSearchSubmit} className="hidden mt-4 md:flex items-center font-thin">
        <div className="hidden md:flex font-semibold flex-grow justify-center space-x-6 text-navtext">
          <NavLink to="/" className="text-navtext hover:text-gray-200">Home</NavLink>
          <NavLink to="/mealplanning" className="text-navtext hover:text-gray-200">Meal Planning</NavLink>
          <NavLink to="/recipes" className="text-navtext hover:text-gray-200">Recipes</NavLink>
          <NavLink to="/quickbasket" className="text-navtext hover:text-gray-200">Quick basket</NavLink>
          <NavLink to="/community" className="text-navtext hover:text-gray-200">Community</NavLink>

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
        </form>

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
        <div className="md:hidden bg-blue-600 text-navtext space-y-2 mt-2 p-4 flex flex-col items-center">
          <NavLink to="/" className="text-navtext hover:text-gray-200">Home</NavLink>
          <NavLink to="/mealplanning" className="text-navtext hover:text-gray-200">Meal Planning</NavLink>
          <NavLink to="/recipes" className="text-navtext hover:text-gray-200">Recipes</NavLink>
          <NavLink to="/quickbasket" className="text-navtext hover:text-gray-200">Quick basket</NavLink>
          <NavLink to="/community" className="text-navtext hover:text-gray-200">Community</NavLink>
          
          {/* Search Bar in Mobile Menu */}
          <form onSubmit={handleSearchSubmit} className="flex items-center w-full mt-2">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="p-2 w-full rounded-l-md border border-gray-300 focus:outline-none focus:border-gray-400"
            />
            <button
              type="submit"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-2 rounded-r-md"
            >
              Search
            </button>
          </form>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
