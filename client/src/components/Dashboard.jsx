// src/components/Dashboard.jsx
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];

export default function Dashboard({ totals, goals }) {
  const macros = [
    { name: "Protein", value: totals.protein },
    { name: "Carbs", value: totals.carbs },
    { name: "Fat", value: totals.fat }, // using total_fat renamed as fat
  ];

  const daily = [
    { name: "Consumed", calories: totals.calories },
    {
      name: "Target",
      calories:
        goals.calories - totals.calories > 0
          ? goals.calories - totals.calories
          : 0
    }
  ];

  // 🆕 Macro comparison (Consumed vs Target)
  const macrosComparison = [
    { name: "Protein", consumed: totals.protein, target: goals.protein },
    { name: "Carbs", consumed: totals.carbs, target: goals.carbs },
    { name: "Fat", consumed: totals.fat, target: goals.fat }
  ];

  // 🆕 Micronutrient comparison: Iron, Calcium, Magnesium, Zinc, Sodium
  const micronutrientsComparison = [
    {
      name: "Iron (mg)",
      consumed: totals.iron,
      target: goals.iron || 18
    },
    {
      name: "Calcium (mg)",
      consumed: totals.calcium,
      target: goals.calcium || 1000
    },
    {
      name: "Magnesium (mg)",
      consumed: totals.magnesium,
      target: goals.magnesium || 400
    },
    {
      name: "Zinc (mg)",
      consumed: totals.zinc,
      target: goals.zinc || 11
    },
    {
      name: "Sodium (mg)",
      consumed: totals.sodium,
      target: goals.sodium || 2000
    }
  ];

  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <h3 className="font-semibold mb-3">Today Summary</h3>

      {/* PIE CHART */}
      <div style={{ height: 180 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={macros}
              innerRadius={35}
              outerRadius={70}
              dataKey="value"
              label={({ name, value }) => `${name}: ${value}g`}
            >
              {macros.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* CALORIES BAR */}
      <div className="mt-4" style={{ height: 220 }}>
        <h4 className="font-semibold mb-2">Calories :</h4>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={daily}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="calories" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* MACRO BAR CHART */}
      <div className="mt-4" style={{ height: 220 }}>
        <h4 className="font-semibold mb-2 py-2">Macro Comparison :</h4>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={macrosComparison}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="consumed" fill="#50e593ff" name="Consumed" />
            <Bar dataKey="target" fill="#FFBB28" name="Target" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 🆕 MICRONUTRIENTS BAR CHART */}
      <div className="mt-6 py-4" style={{ height: 260 }}>
        <h4 className="font-semibold mb-3">Micronutrient Comparison :</h4>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={micronutrientsComparison}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="consumed" fill="#4dabf7" name="Consumed" />
            <Bar dataKey="target" fill="#ffd166" name="Target" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
