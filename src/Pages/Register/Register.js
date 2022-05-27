import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import auth from '../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Google from '../../Images/Google.png'

import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
import Spinner from '../Spinner/Spinner';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    
    
    let signInError;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const[token] = useToken(user ||gUser);
    if (error || updateError || gError) {
        signInError = <p className='text-red-500'><small>{error?.message  || updateError?.message}</small></p>
    }
    if(token){
        navigate('/Home')

    }

    if (user || gUser ) {
        console.log(user );
    }
    if (loading || gLoading || updating) {
        return <Spinner></Spinner>
    }
    
    const handleRegister = async (data) => {
        await updateProfile({ displayName: data?.name });

        await createUserWithEmailAndPassword(data.email, data.password);
        console.log(data.name)
       

    }

return (
    <div className='flex justify-center h-screen items-center'>
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="text-center text-2xl fond-bold">Register</h2>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div class="form-control w-full max-w-xs">
                    <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        <label class="label">
                            <span class="label-text">What is your email?</span>

                        </label>
                        <input type="email" placeholder="your email" class="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                }
                            })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>


                        <label class="label">
                            <span class="label-text">password</span>

                        </label>
                        <input type="password" placeholder="your password" class="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'confirm password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'password must be 6 characters' 
                                }
                            })} />
                             <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        <label class="label">
                            <span class="label-text">Confirm password</span>

                        </label>
                        <input type="password" placeholder="your Confirm password" class="input input-bordered w-full max-w-xs"
                            {...register("Confirm password", {
                                required: {
                                    value: true,
                                    message: 'password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'password must be 6 characters' 
                                }
                            })} />
                    </div>
                    {signInError}

                    <input  className='btn w-full max-w-xs text-white' type="submit" value='Register' />
                </form>
                <div class="divider">OR</div>
                <button onClick={()=>signInWithGoogle()}class="btn btn-success"><img style={{height:'30px',width:'30px',borderRadius:'50%', padding:'2px'}} src={Google}/> Signin with Google</button>
                <p className='text-center'>Already have an account? then go to<Link className="p-3" style={{ textDecoration: 'none' }} to="/Login">Login</Link></p>
            </div>
        </div>
        

    </div>
);
                        }
                    

export default Register;