import React from 'react';

const MealGoalCard = ({ 
  label, 
  placeholder, 
  normalRange1,
  normalRange2,
  onChange 
}) => {
  return (
    <div className="truncate font-sans flex flex-row items-center bg-white mt-2 p-4 h-32 w-full sm:w-48 md:w-auto rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="w-full">
        <div className="flex flex-col">
          <label htmlFor="target-input" className="text-sm font-semibold font-sans text-gray-700 mb-2">{label}</label>
          <input
            type="number"
            id="target-input"
            name="target-input"
            placeholder={placeholder}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={onChange}
          />
          <p className="text-xs mt-1 text-gray-400">Normal Range:<br /> {normalRange1}<br></br>{normalRange2}</p>
        </div>
      </div>
    </div>
  );
};

export default MealGoalCard;
