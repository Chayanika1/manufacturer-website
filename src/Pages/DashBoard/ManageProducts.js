import React from 'react';
import { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct';
import { useQuery } from 'react-query';
import Spinner from '../Spinner/Spinner';
import DeleteModal from '../DashBoard/DeleteModal'

const ManageProducts = () => {
    const [services, setServices] = useState([]);
    const[deleting,setDeleting] = useState(null)
    
    useEffect(() => {
        fetch('https://desolate-hamlet-69672.herokuapp.com/data')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginTop: '30px', marginBottom: '50px' }} className="text-2xl font-bold">OUR PRODUCTS</h2>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                {
                    services.map(service =><ManageProduct service={service} setDeleting={setDeleting}></ManageProduct>)

                }

            </div>
            {deleting && <DeleteModal></DeleteModal>}



        </div>
    );
};

export default ManageProducts;