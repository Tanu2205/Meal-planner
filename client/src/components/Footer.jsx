import React from 'react';
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green text-white py-6 bottom-0">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-2xl font-semibold mb-4 md:mb-0 font-sans">
        <NavLink to="/"><img src={logo} alt="img" className="h-32"/></NavLink>

          &nbsp; &nbsp;Swad-Se
        </div>

        
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-4">
        © 2024 Swad-Se. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
