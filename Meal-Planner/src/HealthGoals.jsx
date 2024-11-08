import React, { useState } from 'react';

const HealthGoals = () => {
  const [goal, setGoal] = useState('Lose Weight');
  const [calorieTarget, setCalorieTarget] = useState(1800);
  const [macroRatio, setMacroRatio] = useState({ protein: 40, carbs: 30, fat: 30 });

  const handleGoalChange = (e) => setGoal(e.target.value);
  const handleCalorieChange = (e) => setCalorieTarget(e.target.value);
  const handleMacroChange = (e) => setMacroRatio({ ...macroRatio, [e.target.name]: e.target.value });

  return (
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
      <button className="btn" style={{ backgroundColor: '#F26522', color: 'white' }}>
        Save Goals
      </button>
    </div>
  );
};

export default HealthGoals;