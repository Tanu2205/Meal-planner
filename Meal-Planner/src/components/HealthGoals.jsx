import React, { useState } from 'react';
import MealGoalCard from './MealGoalCard';
const HealthGoals = () => {
  const [goal, setGoal] = useState('Lose Weight');
  const [calorieTarget, setCalorieTarget] = useState(1800);
  const [macroRatio, setMacroRatio] = useState({ protein: 40, carbs: 30, fat: 30 });

  const handleGoalChange = (e) => setGoal(e.target.value);
  const handleCalorieChange = (e) => setCalorieTarget(e.target.value);
  const handleMacroChange = (e) => setMacroRatio({ ...macroRatio, [e.target.name]: e.target.value });

  return (
    <>
    <div className='md:w-auto max-w-full mx-auto h-auto min-h-52 bg-#e4f4c3 shadow-lg rounded-lg overflow-hidden font-poppins  flex-col flex gap-2 '>
      <div className='text-start ml-4 font-sans font-bold text-3xl mt-4 text-blue'> 
      <h2>Set Your Daily Meal Goal:</h2></div>
      <div className=" flex flex-col md:flex-row justify-evenly mt-4 md:mt-0 items-center gap-2 ml-2 mr-2 text-blue">
      <MealGoalCard 
        label="Calorie Intake" 
        placeholder="Enter"
        normalRange1="Men: 2,000-2,500"
        normalRange2='Women: 1,800-2,200' 
        onChange={(e) => console.log('Calorie Intake:', e.target.value)}
      />
      
      <MealGoalCard 
        label="Protein Intake" 
        placeholder="Enter"
        normalRange1="0.8g/kg for general adults"
        normalRange2="1.2-2g/kg for active individuals" 
        onChange={(e) => console.log('Protein Intake:', e.target.value)}
      />
       <MealGoalCard 
        label="Water Intake" 
        placeholder="Enter"
        normalRange1="Men: 3.7L"
        normalRange2="Women: 2.7L (including all fluids)" 
        onChange={(e) => console.log('Water Intake:', e.target.value)}
      />
          <MealGoalCard 
        label="Fruit and Vegetable Servings" 
        placeholder="Enter"
        normalRange1="At least 5 servings"
        normalRange2="(2 fruits, 3 vegetables)" 
        onChange={(e) => console.log('Fruit and Vegetable Servings:', e.target.value)}
      />
       <MealGoalCard 
        label="Sugar Intake Limit" 
        placeholder="Enter"
        normalRange1="Less than 10% of total daily calories"
        normalRange2="(50g for 2,000 kcal/day)" 
        onChange={(e) => console.log('Sugar Intake Limit:', e.target.value)}
      />


          </div>
      

    </div>

    <div className="card p-4 shadow-sm">
      <h2 className="text-center">Health Goals</h2>
      <div className="mb-3">
        <label className="form-label">Goal</label>
        <select className="form-select" value={goal} onChange={handleGoalChange}>
          <option value="Lose Weight">Lose Weight</option>
          <option value="Maintain">Maintain</option>
          <option value="Gain Muscle">Gain Muscle</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Calorie Target</label>
        <input
          type="number"
          className="form-control"
          value={calorieTarget}
          onChange={handleCalorieChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Macronutrient Ratio</label>
        <div className="d-flex gap-3">
          <input
            type="number"
            className="form-control"
            name="protein"
            value={macroRatio.protein}
            onChange={handleMacroChange}
            placeholder="Protein"
          />
          <input
            type="number"
            className="form-control"
            name="carbs"
            value={macroRatio.carbs}
            onChange={handleMacroChange}
            placeholder="Carbs"
          />
          <input
            type="number"
            className="form-control"
            name="fat"
            value={macroRatio.fat}
            onChange={handleMacroChange}
            placeholder="Fat"
          />
        </div>
      </div>
      <button className="btn" style={{ backgroundColor: '#F26522', color: 'white' ,borderRadius:"5%",width:"8em"}}>
        Save  your milestones
      </button>
    </div>
    </>
  );
};

export default HealthGoals;
