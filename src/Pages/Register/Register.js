import axios from "axios";
import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Google from '../../Images/Google.png'



import auth from "../firebase.init";

import Spinner from "../Spinner/Spinner";

const Ragister = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, uperror] = useUpdateProfile(auth);

  const navigate = useNavigate();

  //custom hook
  const [token] = useToken(user);
  //custom hook
  if (user || gUser) {
    navigate("/Home");
  }

  let errorMessage;

  const onSubmit = async (data) => {
    const email = data.email;
    const pass = data.password;
    await createUserWithEmailAndPassword(email, pass);
    await updateProfile({ displayName: data?.name, photoURL: imgUrl });
    
  };

  if (token) {
    navigate("/home");
  }

  if (error || uperror || gError) {
    errorMessage = (
      <p className="text-red-500">{error?.message || uperror?.message}</p>
    );
  }

  if (loading || updating || gLoading) {
    return <Spinner></Spinner>
  }
  

  

  console.log(imgUrl);

  return (
    <div>
      <div className="flex h-screen justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Sign in</h2>
            <hr />
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  {/* name */}
                  <label className="label">
                    <span className="label-text-alt">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="your name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "name is required",
                      },
                    })}
                  />
                  
                  {/* email */}
                  <label className="label">
                    <span className="label-text-alt">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your email"
                    className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "email is required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-700">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-700">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                  {/* passsword */}

                  <label className="label">
                    <span className="label-text-alt">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="your password"
                    className="input input-bordered w-full max-w-xs"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "password is required",
                      },
                      minLength: {
                        value: 6,
                        message: "must be 6 chareter",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-700">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-700">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>
                {errorMessage}
                <div className="text-center mt-4">
                  <input
                    className="btn btn-primary w-full"
                    type="submit"
                    value="Sign up"
                  />
                </div>
                
              </form>
              <div class="divider">OR</div>
                <button onClick={()=>signInWithGoogle()}class="btn btn-success"><img style={{height:'30px',width:'30px',borderRadius:'50%', padding:'2px'}} src={Google}/> Signin with Google</button>
                <p className='text-center'>Already have an account? then go to<Link className="p-3" style={{ textDecoration: 'none' }} to="/Login">Login</Link></p>
            </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Ragister;