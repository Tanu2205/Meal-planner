// FILE: RecipeModal.jsx
import React from "react";

export default function RecipeModal({ meal, onClose }) {
  if (!meal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 font-[Poppins]">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6">
        <div className="flex items-start gap-4">
          <img
            src={meal.image}
            alt={meal.name}
            className="w-28 h-20 object-cover rounded"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold">{meal.name}</h2>
            <p className="text-sm text-gray-600 mt-1">
              {meal.calories} kcal • {meal.carbs}g Carbs • {meal.protein}g Protein • {meal.fat}g Fat
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <hr className="my-4" />

        <div className="text-gray-700 whitespace-pre-line">
          {typeof meal.recipe[ingrediant] === "string" ? meal.recipe : meal.recipe}
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-xl"
        >
          Close
        </button>
      </div>
    </div>
  );
}
