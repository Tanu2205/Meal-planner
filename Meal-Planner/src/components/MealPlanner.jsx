import React, { useState } from 'react';
import mealSuggestions from './MealSuggestions';

const MealPlanner = () => {
  // Separate state for each meal type (breakfast, lunch, dinner)
  const [meals, setMeals] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
  });
  
  // State for custom item inputs per meal type
  const [customItems, setCustomItems] = useState({
    breakfast: "",
    lunch: "",
    dinner: "",
  });

  const handleAddItem = (mealType, item) => {
    setMeals((prevMeals) => ({
      ...prevMeals,
      [mealType]: [...prevMeals[mealType], item],
    }));
  };

  const handleRemoveItem = (mealType, index) => {
    setMeals((prevMeals) => ({
      ...prevMeals,
      [mealType]: prevMeals[mealType].filter((_, i) => i !== index),
    }));
  };

  const handleCustomItemChange = (mealType, e) => {
    setCustomItems((prevItems) => ({
      ...prevItems,
      [mealType]: e.target.value,
    }));
  };

  const handleAddCustomItem = (mealType) => {
    if (customItems[mealType].trim()) {
      handleAddItem(mealType, customItems[mealType].trim());
      setCustomItems((prevItems) => ({
        ...prevItems,
        [mealType]: "",
      }));
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen text-blue font-sans">
      <h1 className="text-3xl font-bold mb-8">Customizable Meal Planner</h1>
      <div className="w-full max-w-full h-full space-y-8">
        {["breakfast", "lunch", "dinner"].map((mealType) => (
          <div key={mealType} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 capitalize">
              {mealType}
            </h2>

            {/* Selected Items */}
            <ul className="mb-4">
              {meals[mealType].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-gray p-2 rounded mb-2"
                >
                  <span>{item}</span>
                  <button
                    onClick={() => handleRemoveItem(mealType, index)}
                    className="text-orange hover:text-orange"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            {/* Meal Suggestions with Images */}
            <div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                Suggestions
              </h3>
              <div className="flex flex-col md:flex-row justify-evenly mt-4 md:mt-0 items-center gap-2 ml-2 mr-2 text-blue">
                {mealSuggestions[mealType].map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => handleAddItem(mealType, suggestion.name)}
                    className="cursor-pointer m:w-32 flex flex-col items-center text-center"
                  >
                    <img
                      src={suggestion.image}
                      alt={suggestion.name}
                      className="w-20 h-20 object-cover rounded-full mb-2"
                    />
                    <span className="text-sm text-gray-700">{suggestion.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Item Input */}
            <div className="mt-6">
              <input
                type="text"
                value={customItems[mealType]}
                onChange={(e) => handleCustomItemChange(mealType, e)}
                placeholder={`Add custom ${mealType} item`}
                className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => handleAddCustomItem(mealType)}
                className="mt-2 bg-green text-white px-4 py-2 rounded hover:bg-green w-full"
              >
                Add Custom Item
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealPlanner;
