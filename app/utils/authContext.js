/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialToken = localStorage.getItem('token') || '';
  const [token, setToken] = useState(initialToken);
  const [loggedIn, setLoggedIn] = useState(!!initialToken);

  const login = newToken => {
    setToken(newToken);
    setLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    setLoggedIn(false);
  };

  useEffect(() => {}, [loggedIn]);

  return (
    <AuthContext.Provider value={{ token, login, logout, loggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
