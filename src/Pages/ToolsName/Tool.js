import React from 'react';

const Tool = (props) => {
    const { name, img, description, quantity, rate, available, price } = props.service;
    return (


        <div class="col-lg-4 col-sm-12 col-md-6">
            <div class="card text-center shadow-lg p-3 mb-5 bg-body rounded">
                <img style={{ height: '400px' }} src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                    <h3>Price : ${price}</h3>
                    <h4>Quantity :{quantity}</h4>
                    <h5>Available:{available}</h5>
                    <h6>Rate :{rate}</h6>
                    <div class="d-grid gap-2">

                        <button class="btn btn-primary" type="button">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Tool;