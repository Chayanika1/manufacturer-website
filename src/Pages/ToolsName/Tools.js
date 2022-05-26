import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='container'>
            <h2 style={{textAlign:'center',marginTop:'30px',marginBottom:'50px'}} className="text-2xl font-bold">OUR PRODUCTS</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                services.map(service=><Tool service={service}></Tool>)
            }

            </div>
           
            
            
        </div>
    );
};

export default Tools;