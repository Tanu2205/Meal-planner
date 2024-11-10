import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
function RecipeCard({ title, image, shortDescription, fullRecipe }) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // Reference to the popover modal
  const popoverRef = useRef(null);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  // Close the popover if clicked outside
  useEffect(() => {
    // Function to handle click outside popover
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsPopoverOpen(false);
      }
    };

    // Adding event listener for click outside
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  return (
    <div>
      {/* Horizontal Card */}
      <div className="flex items-center p-4 bg-white rounded-lg shadow-md space-x-4 min-w-96 hover:shadow-lg">
        <img src={image} alt={title} className="w-40 h-40 object-cover rounded-md" />
        <div className="flex-1">
          <h2 className="text-lg font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 text-sm mb-2">{shortDescription}</p>

          {/* Button to open popover */}
          <button
            onClick={togglePopover}
            className="px-4 py-2 bg-blue text-white rounded-3xl hover:bg-blue-600 transition duration-300"
          >
            View Full Recipe
          </button>
        </div>
      </div>

      {/* Popover for Full Recipe */}
      {isPopoverOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div
            ref={popoverRef}
            className="bg-white max-w-lg w-full p-6 rounded-lg shadow-lg relative"
          >
            {/* Close Button */}
            <button onClick={togglePopover} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 font-bold">
              &times;
            </button>

            {/* Full Recipe Content */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-700 mb-4">{fullRecipe.description}</p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ingredients</h3>
            <ul className="list-disc list-inside mb-4">
              {fullRecipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700">{ingredient}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Instructions</h3>
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
