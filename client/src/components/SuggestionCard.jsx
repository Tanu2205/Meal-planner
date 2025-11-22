import React from "react";
import { FiClock } from "react-icons/fi";
import { FaFireAlt } from "react-icons/fa";

export default function SuggestionCard({ meal, onViewRecipe }) {
  return (
    <div className="relative bg-white rounded-2xl p-5 pb-8 shadow-md hover:shadow-lg transition w-full">

      {/* Floating circular image */}
      <div className="absolute -top-10 left-4">
        <img
          src={meal.image}
          alt={meal.name}
          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
        />
      </div>

      {/* Right-side icons row */}
      <div className="flex justify-end gap-4 text-gray-600 text-sm mb-1">
        <div className="flex items-center gap-1">
          <FiClock size={15} />
          <span>{meal.time}m</span>
        </div>

        <div className="flex items-center gap-1">
          <FaFireAlt size={15} />
          <span>{meal.calories}cal</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-3 text-xl font-semibold">{meal.name}</h3>

      {/* Subtitle (multi-line) */}
      <p className="text-sm text-gray-600 mt-1 leading-5">
        {meal.description}
      </p>

      {/* See Recipe Button */}
      <button
        onClick={() => onViewRecipe(meal)}
        className="mt-4 bg-green text-green-700 px-5 py-2 rounded-full font-medium hover:bg-green-200 transition"
      >
        See recipe
      </button>
    </div>
  );
}
