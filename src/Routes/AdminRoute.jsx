import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../pages/Shared/Spinner/Spinner';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [isAdmin,isAdminLoading] = useAdmin()
    const location = useLocation()
    if(loading || isAdminLoading){
        return <Spinner/>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/' state={{form:location}} replace></Navigate>;
};

export default AdminRoute;