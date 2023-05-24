import React from 'react';
import SectionTitle from '../../../cmponents/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/image/home/featured.jpg'
const Featured = () => {
    return (
        <div style={{ backgroundImage:`url(${featuredImg})` }} className='bg-no-repeat bg-fixed bg-black bg-cover text-white'>
            <div className='bg-black bg-opacity-50 '>
            <SectionTitle 
            heading={'FROM OUR MENU'}
            subHeading={'---Check it out---'}
            ></SectionTitle>
            <div className='md:flex justify-center  items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-primary bg-[#e8e8e800] border-0 border-b-2 border-white text-white hover:bg-black hover:border-white" >Oder now</button>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Featured;