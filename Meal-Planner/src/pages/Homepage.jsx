import React from 'react';
import { NavLink } from 'react-router-dom';
import mixing from '../assets/mixing.png'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "../components/Navbar";
import image from '../assets/nutrition-plan.png'
import salad from '../assets/salad.png'
import Homeintro from '../components/Homeintro';
import HomeMealPlanning from '../components/HomeMealPlanning';
import HomeRecepi from '../components/HomeRecepi';
import Footer from '../components/Footer';
function Homepage() {
  return (
    <>
    <div className=' bg-back'>
    <div className='w-full h-screen bg-back'>
      <Navbar/>
      <Homeintro/>
      <HomeMealPlanning/>
      <HomeRecepi/>
      <Footer/>
    </div>
    
    
    
        </div>
    </>
  );
}

export default Homepage;
