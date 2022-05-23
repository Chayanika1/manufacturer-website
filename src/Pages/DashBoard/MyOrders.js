import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const MyOrders = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?buyer=${user.email}`)
                .then(response => response.json())
                .then(data => setOrders(data))

        }

    }, [user])
    const handelPayment =()=>{
        navigate('/Payment')
    }
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
                                <td>{order._id}</td>
                                <td>{user ?.email}</td>
                                <td>{order.booking}</td>
                                <td><button onClick={handelPayment} class="btn btn-xs btn-secondary">Pay</button></td>
                                <td><button class="btn btn-xs btn-error">Cancel</button></td>
                            </tr>)
                        }

                        

                       

                        
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;



