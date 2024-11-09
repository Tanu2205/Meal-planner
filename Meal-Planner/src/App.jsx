import { useState } from 'react'
import Homepage from './pages/Homepage'
import Community from "./pages/Community";
import MealPlanning from './pages/MealPlanning';
import QuickBasket from './pages/QuickBasket';
import Recipes from './pages/Recipes';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import NotFound from './pages/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return ( <>
  
  <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/mealplanning"  element={<MealPlanning/>}/>
        <Route path="/recipes" element={<Recipes/>}/>
        <Route path="/quickbasket" element={<QuickBasket/>}/>
        <Route path="/community" element={<Community/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
     
  
  </>)
}

export default App
