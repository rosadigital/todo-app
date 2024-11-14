import React, { createContext, useState, useContext, useEffect } from "react";
import { setAuthToken, login as apiLogin } from "../api/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => localStorage.getItem("token"));

  const login = async (credentials) => {
    const response = await apiLogin(credentials);
    const token = response.data.token;
    setAuthToken(token);
    setAuth(token);
    console.log("After login, response ", response.data);
    localStorage.setItem("token", token);
    localStorage.setItem("user", response.data.user);
  };

  const logout = () => {
    setAuth(null);
    setAuthToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  useEffect(() => {
    setAuthToken(auth);
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
