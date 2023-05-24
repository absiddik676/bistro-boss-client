import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../cmponents/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const  [menu,setMenu] = useState([])
    useEffect(()=>{
        fetch('../../../../public/Menu/Menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter(item => item.category === 'popular')
            setMenu(popularItem)
        })
    },[])
    return (
        <div className='mb-12'>
            <SectionTitle
            heading={'FROM OUR MENU'}
            subHeading={'---Check it out---'}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='text-center mt-9'>
            <button className="btn btn-primary bg-[#e8e8e800] text-black border-0 border-b-2 border-black hover:bg-black hover:border-black hover:text-white" >View Full  Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;