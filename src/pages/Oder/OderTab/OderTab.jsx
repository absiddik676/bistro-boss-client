import React from 'react';
import FoodCard from '../../../cmponents/FoodCard/FoodCard';

const OderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-11'>
        {
            items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
        }
        </div>
    );
};

export default OderTab;