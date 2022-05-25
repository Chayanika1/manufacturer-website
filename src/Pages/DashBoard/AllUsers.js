import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Spinner/Spinner';
import UserCard from './UserCard';

const AllUsers = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()))
    if (isLoading) {
        <Spinner></Spinner>
    }
    return (
        <div>
            <h5>ALL USERS : {users?.length}</h5>
            <div class="overflow-x-auto">
                <table class="table w-full">
                   
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                     <tbody>
                         {
                             users.map(user=><UserCard user={user}></UserCard>)
                         }
                     </tbody>
                </table>
            </div>

        </div>


    );
};

export default AllUsers;