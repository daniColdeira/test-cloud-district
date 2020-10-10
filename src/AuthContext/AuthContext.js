import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({user: {}, isAuthenticated: false});
  const setUserAuth = (user, isAuthenticated) => {
    setUser({user, isAuthenticated});
  };
  return (
    <AuthContext.Provider value={{ user, setUserAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AppProvider;