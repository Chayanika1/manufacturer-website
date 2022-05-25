import { signOut } from 'firebase/auth';
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
            fetch(`http://localhost:5000/booking?buyer=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(response => {
                    console.log('res', response);
                    if (response.status === 401 || response.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/Home')
                    }
                    
                    return response.json()
                })
                .then(data => {

                    setOrders(data)
                })


        }

    }, [user])

    return (
        <div>
            <h4>my orders:{orders.length}</h4>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>


                            <th>Email</th>
                            <th> User Name</th>
                            <th>Product Name</th>
                            <th>Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <tr>

                                <td>{user?.email}</td>
                                <td>{user?.displayName}</td>
                                <td>{order.booking}</td>
                                <td>
                                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(order.price && order.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>

                                    </div>}
                                </td>


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



