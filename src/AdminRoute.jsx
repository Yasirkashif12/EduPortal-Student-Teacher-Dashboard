import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const AdminRoute = ({ children }) => {
    const location = useLocation()
        const admin = sessionStorage.getItem("isAdminLoggedIn") 
    if (!admin) {
        return <Navigate to='/adminlogin' state={{ from: location }} replace />
    }
    return children
}

export default AdminRoute
