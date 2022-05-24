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
    const[buy,setBuy] = useState(null);









    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/data/${id}`)
            .then(response => response.json())
            .then(data => setItems(data))
    }, []);



    const handelSubmit = (e) => {
        e.preventDefault()
      const num = e.target.phone.value;
      console.log(num)




        const booking = {
            bookingId: items._id,
            name: user.displayName,
            booking: items.name,
            buyer: user.email,
            phone: e.target.phone.value,
            price : items.price



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
                console.log(data);
                if(data.success){
                    toast('Booking done')
                }
                else{
                    toast.error('already booked')
                }
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
                    <h5>Price : ${items.price}</h5>
                    <p> rate : {items.rate}</p>
                    <p> Available{items.quantity}</p>
                    <p>Max :{items.available}</p>
                    <div class="card-actions">
                        
                        <label onClick={()=>setBuy(items)} for="my-modal-6" class="btn modal-button">Buy Now</label>
                       
                    </div>
                </div>
            </div>
            <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handelSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                    <input type="name" name="name" disabled value={user?.displayName || ''}  class="input input-bordered input-success w-full max-w-xs" />
                   
                    <input type="email" name="email" disabled value={user ?.email}  class="input input-bordered input-success w-full max-w-xs" />
                    <input type="text" name="address" placeholder="Your Address" class="input input-bordered input-success w-full max-w-xs" />
                    <input type="text"name="phone" placeholder="Your Phone number" class="input input-bordered input-success w-full max-w-xs" />
                    <input type="text" name="product" value={items.name} class="input input-bordered input-success w-full max-w-xs" />
                    <input type="text" name="price" value= {items.price} class="input input-bordered input-success w-full max-w-xs" />
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