import React from 'react';
import { NavLink } from 'react-router-dom';
import mixing from '../assets/mixing.png'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "../components/Navbar";
import image from '../assets/nutrition-plan.png'
import salad from '../assets/salad.png'
function HomeRecepi(){
    return(
        <>
        <div className="md:px-4 py-8 w-full bg-back">
        <div className="w-full">
            
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-4 gap-10">
    
                <div className="p-4 col-span-1 flex flex-col">
                    <div className="md:max-w-[40vw]  ">
                      
                      
                      <br></br>
                    <h1 className="text-5xl font-bold my-2 text-blue ml-10">Healthy and tasty Recepies for your diet</h1>
                    <br></br>
                    <p className='text-2xl text-blue ml-10'>Discover a collection of healthy and tasty recipes tailored for your diet! Enjoy nutrient-rich, delicious meals that make eating well easy and satisfying. Perfect for any dietary goals!</p>
                    </div>
                    <NavLink to="/recepi" className="ml-10 text-white  hover:text-gray-200 ">
                    <div className='rounded-3xl bg-blue w-32 h-12 flex justify-center mt-2 items-center font-semibold y'>Recepi                   </div>
                    </NavLink>
                    
                    
                </div>
                <div className="flex justify-center items-center">
                    <img src={mixing} alt="img" className=" md:h-96 mb-4"/>
                </div>
                
            </div>
        </div></div></>
    )
}
export default HomeRecepi;
