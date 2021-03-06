import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Icon from '../../Images/Icon.jpg';
import auth from '../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">

                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <h4>User :{user?.displayName}</h4>
                        <li><Link to='/Home'>Home</Link></li>
                        {
                            user && <>
                            <li><Link to='/DashBoard'>DashBoard</Link></li>
                            </>

                        }
                        
                        
                        <li><Link to='/Portfolio'>Portfolio</Link></li>
                        <li><Link to='/Blogs'>Blogs</Link></li>

                        <li><Link to='/Register'>Register</Link></li>
                        {
                            user ? <button class="btn btn-active btn-primary" onClick={handleSignOut}>SignOut</button> : <li><Link to='/Login'>Login</Link></li>
                        }
                    </ul>
                </div>
                <img style={{ height: '80px', width: '80px' }} src={Icon} alt="" />
                <h4>User :{user?.displayName}</h4>

            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to='/Home'>Home</Link></li>
                    {
                            user && <>
                            <li><Link to='/DashBoard'>DashBoard</Link></li>
                            </>

                        }
                    <li><Link to='/Portfolio'>Portfolio</Link></li>
                    <li><Link to='/Blogs'>Blogs</Link></li>
                    <li><Link to='/Register'>Register</Link></li>
                    {
                        user ? <button class="btn btn-active btn-primary" onClick={handleSignOut}>SignOut</button> : <li><Link to='/Login'>Login</Link></li>
                    }


                </ul>
            </div>
            <div className='navbar-end'>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>



            </div>

        </div >



    );
};

export default Header;