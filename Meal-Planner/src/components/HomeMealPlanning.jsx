import React from 'react';
import { NavLink } from 'react-router-dom';
import mixing from '../assets/mixing.png'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "../components/Navbar";
import image from '../assets/nutrition-plan.png'
import salad from '../assets/salad.png'
import apple from '../assets/apple.png'
import orange from '../assets/orange.png'
import Banana from '../assets/Banana.webp'
import palak from '../assets/palak.png'
import tomato from '../assets/tomato.png'


function HomeMealPlanning(){
    return(<>
    <div className='min-h-screen bg-back'>
      <div className='flex justify-center '> 
      <div className='mt-5 bg-#fcfcfe border-2 border-green h-64 w-4/5 rounded-3xl'>
      <p className='ml-6 mt-4 text-3xl font-semibold text-blue'>Quick basket foods:</p><br></br>
      <div className='flex justify-evenly'>
      <div className="flex items-center bg-white mt-2 p-4 h-24 w-40 border ml-4 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <img
        src={Banana}
        alt='{title}'
        className="w-16 h-16 rounded-lg mr-4 object-cover"
      />
      <div>
        <h3 className="text-lg font-semibold">Banana</h3>
        <p className="text-sm text-gray-600">100 &#8377;</p>
      </div>
    </div>
    <div className="flex items-center  bg-white mt-2 p-4 h-24 w-40 border ml-4 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <img
        src={apple}
        alt='{title}'
        className="w-16 h-16 rounded-lg mr-4 object-cover"
      />
      <div>
        <h3 className="text-lg font-semibold">Apple</h3>
        <p className="text-sm text-gray-600">150 &#8377;</p>
      </div>
    </div>
    <div className="flex items-center  bg-white mt-2 p-4 h-24 w-40 border ml-4 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <img
        src={orange}
        alt='{title}'
        className="w-16 h-16 rounded-lg mr-4 object-cover"
      />
      <div>
        <h3 className="text-lg font-semibold">Orange</h3>
        <p className="text-sm text-gray-600">120 &#8377;</p>
      </div>
    </div>
    <div className="flex items-center  bg-white mt-2 p-4 h-24 w-40 border ml-4 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <img
        src={palak}
        alt='{title}'
        className="w-16 h-16 rounded-lg mr-4 object-cover"
      />
      <div>
        <h3 className="text-lg font-semibold">Spinach </h3>
        <p className="text-sm text-gray-600">70 &#8377;</p>
      </div>
    </div>
    <div className="flex items-center  bg-white mt-2 p-4 h-24 w-40 border ml-4 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <img
        src={tomato}
        alt='{title}'
        className="w-16 h-16 rounded-lg mr-4 object-cover"
      />
      <div>
        <h3 className="text-lg font-semibold">Tomato</h3>
        <p className="text-sm text-gray-600">50 &#8377;</p>
      </div>
    </div>
    
      </div>
      <div className='flex justify-center mt-1'>
      <NavLink to="/quickbasket" className="text-white items-center hover:text-gray-200 ">
                    <div className='rounded-3xl bg-blue w-32 h-12 flex justify-center mt-2 items-center font-semibold y'>Quick Basket                   </div>
                    </NavLink>
      </div>
      

    </div>
      

      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 md:m-4 gap-10">
    
                <div className="p-4 col-span-1 flex flex-col ">
                <div className="flex justify-center items-center">
                    <img src={salad} alt="img" className=" md:h-80 mt-6"/>
                </div>
                    
                    
                </div>
                <div className="md:max-w-[40vw]  ">
                      
                      <br></br>
                    <h1 className="text-5xl font-bold my-2 text-blue">Plan Your Healthy Meal</h1>
                    <br></br>
                    <p className='text-2xl text-blue'>Your ultimate meal planner website for easy, customized meal planning. Discover tailored recipes, build balanced meal plans, track nutrition, and create shopping lists – all in one place. Perfect for busy schedules and healthy eating goals!</p>
                    <NavLink to="/mealplanning" className="text-white  hover:text-gray-200 ">
                    <div className='rounded-3xl bg-blue w-32 h-12 flex justify-center mt-2 items-center font-semibold y'>Meal Planning                    </div>
                    </NavLink>
                    </div>
                
            </div>
            <div className="md:px-4 py-8">
        
    </div>
    </div>
    </>)
}
export default HomeMealPlanning;