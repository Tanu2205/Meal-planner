import React, { useState } from 'react';
import ProfileInfo from '../components/ProfileInfo';
import MealPreferences from '../components/MealPreferences';
import HealthGoals from '../components/HealthGoals';
import AccountSettings from '../components/AccountSettings';

function MealPlanning() {
  
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-back text-navtext p-5 flex flex-col space-y-4 items-baseline">
        <h2 className="text-2xl font-bold text-blue text-center">Meal Planner</h2>

        <button
          className={`nav-link px-4 py-2 rounded-md items-baseline ${activeTab === 'profile' ? 'bg-orange-700' : 'hover:bg-orange-700'}`}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
        <button
          className={`nav-link px-4 py-2 rounded-md items-baseline ${activeTab === 'preferences' ? 'bg-orange-700' : 'hover:bg-orange-700'}`}
          onClick={() => setActiveTab('preferences')}
        >
          Meal Preferences
        </button>
        <button
          className={`nav-link px-4 py-2 rounded-md items-baseline ${activeTab === 'goals' ? 'bg-orange-700' : 'hover:bg-orange-700'}`}
          onClick={() => setActiveTab('goals')}
        >
          Health Goals
        </button>
        <button
          className={`nav-link px-4 py-2 rounded-md items-baseline ${activeTab === 'settings' ? 'bg-orange-700' : 'hover:bg-orange-700'}`}
          onClick={() => setActiveTab('settings')}
        >
          Account Settings
        </button>
      </div>

      <div className="flex-1 p-8 overflow-auto" style={{ backgroundColor: "#b4cf96", fontFamily: 'Georgia, serif' }}>
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-primary">User Profile</h1>
        </div>
        <div className="mt-8">
          {activeTab === 'profile' && <ProfileInfo />}
          {activeTab === 'preferences' && <MealPreferences />}
          {activeTab === 'goals' && <HealthGoals />}
          {activeTab === 'settings' && <AccountSettings />}
        </div>
      </div>
    </div>
  );
}

export default MealPlanning;
