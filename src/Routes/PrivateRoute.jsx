import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../pages/Shared/Spinner/Spinner';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <Spinner/>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{form:location}} replace></Navigate>;
};

export default PrivateRoute;