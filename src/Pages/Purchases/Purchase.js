import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductQuantity from '../ProductQuantity/ProductQuantity';

const Purchase = () => {
    const { id } = useParams();
    const [items, setItems] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/data/${id}`)
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">



                <div class="col">
                    <div class="card">
                        <img src={items.img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{items.name}</h5>
                            <p class="card-text">{items.description}</p>
                            <h4>Price : $ {items.price}</h4>
                            <h6>Available :{items.quantity}</h6>
                            <h6><small> Min Quantity :{items.available}</small></h6>
                            <h5>Ratings :{items.rate}</h5>
                            <button type="button" class="btn btn-dark">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <ProductQuantity></ProductQuantity>


        </div>
    );
};

export default Purchase;