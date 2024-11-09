import React, { useState } from 'react';

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
      // Here, you can add the logic to update the password in the backend or save changes
      alert('Password updated successfully!');
    }
  };

  return (
    <div className="card p-4 shadow-sm">
      <h2 className="text-center text-primary">Account Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">New Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter new password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="form-control"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn" style={{ backgroundColor: '#F26522', color: 'white' }}>
          Update Password
        </button>
      </form>
      <div className="mt-3 text-center">
        <button className="btn btn-outline-secondary">Logout</button>
      </div>
    </div>
  );
};

export default AccountSettings;