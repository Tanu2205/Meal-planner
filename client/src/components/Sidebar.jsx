// src/components/Sidebar.jsx
import React from "react";

export default function Sidebar({ totals, goals, setGoals }) {
  const percent = Math.min(100, Math.round((totals.calories / Math.max(1, goals.calories)) * 100));

  function handleChange(e) {
    const { name, value } = e.target;
    setGoals({...goals, [name]: Number(value) });
  }

  return (
    <div className="w-80 bg-white shadow-xl p-6 border-l">
      <h2 className="text-xl font-bold">Daily Targets</h2>
      <div className="mt-3 text-sm text-gray-600">
        <div>Consumed: <span className="font-semibold">{totals.calories} kcal</span></div>
        <div>Remaining: <span className="font-semibold">{Math.max(0, goals.calories - totals.calories)} kcal</span></div>
      </div>

      <div className="mt-4 w-full bg-gray-200 rounded-full h-3">
        <div className="bg-teal-500 h-3 rounded-full" style={{ width: `${percent}%` }} />
      </div>

      <div className="mt-4">
        <label className="text-sm">Calories</label>
        <input className="w-full border p-2 rounded mt-1" name="calories" value={goals.calories} onChange={handleChange} />
        <label className="text-sm mt-2 block">Protein (g)</label>
        <input className="w-full border p-2 rounded mt-1" name="protein" value={goals.protein} onChange={handleChange} />
        <label className="text-sm mt-2 block">Carbs (g)</label>
        <input className="w-full border p-2 rounded mt-1" name="carbs" value={goals.carbs} onChange={handleChange} />
        <label className="text-sm mt-2 block">Fat (g)</label>
        <input className="w-full border p-2 rounded mt-1" name="fat" value={goals.fat} onChange={handleChange} />
      </div>
    </div>
  );
}
