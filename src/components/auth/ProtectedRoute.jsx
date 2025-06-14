import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // For development, always allow access
  // In production, you would check for authentication here
  return children;

  // Production code would look like this:
  // const token = localStorage.getItem('token');
  // if (!token) {
  //   return <Navigate to="/login" state={{ from: window.location.pathname }} replace />;
  // }
  // return children;
};

export default ProtectedRoute; 