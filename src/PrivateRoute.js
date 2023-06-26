import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({isToken }) => {
  return isToken ? <Outlet /> : <Navigate to="/register" />;
};

export default PrivateRoute;
