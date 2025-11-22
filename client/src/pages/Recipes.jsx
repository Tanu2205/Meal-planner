import RecipeCard from "../components/RecipeCard";
import Navbar from "../components/Navbar";
import React, { useState } from "react";
import recipeData from "../components/RecepiData";
import TopBar from "../components/TopBar";

function Recipes() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = recipeData.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex">

      {/* Fixed Navbar */}
      <div className="fixed left-0 top-0 h-full shadow-lg bg-white z-50 hidden sm:block">
        <Navbar />
      </div>

      {/* Right content */}
      <div className="w-full bg-gray-100 min-h-screen px-4 py-4 sm:px-6 sm:py-6
                      ml-0 sm:ml-[68px]">

        <TopBar />

        {/* Search bar */}
        <div className="flex justify-left w-full px-2 sm:px-12 mb-4 sm:mb-6 py-4 sm:py-6">
          <input
            type="text"
            placeholder="Search Recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border bg-white rounded-full shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-green"
          />
        </div>

        {/* Grid View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                        gap-8 sm:gap-11 justify-items-center px-2 sm:px-6 py-4 sm:py-6">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe, index) => (
              <RecipeCard
                key={index}
                title={recipe.title}
                image={recipe.image}
                time={recipe.time}
                calories={recipe.calories}
                shortDescription={recipe.shortDescription}
                fullRecipe={recipe.fullRecipe}
              />
            ))
          ) : (
            <p className="text-lg text-gray-500 col-span-full text-center">
              No recipes found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Recipes;
