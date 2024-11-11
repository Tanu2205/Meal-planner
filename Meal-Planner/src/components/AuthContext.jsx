// src/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  // Mock login function
  const login = (username, password) => {
    const foundUser = users.find((u) => u.username === username && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  // Mock sign-up function
  const signup = (username, password, email) => {
    if (users.find((u) => u.username === username)) {
      return false; // User already exists
    }
    const newUser = {
      username,
      password,
      email,
      profileImage: 'https://via.placeholder.com/150',
    };
    setUsers([...users, newUser]);
    setUser(newUser);
    return true;
  };

  // Logout function
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
