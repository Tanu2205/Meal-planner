// src/UserProfile.js
import React from 'react';
import { useAuth } from '../components/AuthContext';

const UserProfile = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <p>You need to log in to see this page.</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-xs">
        <h2 className="text-2xl font-semibold mb-4 text-center">User Profile</h2>
        <img src={user.profileImage} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4" />
        <p className="text-center text-lg font-bold">{user.username}</p>
        <p className="text-center text-gray-600 mb-4">{user.email}</p>
        <button onClick={logout} className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
