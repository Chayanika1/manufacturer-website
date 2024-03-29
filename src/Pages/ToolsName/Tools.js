import React, { useEffect, useState } from 'react';
import Tool from './Tool';
import './Tools.css';

const Tools = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://desolate-hamlet-69672.herokuapp.com/data')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='container'>
            <h2 style={{textAlign:'center',marginTop:'30px',marginBottom:'50px'}} className="text-2xl font-bold">OUR BEST PRODUCTS</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                services.slice(0,3).map(service=><Tool service={service}></Tool>)
            }

            </div>
           
            
            
        </div>
    );
};

export default Tools;