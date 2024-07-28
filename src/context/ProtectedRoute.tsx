import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppContext } from './appContext';

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAppContext();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
