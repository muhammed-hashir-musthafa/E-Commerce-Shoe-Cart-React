import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './Contexts'; 

const ProtectedRoute = ({ element }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
