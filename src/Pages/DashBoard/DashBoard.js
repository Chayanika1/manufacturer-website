import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
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
                    <li><Link to="/DashBoard"> My Orders</Link></li>
                    <li><Link to="/DashBoard/MyReview"> My Reviews</Link></li>
                    <li><Link to="/DashBoard/MyProfile"> My Profile</Link></li>
                    
                    
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;