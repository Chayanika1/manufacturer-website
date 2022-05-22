import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({service}) => {
    const navigate = useNavigate()
    
    const handleBuy=(id)=>{
        navigate(`/Tool/${id}`)

    }
    return (


        <div class="col-lg-4 col-sm-12 col-md-6">
            <div class="card text-center shadow-lg p-3 mb-5 bg-body rounded">
                <img style={{ height: '400px' }} src={service.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{service.name}</h5>
                    <p class="card-text">{service.description}</p>
                    <h3>Price : ${service.price}</h3>
                    <h4>Quantity :{service.quantity}</h4>
                    <h5>Available:{service.available}</h5>
                    <h6>Rate :{service.rate}</h6>
                    <div class="d-grid gap-2">

                        <button onClick={()=>handleBuy(service.id)} class="btn btn-primary" type="button">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Tool;