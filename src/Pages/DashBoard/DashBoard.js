import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import auth from '../firebase.init';

const DashBoard = () => {
    const[user] = useAuthState(auth)
    const [admin]=useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-3xl text-purple-900'> your DashBoard</h2>
                <Outlet></Outlet>
                

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/*<!-- Sidebar content here -->*/}
                    { !admin && <li><Link to="/DashBoard"> My Orders</Link></li>}
                    <li><Link to="/DashBoard/MyReview"> My Reviews</Link></li>
                    <li><Link to="/DashBoard/MyProfile"> My Profile</Link></li>
                    <li><Link to="/DashBoard/EditProfile"> </Link></li>
                    {admin &&<li><Link to="/DashBoard/ManageOrder">Manage All Order</Link></li>}
                    {admin && <li><Link to="/DashBoard/AllUsers"> All Users</Link></li>}
                    {admin && <li><Link to="/DashBoard/ManageProducts"> Manage Products</Link></li>}
                    
                    
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;