import React, { Children, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouter = ({children}) => {
    const {user} = useContext(AuthContext);
    //
    const location = useLocation();

    if(user){
        return children;
    }
    return  <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRouter;