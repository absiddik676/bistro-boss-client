import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const formLocation = location.state?.form?.pathname || '/';
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(formLocation, { replace: true });   
                    })

            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="divider"></div>
            <button onClick={handleGoogleSignIn} className="  px-4 py-2 space-x-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
                <div className='flex justify-center items-center'>
                    <FaGoogle className="w-5 h-5 text-red-500" />
                    <span className="text-sm font-medium text-gray-700">Sign in with Google</span>
                </div>
            </button>
        </div>
    );
};

export default SocialLogin;