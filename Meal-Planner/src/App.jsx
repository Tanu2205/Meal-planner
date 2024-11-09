import { useState } from 'react'
import Homepage from './pages/Homepage'
import Community from "./pages/Community";
import MealPlanning from './pages/MealPlanning';
import QuickBasket from './pages/QuickBasket';
import Recipes from './pages/Recipes';
import NotFound from './pages/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return <>
  <Router future={{ v7_relativeSplatPath: true }}>
  <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/mealplanning"  element={<MealPlanning/>}/>
        <Route path="/recipes" element={<Recipes/>}/>
        <Route path="/quickbasket" element={<QuickBasket/>}/>
        <Route path="/community" element={<Community/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Router>
  
  </>
}

export default App
