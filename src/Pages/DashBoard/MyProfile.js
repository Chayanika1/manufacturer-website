import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <h6>tis is  my profile</h6>
            <h1> User Name : {user  ?. displayName}</h1>
            <h2>User Email : {user?.email}</h2>
            
        </div>
    );
};

export default MyProfile;