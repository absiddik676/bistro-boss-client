import React from 'react';
import SectionTitle from '../../../cmponents/SectionTitle/SectionTitle';
import img from '../../../assets/image/home/slide5.jpg'
const Chef = () => {
    return (
        <div>
            <SectionTitle
                heading={'CHEF RECOMMENDS'}
                subHeading={'---Should Try---'}
            ></SectionTitle>
            <div className='grid grid-cols-3 gap-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure >
                        <img src={img} alt="Shoes" className="rounded-xl w-full h-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary bg-[#E8E8E8] text-yellow-600 border-0 border-b-2 border-yellow-500 hover:bg-black hover:border-yellow-500" >add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure >
                        <img src={img} alt="Shoes" className="rounded-xl w-full h-64 " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary bg-[#E8E8E8] text-yellow-600 border-0 border-b-2 border-yellow-500 hover:bg-black hover:border-yellow-500" >add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure >
                        <img src={img} alt="Shoes" className="rounded-xl w-full h-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary bg-[#E8E8E8] text-yellow-600 border-0 border-b-2 border-yellow-500 hover:bg-black hover:border-yellow-500" >add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;