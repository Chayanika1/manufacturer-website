import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = async( data) =>{
        console.log(data);
        await signInWithEmailAndPassword(data.email,data.password);
         navigate('/')

    }
    return (
        <div className='col-lg-6 col-sm-8 mx-auto border border-3 p-4 shadow-lg p-3 mb-5 bg-body rounded mt-3'>
            <h3 className='p-3 text-center'>Please Register <span style={{ color: 'purple' }}>Your-Self</span></h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3 text-center">
                    <label  for="exampleInputEmail1" class="form-label">Email address</label>
                    <input  {...register("email")}type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3 text-center">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input  {...register("password")}type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <input type="submit" />
                
                
            </form>
           
        </div>
    );
};

export default Login;