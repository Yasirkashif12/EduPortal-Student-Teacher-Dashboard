import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthGiver } from './AuthProvider'; 

const TeacherRoute = ({ children }) => {
  const { user, role } = useContext(AuthGiver);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/teacherlogin" state={{ from: location }} replace />;
  }

  if (role !== "teacher") {
    return <Navigate to="/teacherhome" replace />;
  }

  return children;
};

export default TeacherRoute;
