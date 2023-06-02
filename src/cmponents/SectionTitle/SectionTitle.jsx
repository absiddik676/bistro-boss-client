import React from 'react';

const SectionTitle = ({heading ,subHeading}) => {
    return (
        <div className='md:w-4/12 my-8 mx-auto text-center'>
            <p className='text-yellow-500 mb-3'>{subHeading}</p>
            <h1 className='text-4xl uppercase border-y-4 py-4 '>{heading}</h1>
        </div>
    );
};

export default SectionTitle;