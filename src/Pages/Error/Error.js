import React from 'react';
import NotFound from '../../Images/NotFound.jpg'

const Error = () => {
    return (
        <div>
            <img  className='img-fluid'style={{height:'500px',width:'500px'}} src={NotFound} alt=""/>
            
        </div>
    );
};

export default Error;