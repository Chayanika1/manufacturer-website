import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



const MyReview = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const imageStorageKey = 'c41b5fa5bb7a5e365ff9532690613577'
    const handleRegister = (data) => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        comment: data.comment,
                        img: img,
                        rating: data.rating

                    }
                    fetch('https://desolate-hamlet-69672.herokuapp.com/review', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",

                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(response => response.json())
                        .then((data) => {
                            //console.log("success",data);
                        })

                }

            })
        console.log(data)

        alert("successfully added", "TNANK YOU");
        navigate('/Home')


    }

    return (
        <div>
            <h4>this is my review</h4>
            <form onSubmit={handleSubmit(handleRegister)}>
                <div class="card w-96 bg-primary text-primary-content">
                    <div class="card-body">
                        <input type="text" placeholder="your Name" {...register("name")} class="input w-full max-w-xs" />
                        <input type="text" placeholder="Your Comment" {...register("comment")} class="input w-full max-w-xs" />
                        <input type="text" placeholder="Your Rating"{...register("rating")} class="input w-full max-w-xs" />
                        <input type="text" placeholder="Your img url" {...register("img")} class="input w-full max-w-xs" />
                        <input type="file" placeholder="Your img url" {...register("img")} class="input w-full max-w-xs" />

                        <button class="btn">Add Comment</button>
                        <ToastContainer />
                    </div>
                </div>

            </form >
        </div >
    );
};

export default MyReview;