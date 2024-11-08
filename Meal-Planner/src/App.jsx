import React, { useState } from 'react';
import ProfileInfo from "./ProfileInfo";

import MealPreferences from './MealPreferences';
import HealthGoals from './HealthGoals';
import AccountSettings from './AccountSettings';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile'); 

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="text-primary">User Profile</h1>
      </div>
      <div className="nav nav-tabs justify-content-center mt-4" role="tablist">
        <button
          className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`} 
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
        <button 
          className={`nav-link ${activeTab === 'preferences' ? 'active' : ''}`} 
          onClick={() => setActiveTab('preferences')}
        >
          Meal Preferences
        </button>
        <button 
          className={`nav-link ${activeTab === 'goals' ? 'active' : ''}`} 
          onClick={() => setActiveTab('goals')}
        >
          Health Goals
        </button>
        <button 
          className={`nav-link ${activeTab === 'settings' ? 'active' : ''}`} 
          onClick={() => setActiveTab('settings')}
        >
          Account Settings
        </button>
      </div>

      <div className="mt-4">
        {activeTab === 'profile' && <ProfileInfo />}
        {activeTab === 'preferences' && <MealPreferences />}
        {activeTab === 'goals' && <HealthGoals />}
        {activeTab === 'settings' && <AccountSettings />}
      </div>
    </div>
  );
};

export default ProfilePage;
