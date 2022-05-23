import React from 'react';
import auth from '../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Google from '../../Images/Google.png'
import { useNavigate } from 'react-router-dom';

const SocialMedia = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate;
    if(user){
        navigate('/Home')
    }
    return (
        <div>
            <button onClick={()=>signInWithGoogle()}class="btn btn-success"><img style={{height:'30px',width:'30px',borderRadius:'50%', padding:'2px'}} src={Google}/> Signin with Google</button>
           
            
        </div>
    );
};

export default SocialMedia;
