import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const[items,setItems] = useState({});
    useEffect(() => {
        fetch('services.json')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])
    
    return (
        <div>
            <h1>{id}</h1>
            <h5>{items.name}</h5>
           
            
        </div>
    );
};

export default Purchase;