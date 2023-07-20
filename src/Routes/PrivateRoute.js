import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    if (loader) {
        return <h3>Loading</h3>
    }

    if (user) {
        return children;
    }
    else {
        return (
            <Navigate to="/login"></Navigate>
        );
    }

};

export default PrivateRoute;