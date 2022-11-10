import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div class="flex items-center justify-center space-x-2">
        <div
          class="spinner-border animate-spin inline-block w-4 h-4 border-1 rounded-full"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
        <div
          class="spinner-grow inline-block w-4 h-4 bg-current rounded-full opacity-0"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to={"/signIn"} state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
