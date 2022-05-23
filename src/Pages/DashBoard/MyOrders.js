import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?buyer=${user.email}`)
                .then(response => response.json())
                .then(data => setOrders(data))

        }

    }, [user])
    return (
        <div>
            <h4>my orders:{orders.length}</h4>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th> Id</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order=><tr>
                                <th>{order._id}</th>
                                <td>{user ?.email}</td>
                                <td>{order.booking}</td>
                                
                            </tr>)
                        }

                        

                       

                        
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;



