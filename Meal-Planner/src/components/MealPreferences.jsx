import React, { useState } from 'react';

const MealPreferences = () => {
  const [dietaryPreferences, setDietaryPreferences] = useState({
    vegan: false,
    glutenFree: false,
    keto: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setDietaryPreferences((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="card p-4 shadow-sm">
      <h2 className="text-center">Meal Preferences</h2>
      <div className="mb-3">
        <label>
          <input
            type="checkbox"
            name="vegan"
            checked={dietaryPreferences.vegan}
            onChange={handleCheckboxChange}
          />
          Vegan
        </label>
      </div>
      <div className="mb-3">
        <label>
          <input
            type="checkbox"
            name="glutenFree"
            checked={dietaryPreferences.glutenFree}
            onChange={handleCheckboxChange}
          />
          Gluten-Free
        </label>
      </div>
      <div className="mb-3">
        <label>
          <input
            type="checkbox"
            name="keto"
            checked={dietaryPreferences.keto}
            onChange={handleCheckboxChange}
          />
          Keto
        </label>
      </div>
      <button className="btn" style={{ backgroundColor: '#F26522', color: 'white' ,borderRadius:"5%",width:"8em" }}>
        Save Preferences
      </button>
    </div>
  );
};

export default MealPreferences;