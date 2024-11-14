import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import LoginPage from "../pages/LoginPage";
import TodoPage from "../pages/TodoPage";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import ProjectPage from "../pages/ProjectPage";
import ServicePage from "../pages/ServicePage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoute from "../components/ProtectedRoute";
import Layout from "../components/Layout";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Layout></Layout>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/services" element={<ServicePage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/todos"
            element={
              <ProtectedRoute>
                <TodoPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRoutes;