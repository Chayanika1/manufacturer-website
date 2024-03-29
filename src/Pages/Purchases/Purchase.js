import React, { useEffect, useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import ProductQuantity from '../ProductQuantity/ProductQuantity';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



const Purchase = () => {
    const { id } = useParams();
    const [items, setItems] = useState({});
    const [buy, setBuy] = useState(null);


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();






    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`https://desolate-hamlet-69672.herokuapp.com/data/${id}`)
            .then(response => response.json())
            .then(data => setItems(data))
    }, []);



    const onSubmit = () => {
        
       




        const booking = {
            bookingId: items._id,
            name: user.displayName,
            booking: items.name,
            buyer: user.email,
            
            price: items.price



        }
        fetch('https://desolate-hamlet-69672.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast('Booking done')
                }
                else {
                    toast.error('already booked')
                }
            })


    }






    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-xl" >
                <figure class="px-10 pt-10">
                    <img src={items.img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{items.name}</h2>
                    <p>{items.details}</p>
                    <h5>Price : ${items.price}</h5>
                    <p> rate : {items.rate}</p>
                    <p> Available{items.quantity}</p>
                    <p>Max :{items.available}</p>
                    <div class="card-actions">

                        <label onClick={() => setBuy(items)} for="my-modal-6" class="btn modal-button">Buy Now</label>

                    </div>
                </div>
            </div>
            <div>
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                            <input type="name"{...register("name")} name="name" disabled value={user ?.displayName || ''} class="input input-bordered input-success w-full max-w-xs" />

                            <input type="email"{...register("email")} name="email" disabled value={user?.email} class="input input-bordered input-success w-full max-w-xs" />
                            <input type="text"{...register("address")} name="address" placeholder="Your Address" class="input input-bordered input-success w-full max-w-xs" />
                            <input type="text" {...register("phone")}name="phone" placeholder="Your Phone number" class="input input-bordered input-success w-full max-w-xs" />
                            <input type="text"{...register("product")} name="product" value={items.name} class="input input-bordered input-success w-full max-w-xs" />
                            <input type="text" {...register("price")}name="price" value={items.price} class="input input-bordered input-success w-full max-w-xs" />
                            <input type="number" name="quantity" placeholder="enter quantity" {...register("quntity", { min: 5, max: items.quantity })} class="input input-bordered input-success w-full max-w-xs" />
                            
                            {errors.quntity && (
                                <p className="text-red-800 font-bold">
                                    minimum order 2 and max order {items.quantity}
                                </p>
                            )}

                            <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                        </form>
                        <ToastContainer />

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Purchase;