import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, requiredRole }) => {
  const location = useLocation();

  console.log(localStorage.getItem("token"));
console.log(localStorage.getItem("roleId"));

  // Get token and roleId from URL query params
  const queryParams = new URLSearchParams(location.search);
  const queryToken = queryParams.get("token");
  const queryRoleId = queryParams.get("roleId");

  // Get from Redux or fallback to localStorage
  const reduxRoleId = useSelector((state) => state.auth.roleId);
  const token = queryToken || localStorage.getItem("token");
  const roleId = queryRoleId || reduxRoleId || localStorage.getItem("roleId");

  console.log("Token:", token);
  console.log("Role ID:", roleId);

  // If no token, redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If role doesn't match, redirect to login
  if (requiredRole && roleId !== requiredRole) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
