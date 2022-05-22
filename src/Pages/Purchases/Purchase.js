import React, { useEffect, useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import ProductQuantity from '../ProductQuantity/ProductQuantity';



const Purchase = () => {
    const { id } = useParams();
    const [items, setItems] = useState({});








    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/data/${id}`)
            .then(response => response.json())
            .then(data => setItems(data))
    }, []);



    const handelSubmit = (e) => {




        const booking = {
            bookingId: items._id,
            booking: items.name,
            buyer: user.email,
            phone: e.target.phone.value



        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })


    }






    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={items.img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{items.name}</h2>
                    <p>{items.details}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchase;