import React, { useState } from "react";
import { analyzeMeal } from "../services/nutritionClient";

export default function AddMealModal({ onClose, type, onAddMeal }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const [meal, setMeal] = useState({
    id: `m${Date.now()}`,
    name: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
    img: "",
    recipe: ""
  });

  async function handleAnalyze() {
    if (!query.trim()) return alert("Enter a food name");

    setLoading(true);
    try {
      const data = await analyzeMeal(query);

      setMeal({
        id: `m${Date.now()}`,
        name: query,
        calories: data.calories,
        protein: data.protein,
        carbs: data.carbs,
        fat: data.fat,
        img: `https://source.unsplash.com/400x300/?${query.split(" ")[0]}`,
        recipe: ""
      });
    } catch (err) {
      alert("AI failed to analyze. Try simple text.");
    }
    setLoading(false);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-96">
        <h2 className="text-lg font-semibold mb-2">Add {type}</h2>

        <textarea
          className="border p-2 rounded w-full mb-2"
          placeholder="Enter food: e.g. 2 eggs and toast"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          className="w-full bg-teal-600 text-white rounded py-2 mb-4"
          onClick={handleAnalyze}
        >
          {loading ? "Analyzing..." : "Analyze with AI"}
        </button>

        <input
          className="border p-2 rounded w-full mb-2"
          placeholder="Meal name"
          value={meal.name}
          onChange={(e) => setMeal({ ...meal, name: e.target.value })}
        />

        <div className="grid grid-cols-2 gap-2">
          <input
            className="border p-2 rounded"
            placeholder="Calories"
            value={meal.calories}
            onChange={(e) => setMeal({ ...meal, calories: e.target.value })}
          />
          <input
            className="border p-2 rounded"
            placeholder="Protein"
            value={meal.protein}
            onChange={(e) => setMeal({ ...meal, protein: e.target.value })}
          />
          <input
            className="border p-2 rounded"
            placeholder="Carbs"
            value={meal.carbs}
            onChange={(e) => setMeal({ ...meal, carbs: e.target.value })}
          />
          <input
            className="border p-2 rounded"
            placeholder="Fat"
            value={meal.fat}
            onChange={(e) => setMeal({ ...meal, fat: e.target.value })}
          />
        </div>

        <div className="flex justify-between mt-4">
          <button className="px-4 py-2 border rounded" onClick={onClose}>
            Cancel
          </button>

          <button
            className="px-4 py-2 bg-teal-600 text-white rounded"
            onClick={() => {
              onAddMeal(meal);
              onClose();
            }}
          >
            Add Meal
          </button>
        </div>
      </div>
    </div>
  );
}
