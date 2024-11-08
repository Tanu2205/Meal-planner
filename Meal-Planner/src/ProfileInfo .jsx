import React, { useState } from 'react';

const ProfileInfo = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@email.com');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  return (
    <div className="card p-4 shadow-sm">
      <h2 className="text-center">Profile Information</h2>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <button className="btn" style={{ backgroundColor: '#F26522', color: 'white' }}>
        Save Changes
      </button>
    </div>
  );
};

export default ProfileInfo;