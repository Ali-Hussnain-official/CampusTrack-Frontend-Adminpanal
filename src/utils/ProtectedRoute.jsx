import React from 'react';
import { Navigate } from 'react-router-dom';
// import { AdminAuthProvider } from '../Context/AdminAuthContext';
import { useAdminAuth } from '../Context/AdminAuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAdminAuthenticated } = useAdminAuth();

  if (!isAdminAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
