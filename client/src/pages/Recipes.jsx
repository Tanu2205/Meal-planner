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

      {/* Fixed Navbar - smaller width */}
      <div className="fixed left-0 top-0 h-full shadow-lg bg-white z-50">
        <Navbar />
      </div>

      {/* Right content with minimal gap */}
      <div className="ml-[68px] w-full bg-gray-100 min-h-screen px-6 py-6 left-0">
        <TopBar/>
        {/* Title */}
        

        {/* Search bar */}
        <div className="flex justify-left px-12  mb-6 py-6 ">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-11 justify-items-center gap-x-10 px-6 py-6">
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
