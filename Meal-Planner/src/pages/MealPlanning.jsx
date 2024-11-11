import React, { useState } from 'react';
import { FaUser, FaUtensils, FaBullseye, FaCog } from 'react-icons/fa';
import ProfileInfo from '../components/ProfileInfo';
import MealPreferences from '../components/MealPreferences';
import HealthGoals from '../components/HealthGoals';
import AccountSettings from '../components/AccountSettings';
import Navbar from '../components/Navbar';
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';

function MealPlanning() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <>
      
      <div className="flex flex-row h-screen rounded-r-lg  bg-#f26ca6">
        {/* Sidebar */}
        <div className="rounded-r-lg text-gray border-r flex flex-col items-center md:items-center w-12 md:w-1/6 ml-2 gap-1">
        
          <h2 className="text-3xl mt-8 font-bold text-white text-center md:text-left md:mb-8 hidden md:block">Meal Planner</h2>

          <button
            className={`nav-link flex flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-2 px-2 md:px-4 py-2 rounded-md w-full mr-2 mt-2 ${
              activeTab === 'profile' ? 'bg-#e8d7d1' : 'hover:bg-#e8d7d1'
            }`}
            onClick={() => setActiveTab('profile')}
          >
            <FaUser />
            <span className="text-xs md:text-base hidden md:inline">Profile</span>
          </button>
          <button
            className={`nav-link flex flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-2 px-2 md:px-4 py-2 rounded-md w-full mr-2 ${
              activeTab === 'preferences' ? 'bg-#e8d7d1' : 'hover:bg-#e8d7d1'
            }`}
            onClick={() => setActiveTab('preferences')}
          >
            <FaUtensils />
            <span className="text-xs md:text-base hidden md:inline">Meal Preferences</span>
          </button>
          <button
            className={`nav-link flex flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-2 px-2 md:px-4 py-2 rounded-md w-full mr-2 ${
              activeTab === 'goals' ? 'bg-#e8d7d1' : 'hover:bg-#e8d7d1'
            }`}
            onClick={() => setActiveTab('goals')}
          >
            <FaBullseye />
            <span className="text-xs md:text-base hidden md:inline">Health Goals</span>
          </button>
          <button
            className={`nav-link flex flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-2 px-2 md:px-4 py-2 rounded-md w-full mr-2 ${
              activeTab === 'settings' ? 'bg-#e8d7d1' : 'hover:bg-#e8d7d1'
            }`}
            onClick={() => setActiveTab('settings')}
          >
            <FaCog />
            <span className="text-xs md:text-base hidden md:inline">Account Settings</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4 md:p-8 overflow-auto bg-back" style={{ fontFamily: 'Georgia, serif' }}>
          <div className="text-center mb-4">
            <h1 className="text-2xl md:text-3xl font-semibold text-primary">User Profile</h1>
          </div>
          <div className="mt-4 md:mt-8">
            {activeTab === 'profile' && <ProfileInfo />}
            {activeTab === 'preferences' && <MealPreferences />}
            {activeTab === 'goals' && <HealthGoals />}
            {activeTab === 'settings' && <AccountSettings />}
          </div>
        </div>
      </div>
    </>
  );
}

export default MealPlanning;
