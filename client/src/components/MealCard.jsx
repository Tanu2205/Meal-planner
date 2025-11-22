import React from "react";
import { MoreHorizontal,X } from "lucide-react";

export default function MealCard({ meal, onViewRecipe, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border hover:shadow-md transition p-4 relative font-[Poppins]">
      
      {/* 3-dot menu button */}
      {onDelete && (
        <button
          onClick={onDelete}
          className="absolute top-3 right-3 text-red-400 hover:text-gray-600"
        >
          <X size={18} />
        </button>
      )}

      {/* Image */}
      <div className="w-full flex justify-center mb-3">
        
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-center text-gray-900">
        {meal.name}
      </h3>

      {/* Time + Calories */}
      <div className="flex justify-center items-center gap-2 mt-1 text-xs text-gray-500">
        <span>Calories: {meal.calories || 0} kcal</span>
        <span>Protein: {meal.protein || "NA"} gm</span>
        <span>Carbs: {meal.carbs|| "NA"} gm</span>
        <span>•</span>
        
      </div>

      {/* Recipe button */}
      
    </div>
  );
}
