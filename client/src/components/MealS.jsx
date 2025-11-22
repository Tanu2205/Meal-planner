import React from "react";
import { Clock, Flame, MoreVertical } from "lucide-react";

export default function MealCard({ meal, onViewRecipe }) {
  return (
    <div className="relative bg-white rounded-2xl shadow-md p-4 pt-12 border w-full max-w-xs">
      
      {/* Circular Image Overlapping */}
      <div className="absolute -top-8 left-4 w-20 h-20 rounded-full overflow-hidden shadow-lg border bg-white">
        <img
          src={meal.img || "https://source.unsplash.com/600x400/?coffee"}
          alt={meal.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Menu Button (3 dots) */}
      <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
        <MoreVertical size={18} />
      </button>

      {/* Time + Calories Row */}
      <div className="flex gap-4 text-gray-500 text-xs mb-2">
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{meal.time || "5m"}</span>
        </div>
        <div className="flex items-center gap-1">
          <Flame size={14} />
          <span>{meal.calories || 250} cal</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900">{meal.name || "Black Coffee"}</h3>

      {/* Subtitle / Ingredients */}
      <p className="text-gray-500 text-sm mt-1">
        {meal.description || "Grilled Chicken, Mashed potatoes & Sauteed Vegetables"}
      </p>

      {/* See Recipe Button */}
      <button
        onClick={() => onViewRecipe(meal)}
        className="mt-4 w-32 bg-green-50 text-green-600 text-sm font-medium py-2 rounded-full border border-green-200 hover:bg-green-100 transition"
      >
        See recipe
      </button>
    </div>
  );
}
