import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, requiredRole }) => {
  // Retrieve authentication data from Redux store
  const token = useSelector((state) => state.auth.token);
  const roleId = useSelector((state) => state.auth.roleId);

  // Check if token exists in Redux state
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If requiredRole is specified, check if role matches
  if (requiredRole && parseInt(roleId, 10) !== requiredRole) {
    return <Navigate to="/login" replace />;
  }

  // Render children if token is valid and role matches
  return children;
};

export default ProtectedRoute;
