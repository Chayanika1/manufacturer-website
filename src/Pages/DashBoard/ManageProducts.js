import React from 'react';
import { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct';
import { useQuery } from 'react-query';
import Spinner from '../Spinner/Spinner';

const ManageProducts = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginTop: '30px', marginBottom: '50px' }} className="text-2xl font-bold">OUR PRODUCTS</h2>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                {
                    services.map(service =><ManageProduct service={service} ></ManageProduct>)

                }

            </div>



        </div>
    );
};

export default ManageProducts;