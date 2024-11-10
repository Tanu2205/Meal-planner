
import RecipeCard from "../components/RecipeCard";
import RecipePage from "../components/RecipeCard";
import Navbar from "../components/Navbar";
import React, { useState } from "react";
import recipeData from "../components/RecepiData";
function Recipes() {
  
const [searchQuery, setSearchQuery] = useState("");
const filteredRecipes = recipeData.filter((recipe) =>
  recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <>
        <Navbar/>
        <div className=" bg-gray-100 text-blue flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Healthy Recipes</h1></div>
      <div className="flex justify-center">
        
      <div className="flex mb-4 justify-center overflow-x-auto w-4/5 gap-3">
        <input
          type="text"
          placeholder="Search Recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      </div>
      <div className="flex justify-center">
        
      <div className="flex flex-col justify-center overflow-x-auto w-4/5 gap-3">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              title={recipe.title}
              image={recipe.image}
              shortDescription={recipe.shortDescription}
              fullRecipe={recipe.fullRecipe}
            />
          ))
        ) : (
          <p className="text-lg text-gray-500">No recipes found</p>
        )}
      </div>
      </div>
        
    </>
  );
}

export default Recipes;
