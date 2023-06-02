import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import bgImg from '../../assets/image/others/authentication.png'
import sideImg from '../../assets/image/others/authentication2.png'
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import Spinner from '../Shared/Spinner/Spinner';

const Login = () => {
    const [disable, setDisable] = useState(true);

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const formLocation = location.state?.form?.pathname || '/';


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handelLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: 'User login successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(formLocation,{replace:true});
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handelValidateCatcher = (e) => {
        const captcha_value = e.target.value;
        if (validateCaptcha(captcha_value)) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login </title>
            </Helmet>
            <div>
                <div style={{ backgroundImage: `url(${bgImg})` }} className="hero min-h-screen ">
                    <div className="hero-content flex">
                        <div className="text-center md:w-1/2 lg:text-left">
                            <img src={sideImg} alt="" />
                        </div>
                        <div className="card md:w-1/2 max-w-sm bg-base-100">
                            <div className="card-body">
                                <form onSubmit={handelLogin} action="">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <LoadCanvasTemplate />
                                        </label>
                                        <input type="text" onBlur={handelValidateCatcher} name='catcher' placeholder="type the catcher" className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <input disabled={false} type="submit" className="btn btn-primary" value="Login" />
                                    </div>
                                </form>
                                <p><small>New here?</small> <Link to='/signUp'>Create a New Account</Link></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;