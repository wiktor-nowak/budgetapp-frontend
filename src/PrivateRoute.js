import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ ...rest }) => {
  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? <Outlet {...rest} /> : <Navigate to="/register" />;
};

export default PrivateRoute;
