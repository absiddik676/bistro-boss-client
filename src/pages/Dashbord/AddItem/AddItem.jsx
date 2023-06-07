import React from 'react';
import SectionTitle from '../../../cmponents/SectionTitle/SectionTitle';
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import Swal from 'sweetalert2';
const imageHostingToken = import.meta.env.VITE_Image_uplode_token
const AddItem = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`
    const [axiosSecure] = useAxiosSecure()

    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image',data.image[0])
    fetch(img_hosting_url,{
        method:'POST',
        body:formData
    })
    .then(res => res.json())
    .then(imgData =>{
        if(imgData.success){
            const imgURL = imgData.data.display_url
            const {name,price, category,recipe} = data;
            const menuItem = {name,price:parseFloat(price),category,recipe,image:imgURL}
            console.log(menuItem);
            axiosSecure.post('/menu',menuItem)
            .then(data => {
                console.log(data.data);
                if(data.data.acknowledged){
                    reset()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Menu item added successful',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
    })
    };
    return (
        <div className='p-10 '>
            <SectionTitle heading={'ADD AN ITEM'} subHeading={'---Whats new?---'}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text">Recipe name*</span>
                    </label>
                    <input type="text" placeholder="Recipe name"
                        {...register("name", { required: true , maxLength:120})}
                        className="input input-bordered w-full " />
                </div>
                <div className='flex gap-5'>
                    <div className='w-1/2'>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={'Pick One'} {...register("category", { required: true })} className="select select-bordered">
                                <option disabled >Pick One</option>
                                <option>pizza</option>
                                <option>salad</option>
                                <option>soup</option>
                                <option>drinks </option>
                                <option>dessert</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Price *</span>
                            </label>
                            <input type="number" placeholder="Pice "
                            {...register("price", { required: true })}
                             className="input input-bordered w-full" />
                        </div>
                    </div>
                </div>
                <div className="form-control my-4">
                    <label className="label">
                        <span className="label-text">Recipe Details* </span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Pick a file</span>
                    </label>
                    <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <input type="submit" className='btn btn-success mt-8' value="Add an Item" />
            </form>
        </div>
    );
};

export default AddItem;