import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in on load
    const storedUser = localStorage.getItem('kamachi_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    // Mock login - in a real app this would verify against a backend
    const mockUser = { id: 1, email, name: email.split('@')[0] };
    setUser(mockUser);
    localStorage.setItem('kamachi_user', JSON.stringify(mockUser));
    return true;
  };

  const signup = (userData) => {
    // Mock signup - in a real app this would create a user in a backend
    const mockUser = { id: 2, email: userData.email, name: userData.name };
    setUser(mockUser);
    localStorage.setItem('kamachi_user', JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('kamachi_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
