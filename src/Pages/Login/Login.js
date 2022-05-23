import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let logInError;
    if (error) {
        logInError = <p className='text-red-500'><small>{error?.message}</small></p>
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        await signInWithEmailAndPassword(data.email, data.password);
        navigate('/')

    }
    return (
        <div className='flex justify-center h-screen items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl fond-bold">Log In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

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
                        {logInError}

                        <input className='btn w-full max-w-xs text-white' type="submit" value='Log In' />


                    </form>
                    <p className='text-center'>Don't have an account? then go to<Link className="p-3" style={{ textDecoration: 'none' }} to="/Register">Register</Link></p>

                </div>

            </div>


        </div>
    );
};

export default Login;