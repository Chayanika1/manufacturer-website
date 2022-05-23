import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const MyReview = () => {
    const navigate = useNavigate()
    const { register,  handleSubmit } = useForm();
    const handleRegister=(data)=>{
        fetch('http://localhost:5000/review',{
            method:'POST',
            headers:{
                "Content-Type": "application/json",

            },
            body:JSON.stringify(data)
        })
        .then(response=>Response.json())
        .then((data)=>{
            console.log("success",data);
        })
         alert("successfully added","TNANK YOU");
         navigate('/Home')


    }
    
    return (
        <div>
            <h4>this is my review</h4>
            <form onSubmit={handleSubmit(handleRegister)}>
                <div class="card w-96 bg-primary text-primary-content">
                    <div class="card-body">
                        <input type="text" placeholder="your Name" {...register("name")} class="input w-full max-w-xs" />
                        <input type="text" placeholder="Your Comment" {...register("comment")}class="input w-full max-w-xs" />
                        <input type="text" placeholder="Your Rating"{...register("rating")} class="input w-full max-w-xs" />
                        <input type="text" placeholder="Your img url" {...register("img")}class="input w-full max-w-xs" />

                        <button class="btn">Add Comment</button>
                    </div>
                </div>
        
            </form >
        </div >
    );
};

export default MyReview;