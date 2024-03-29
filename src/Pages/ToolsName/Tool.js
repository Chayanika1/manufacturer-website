import React from 'react';
import { useNavigate } from 'react-router-dom';
import Purchase from '../Purchases/Purchase';

const Tool = ({ service }) => {
    const { _id, name, price, quantity, description, rate, available, img } = service
    const navigate = useNavigate()

    const handleBuy = (id) => {
        navigate(`/Tool/${id}`)

    }
    return (


        <div class="card card-compact  bg-base-100 shadow-xl" style={{width:'75%'}}>
            <figure><img src={img} style={{height:'200px'}} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <h4>Price : ${price}</h4>
                <h5>Quantity:{quantity}</h5>
                <h6>Max purchase :{available}</h6>
                <h4>Ratings :{rate}</h4>
                
                <div class="card-actions justify-center">
                    <button onClick={() => handleBuy(_id)} class="btn btn-primary">Buy Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Tool;