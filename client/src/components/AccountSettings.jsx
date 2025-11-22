import React, { useState } from 'react';
import Navbar from "./Navbar";

const AccountSettings = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
    } else {
      setError('');
      alert('Password updated successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* LEFT NAVBAR */}
      <div className="fixed left-0 top-0 h-full">
        <Navbar />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 ml-24 p-6 flex items-center justify-center">
        
        <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
            Account Settings
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* New Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                placeholder="Enter new password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>

            {/* Error message */}
            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Update Button */}
            <button
              type="submit"
              className="w-full bg-blue hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Update Password
            </button>
          </form>

          {/* Logout Button */}
          <div className="mt-6 text-center">
            <button className="w-full border border-gray-400 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition">
              Logout
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AccountSettings;
