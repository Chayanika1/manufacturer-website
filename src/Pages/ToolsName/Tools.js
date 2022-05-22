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
            <div className='row mt-4'>
            {
                services.map(service=><Tool service={service}></Tool>)
            }

            </div>
           
            
            
        </div>
    );
};

export default Tools;