import React, { useState, useEffect, useRef } from "react";
import { FiClock } from "react-icons/fi";
import { FaFireAlt } from "react-icons/fa";

function RecipeCard({ title, image, time, calories, shortDescription, fullRecipe }) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  const togglePopover = () => setIsPopoverOpen(!isPopoverOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsPopoverOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex flex-col bg-white rounded-2xl p-4 shadow-md w-80 hover:shadow-lg transition">

      {/* Circular Image */}
      <div className="absolute -top-10 left-4 w-28 h-28 rounded-full overflow-hidden shadow-md border bg-white">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="mt-12">
        
        <div className="flex justify-end space-x-4 text-gray-500 text-sm mb-2">
  {/* Time */}
  <div className="flex items-center space-x-1">
    <FiClock className="text-green-600" />
    <span>{time}m</span>
  </div>

  {/* Calories */}
  <div className="flex items-center space-x-1">
    <FaFireAlt className="text-red-500" />
    <span>{calories} kcal</span>
  </div>
</div>


        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

        {/* Short Description */}
        <p className="text-gray-600 text-sm mt-1">{shortDescription}</p>

        {/* Button */}
        <button
          onClick={togglePopover}
          className="mt-3 w-fit px-4 py-1.5 bg-green text-white font-semibold rounded-2xl border border-green-300 hover:bg-green-200 transition"
        >
          See recipe
        </button>
      </div>

      {/* Popover */}
      {isPopoverOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            ref={popoverRef}
            className="bg-white max-w-lg w-full p-6 rounded-lg shadow-lg relative"
          >
            <button
              onClick={togglePopover}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 mb-4">{fullRecipe.description}</p>

            <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
            <ul className="list-disc list-inside mb-4">
              {fullRecipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700">{ingredient}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-2">Instructions</h3>
            <ol className="list-decimal list-inside space-y-2">
              {fullRecipe.steps.map((step, index) => (
                <li key={index} className="text-gray-700">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeCard;
