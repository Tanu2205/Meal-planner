// FILE: MealSuggestionsPage.jsx
import React, { useMemo, useState } from "react";
import mealSuggestions from "../components/MealSuggestions";
import SuggestionCard from "../components/SuggestionCard";
import RecipeModal from "../components/RecipeModal";

export default function MealSuggestionsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedMeal, setSelectedMeal] = useState(null);

  const categories = useMemo(() => ["all", ...Object.keys(mealSuggestions)], []);

  const filtered = useMemo(() => {
    const lc = search.trim().toLowerCase();
    const check = (m) =>
      m.name.toLowerCase().includes(lc) ||
      (m.recipe && JSON.stringify(m.recipe).toLowerCase().includes(lc));

    if (activeCategory === "all") {
      // flatten all categories and filter
      return Object.keys(mealSuggestions)
        .flatMap((cat) => mealSuggestions[cat])
        .filter((m) => (lc ? check(m) : true));
    } else {
      return mealSuggestions[activeCategory].filter((m) => (lc ? check(m) : true));
    }
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-gray p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Meal Suggestions</h1>

        {/* Search + categories */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center mb-5">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search dish or ingredient..."
            className="flex-1 p-3 rounded-xl border shadow-sm"
          />

          <div className="flex gap-2 mt-2 sm:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-2 rounded-xl ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-white border text-gray-700"
                }`}
              >
                {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-4 text-sm text-gray-600">
          Showing <b>{filtered.length}</b> result{filtered.length !== 1 ? "s" : ""}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 py-6 gap-y-12">
          {filtered.map((meal) => (
            <SuggestionCard key={meal.id} meal={meal} onViewRecipe={(m) => setSelectedMeal(m)}/>
          ))}
        </div>

        {/* Recipe modal */}
        <RecipeModal meal={selectedMeal} onClose={() => setSelectedMeal(null)} />
      </div>
    </div>
  );
}
