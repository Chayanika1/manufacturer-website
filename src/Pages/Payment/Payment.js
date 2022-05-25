import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import CheckoutForm from './CheckoutForm';
    //const stripePromise = loadStripe('pk_test_51L2yZbSAEJpzGv77F5o21hamN9XPrQfTCIMgXyd1llWAIDE6xOhmfFAkgQGkQAFzvU3ckGMVSFgwK6OeUMod7CbB00IGtFPdoZ');
 const stripePromise = loadStripe('pk_test_51L3EHmAGH8fraxDUAPptVJw3F9tXxwsMfNndtRsn6vrVsIKspMbB3ck4v9MLe4lXiL8dBXJPEpJo8mxQFfD8IJpr00nHWGGKu3')
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
                    
                </div>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm pay={pay} />
                    </Elements>



                </div>
            </div>

        </div>


    );
};

export default Payment;