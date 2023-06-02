import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import bgImg from '../../assets/image/others/authentication.png'
import sideImg from '../../assets/image/others/authentication2.png'
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
const SignUp = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserProfile(data.name, data.photoURL)
                    .then(result => {
                        console.log(result);
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User create sucessfully ',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        reset()
                        navigate('/')
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
            })
    };
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign up </title>
            </Helmet>
            <div>
                <div style={{ backgroundImage: `url(${bgImg})` }} className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center w-1/2 lg:text-left">
                            <img src={sideImg} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)} action="">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                        {errors.name && <span className='mt-1 text-red-600'> Name is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                        {errors.photoURL && <span className='mt-1 text-red-600'> Photo URL is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                        {errors.email && <span className='mt-1 text-red-600'> Email is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })} placeholder="password" className="input input-bordered" />
                                        {errors.password?.type === 'required' && <p className='text-red-600'> Password is required </p>}
                                        {errors.password?.type === 'minLength' && <p className='text-red-600'> Password must be 6 character</p>}
                                        {errors.password?.type === 'maxLength' && <p className='text-red-600'> Password must less then 20 character</p>}
                                        {errors.password?.type === 'pattern' && <p className='text-red-600'> Password must have 1 uppercase , 1 lowercase , 1 spacial character and 1 number</p>}
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <input className='btn btn-primary' type="submit" value="Sign Up" />
                                    </div>
                                </form>
                                <p><small>Already registered?</small> <Link to='/login'>Go to log in</Link></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;