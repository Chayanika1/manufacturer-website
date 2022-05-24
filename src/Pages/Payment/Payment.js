import React from 'react';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const [pay, setPay] = useState({});
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setPay(data))

    }, [])

    return (
        <div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h3> Hello ,{pay.name}</h3>
                    <h2 class="card-title">Pay For :{pay.booking} </h2>
                    <p>Please Pay ${pay.price}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">



                </div>
            </div>

        </div>


    );
};

export default Payment;