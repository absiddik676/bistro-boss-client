import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategroy = ({items,title,img,subTitle}) => {
    return (
        <div className='pt-8 mb-8'>
           {title &&  <Cover subTitle={subTitle} title={title} img={img}/>}
            <div className='grid md:grid-cols-2 gap-10 my-16'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
               
            </div>
            <div className='text-center'>
            <Link to={`/oder/${title}`}><button className="btn btn-primary bg-[#e8e8e800] text-black border-0 border-b-2 border-black hover:bg-black hover:border-black hover:text-white" >ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>
        </div>
    );
};

export default MenuCategroy;