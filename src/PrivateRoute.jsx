import React, { useContext } from 'react';
import { AuthGiver } from './AuthProvider';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthGiver);
    const location = useLocation();

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (!user) {
        return <Navigate to="/studentlogin" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;
