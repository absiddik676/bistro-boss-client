import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BiTrash } from 'react-icons/bi';
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const MyCart = () => {
    const [cart,refetch] = useCart()
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0)
    const handelDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <div className='ml-5'>
            <Helmet>
                <title>Bistro Boss | My cart </title>
            </Helmet>

            <div className='md:w-4/12 my-8 mx-auto text-center'>
                <p className='text-yellow-500 mb-3'>---My Cart---</p>
                <h1 className='text-3xl uppercase border-y-4 py-4'>WANNA ADD MORE?</h1>
            </div>

            <div className='flex justify-between h-10  uppercase items-center'>
                <h1 className='text-3xl '>Total Items: {cart.length}</h1>
                <h1 className='text-3xl '>Total Price: $ {totalPrice.toFixed(2)}</h1>
                <Link to='/dashboard/pay'><button className="btn btn-warning">Pay</button></Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>#</th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th className='text-end'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            cart.map((row, index) =>
                                <tr key={row._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={row.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h1>{row.name}</h1>
                                    </td>
                                    <td>${row.price}</td>
                                    <th className='text-end'>
                                        <button onClick={() => handelDelete(row._id)} className="btn btn-error"><BiTrash size={24} className='text-white' /></button>
                                    </th>
                                </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyCart;