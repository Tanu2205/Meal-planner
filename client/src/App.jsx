import { useState } from 'react'
import Homepage from './pages/Homepage'
import Community from "./pages/Community";
import MealPlanning from './pages/MealPlanning';
import QuickBasket from './pages/QuickBasket';
import Recipes from './pages/Recipes';
import CartPage from './pages/CartPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import ProtectedRoute from "./components/ProtectedRoute";
import AccountSettings from './components/AccountSettings';
import { CartProvider } from './components/CartContext';
import MealSuggestionsPage from './pages/MealSuggestionsPage';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import NotFound from './pages/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  

  return ( <>
  
  <CartProvider>
    <ScrollToTop />

<div className='bg-back overflow-x-hidden font-[Poppins]'>
<Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/mealplanning"  element={<MealPlanning/>}/>
      <Route path="/recipes" element={<Recipes/>}/>
      <Route path="/quickbasket" element={<QuickBasket/>}/>
      <Route path="/community" element={<Community/>}/>
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<AccountSettings/>}></Route>
      <Route path="/mealsuggestions" element={<MealSuggestionsPage/>}></Route>
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
    </Routes>
    
    </div>
    </CartProvider>
  
  
    
     
  
  </>)
}

export default App
