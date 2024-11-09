import React from 'react';
import { NavLink } from 'react-router-dom';
import mixing from '../assets/mixing.png'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "../components/Navbar";
import image from '../assets/nutrition-plan.png'
import salad from '../assets/salad.png'

function Homeintro(){
    return (<>
    <div className="md:px-4 py-8">
        <div className="w-full">
            
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-4 gap-10">
    
                <div className="p-4 col-span-1 flex flex-col ">
                    <div className="md:max-w-[40vw]  ">
                      
                      <p className='bg-green text-lg text-white rounded-3xl font-semibold h-8'>&nbsp; A Customised Meal Planner</p>
                      <br></br>
                    <h1 className="text-5xl font-bold my-2 text-blue">Test the Joy of Healthy Eating</h1>
                    <br></br>
                    <p className='text-2xl text-blue'>Your ultimate meal planner website for easy, customized meal planning. Discover tailored recipes, build balanced meal plans, track nutrition, and create shopping lists – all in one place. Perfect for busy schedules and healthy eating goals!</p>
                    </div>
                    
                </div>
                <div className="flex justify-center items-center">
                    <img src={image} alt="img" className=" md:h-96 mb-4"/>
                </div>
            </div>
        </div>
    </div>
    </>
)}
export default Homeintro;