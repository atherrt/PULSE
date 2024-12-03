import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, requiredRole }) => {
  const token = localStorage.getItem("token"); // Check for authentication token
  const roleId = useSelector((state) => state.auth.roleId); // Get roleId from Redux

  // Check if token exists in Redux state
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If the role doesn't match the required role, redirect to login
  if (requiredRole && roleId !== requiredRole) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated and role matches, render the children
  return children;
};

export default ProtectedRoute;
