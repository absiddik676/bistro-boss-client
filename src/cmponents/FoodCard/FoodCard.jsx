import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const FoodCard = ({item}) => {
    const {user} = useContext(AuthContext)
    const {image,price,name,recipe,_id} = item
    const navigate = useNavigate()
    const location = useLocation()
    const [,refetch] = useCart()

    const handelAddToCart = item =>{
        console.log(item);
        if(user && user.email){
            const cartItem = {
            menuItemId:_id,
            name,
            image,
            price,
            email:user.email
            }
            fetch('http://localhost:5000/carts',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(cartItem)

            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.insertedId){
                    refetch() // refetch the navbar item number
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food added in the cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to oder the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login',{state:{form:location}})
                }
              })
        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                    <p className='bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4'>${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title text-center">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                    <button onClick={()=>handelAddToCart(item)} className="btn btn-primary bg-[#e8e8e800] text-black border-0 border-b-2 border-black hover:bg-black hover:border-black hover:text-white" >Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;