import React from 'react';
import Navbar from "../components/Navbar";
import Homeintro from '../components/Homeintro';
import HomeMealPlanning from '../components/HomeMealPlanning';
import HomeRecepi from '../components/HomeRecepi';
import Footer from '../components/Footer';

function Homepage() {
  return (
    <>
      <div className=" min-h-screen flex">

        {/* ===== LEFT FIXED SIDEBAR ===== */}
        <div className="fixed left-0 top-0 h-full">
          <Navbar />
        </div>

        {/* ===== RIGHT SIDE CONTENT ===== */}
        <div className="ml-[80px] flex-1 overflow-x-hidden">

          {/* Add padding to align content nicely */}
          <div className="pb-20">
            <Homeintro />
            <HomeMealPlanning />
            <HomeRecepi />
            
          </div>
          <Footer />

        </div>

      </div>
    </>
  );
}

export default Homepage;
