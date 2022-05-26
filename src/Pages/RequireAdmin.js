import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';

import useAdmin from '../hooks/useAdmin';

import auth from './firebase.init';
import Spinner from './Spinner/Spinner';







const RequireAdmin = ({children}) => {
    const[user,loading] = useAuthState(auth);
    const[admin,adminLoading] = useAdmin(user)
    const location = useLocation();
    if(loading || adminLoading){
        return <Spinner></Spinner>
        
        

    }
    
    if(!user || !admin){
        signOut(auth)
        return <Navigate to="/Register" state={{from:location}}replace/>
    }
    
    return children;
        
    
};

export default RequireAdmin;