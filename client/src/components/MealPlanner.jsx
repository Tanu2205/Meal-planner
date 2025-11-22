import React, { useState, useMemo } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import AddMealModal from "./AddMealModal";
import Dashboard from "./Dashboard";
import MealCard from "./MealCard";
import WeeklyPlanner from "./WeeklyPlanner";
import RecipeModal from "./RecipeModal";
import { NavLink } from "react-router-dom";

export default function MealPlanner() {
  const today = new Date().toISOString().slice(0, 10);

  const [mealData, setMealData] = useState({
    [today]: { breakfast: [], lunch: [], dinner: [] }
  });
  const [selectedDay, setSelectedDay] = useState(today);
  const [showAddModal, setShowAddModal] = useState(false);
  const [currentType, setCurrentType] = useState("breakfast");

  const [showRecipe, setShowRecipe] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const ensureDayExists = (day) => {
    if (!mealData[day]) {
      setMealData((prev) => ({
        ...prev,
        [day]: { breakfast: [], lunch: [], dinner: [] }
      }));
    }
  };
  ensureDayExists(selectedDay);

  const totals = useMemo(() => {
    const meals = [...mealData[selectedDay].breakfast, ...mealData[selectedDay].lunch, ...mealData[selectedDay].dinner];
    return meals.reduce(
      (acc, m) => {
        const n = m.raw?.nutrition || {};
        return {
          calories: acc.calories + (m.calories ?? 0),
          protein: acc.protein + (m.protein ?? 0),
          carbs: acc.carbs + (m.carbs ?? 0),
          fat: acc.fat + (n.total_fat ?? 0),
          calcium: acc.calcium + (n.calcium ?? 0),
          iron: acc.iron + (n.iron ?? 0),
          magnesium: acc.magnesium + (n.magnesium ?? 0),
          zinc: acc.zinc + (n.zinc ?? 0)
        };
      },
      { calories: 0, protein: 0, carbs: 0, fat: 0, calcium: 0, iron: 0, magnesium: 0, zinc: 0 }
    );
  }, [mealData, selectedDay]);

  const addMeal = (type, meal) => {
    const n = meal.raw?.nutrition || {};
    const newMeal = {
      ...meal,
      id: meal.id || `m${Date.now()}`,
      name: meal.name || "Meal",
      img: meal.img || `https://source.unsplash.com/400x300/?${meal.name?.split(" ")[0] || "food"}`,
      calories: meal.calories ?? 0,
      protein: meal.protein ?? 0,
      carbs: meal.carbs ?? 0,
      fat: n.total_fat ?? 0,
      calcium: n.calcium ?? 0,
      iron: n.iron ?? 0,
      magnesium: n.magnesium ?? 0,
      zinc: n.zinc ?? 0
    };

    setMealData((prev) => {
      const copy = { ...prev };
      copy[selectedDay][type] = [...copy[selectedDay][type], newMeal];
      return copy;
    });
  };

  const deleteMeal = (type, id) => {
    setMealData((prev) => {
      const copy = { ...prev };
      copy[selectedDay][type] = copy[selectedDay][type].filter((m) => m.id !== id);
      return copy;
    });
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const sourceType = result.source.droppableId;
    const destType = result.destination.droppableId;

    const items = Array.from(mealData[selectedDay][sourceType]);
    const [moved] = items.splice(result.source.index, 1);
    const destItems = Array.from(mealData[selectedDay][destType]);
    destItems.splice(result.destination.index, 0, moved);

    setMealData((prev) => ({
      ...prev,
      [selectedDay]: { ...prev[selectedDay], [sourceType]: items, [destType]: destItems }
    }));
  };

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen bg-white font-[Poppins] p-4 md:p-6 gap-6">
      
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-3xl font-bold">Meal Planner</h1>
          <button
            className="px-4 py-2 bg-green text-white rounded w-full md:w-auto"
            onClick={() => { setCurrentType("breakfast"); setShowAddModal(true); }}
          >
            + Add Meal
          </button>
        </div>

        <WeeklyPlanner selectedDay={selectedDay} onSelectDay={setSelectedDay} />

        <DragDropContext onDragEnd={onDragEnd}>
          {["breakfast", "lunch", "dinner"].map((section) => (
            <Droppable droppableId={section} key={section}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="p-4 md:p-5 shadow bg-[#e7f7e6] rounded-2xl mb-6">
                  <div className="flex justify-between mb-3">
                    <h2 className="text-xl font-semibold capitalize">{section}</h2>
                    <button
                      className="px-3 py-1 bg-green text-white rounded-3xl"
                      onClick={() => { setCurrentType(section); setShowAddModal(true); }}
                    >
                      + Add
                    </button>
                  </div>
                  <div className="space-y-3 py-2">
                    {mealData[selectedDay][section].map((meal, idx) => (
                      <Draggable key={meal.id} draggableId={meal.id} index={idx}>
                        {(dr) => (
                          <div ref={dr.innerRef} {...dr.draggableProps} {...dr.dragHandleProps}>
                            <MealCard
                              meal={meal}
                              onViewRecipe={() => { setSelectedMeal(meal); setShowRecipe(true); }}
                              onDelete={() => deleteMeal(section, meal.id)}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                  <NavLink
                    to="/recipes"
                    className="group inline-flex items-center gap-2 bg-white text-green transition-all duration-300 font-medium px-4 py-2 rounded-3xl shadow-sm hover:shadow-md mt-3"
                  >
                    <span className="text-sm tracking-wide">View Suggestions</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </NavLink>
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>

      {/* Dashboard */}
      <div className="w-full md:w-1/3 flex-shrink-0">
        <Dashboard
          totals={totals}
          goals={{ calories: 2000, protein: 40, carbs: 100, fat: 70 }}
        />
      </div>

      {showAddModal && <AddMealModal type={currentType} onClose={() => setShowAddModal(false)} onAddMeal={(meal) => addMeal(currentType, meal)} />}
      {showRecipe && <RecipeModal meal={selectedMeal} onClose={() => setShowRecipe(false)} />}
    </div>
  );
}
