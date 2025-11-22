import React, { useState } from 'react';
import image from '../assets/nutrition-plan.png'
import salad from '../assets/salad.png'
import apple from '../assets/apple.png'
import orange from '../assets/orange.png'
import Banana from '../assets/Banana.webp'
import palak from '../assets/palak.png'
import tomato from '../assets/tomato.png'
import MealPlanner from './MealPlanner';

const MealPreferences = () => {
  const [dietaryPreferences, setDietaryPreferences] = useState({
    vegan: false,
    glutenFree: false,
    keto: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setDietaryPreferences((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <>
    
    <MealPlanner/>
  {/* Button to Add New Meal */}
  <div className="mt-6 text-center">
    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300">
      Add New Meal Plan
    </button>
  </div>


    <div className="card p-4 shadow-sm">
      <h2 className="text-center">Meal Preferences</h2>
      <div className="mb-3">
        <label>
          <input
            type="checkbox"
            name="vegan"
            checked={dietaryPreferences.vegan}
            onChange={handleCheckboxChange}
          />
          Vegan
        </label>
      </div>
      <div className="mb-3">
        <label>
          <input
            type="checkbox"
            name="glutenFree"
            checked={dietaryPreferences.glutenFree}
            onChange={handleCheckboxChange}
          />
          Gluten-Free
        </label>
      </div>
      <div className="mb-3">
        <label>
          <input
            type="checkbox"
            name="keto"
            checked={dietaryPreferences.keto}
            onChange={handleCheckboxChange}
          />
          Keto
        </label>
      </div>
      <button className="btn" style={{ backgroundColor: '#F26522', color: 'white' ,borderRadius:"5%",width:"8em" }}>
        Save Preferences
      </button>
    </div></>
    
  );
};

export default MealPreferences;