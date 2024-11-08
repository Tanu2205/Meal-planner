import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import MealPreferences from './MealPreferences';
import HealthGoals from './HealthGoals';
import AccountSettings from './AccountSettings';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile'); // Track active tab

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-custom-orange text-white p-5 flex flex-col space-y-4">
        <h2 className="text-2xl font-bold text-center">Meal planner</h2>
        
        <button
          className={`nav-link px-4 py-2 rounded-md ${activeTab === 'profile' ? 'bg-orange-700' : 'hover:bg-orange-700'}`}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
        <button
          className={`nav-link px-4 py-2 rounded-md ${activeTab === 'preferences' ? 'bg-orange-700' : 'hover:bg-orange-700'}`}
          onClick={() => setActiveTab('preferences')}
        >
          Meal Preferences
        </button>
        <button
          className={`nav-link px-4 py-2 rounded-md ${activeTab === 'goals' ? 'bg-orange-700' : 'hover:bg-orange-700'}`}
          onClick={() => setActiveTab('goals')}
        >
          Health Goals
        </button>
        <button
          className={`nav-link px-4 py-2 rounded-md ${activeTab === 'settings' ? 'bg-orange-700' : 'hover:bg-orange-700'}`}
          onClick={() => setActiveTab('settings')}
        >
          Account Settings
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto"style={ {backgroundColor:"#b4cf96",fontFamily: 'Georgia, serif'}}>
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-primary">User Profile</h1>
        </div>
        <div className="mt-8">
          {/* Render active component based on the selected tab */}
          {activeTab === 'profile' && <ProfileInfo />}
          {activeTab === 'preferences' && <MealPreferences />}
          {activeTab === 'goals' && <HealthGoals />}
          {activeTab === 'settings' && <AccountSettings />}
        </div>
        
      </div>
    </div>
  );
};

export default ProfilePage;
