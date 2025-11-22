import React from "react";
import { NavLink } from "react-router-dom";

import salad from "../assets/salad.png";
import apple from "../assets/apple.png";
import orange from "../assets/orange.png";
import Banana from "../assets/Banana.webp";
import palak from "../assets/palak.png";
import tomato from "../assets/tomato.png";

function HomeMealPlanning() {
  return (
    <>
      <div className="relative bg-white  overflow-hidden">

        {/* Floating Fruits */}
        
        

        {/* Main Section */}
        <div className="max-w-5xl mx-auto text-center px-4">
          <h3 className="text-green-700 font-semibold tracking-wide uppercase">
            Who We Are
          </h3>

          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-black">
            Prioritize Nutrition for <br /> Optimal Health
          </h1>

          {/* Icons Section */}
          <div className="flex justify-center gap-10 mt-6 text-green-700">
            <div className="flex flex-col items-center">
              <span className="text-2xl">💚</span>
              <p className="font-medium mt-1">Compassion</p>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-2xl">🤝</span>
              <p className="font-medium mt-1">Integrity</p>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-2xl">🌿</span>
              <p className="font-medium mt-1">Mind Growth</p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg justify-center">
            Our platform is designed to guide you—not guilt you.  
            Discover the ultimate platform for effortless, personalized meal planning!  
              Get customized recipes, build balanced meal plans, track your nutrition,  
              and create smart shopping lists — all in one convenient place.
              
            </p>
            <div className="flex justify-center mt-6">
  <NavLink to="/mealplanning">
    <button className="rounded-full bg-green text-white w-40 h-12 flex justify-center items-center font-semibold hover:bg-green-700 transition">
      Meal Planning
    </button>
  </NavLink>
</div>
            
          
        </div>
        

        {/* Stats Section */}
        <div className="max-w-5xl mx-auto mt-14 border-2 border-green-500 rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 text-center gap-6">
          <div>
            <h2 className="text-3xl font-bold text-green-600">99%</h2>
            <p className="text-gray-600">Happy Clients</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-green-600">12+</h2>
            <p className="text-gray-600">Years of Experience</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-green-600">1,200+</h2>
            <p className="text-gray-600">Nutrition Garden Food</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-green-600">200+</h2>
            <p className="text-gray-600">Evidence-Based Articles</p>
          </div>
        </div>

        {/* Meal Plan Section Underneath */}
        
      </div>
    </>
  );
}

export default HomeMealPlanning;
