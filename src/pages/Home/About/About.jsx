import React from 'react';
import bg from '../../../assets/image/home/chef-service.jpg'
const About = () => {
    return (
        <div style={{ backgroundImage:`url(${bg})` }} className=" w-full h-screen bg-fixed  bg-no-repeat flex justify-center items-center">
            <div className='w-11/12 bg-white p-32 bg-cover text-center'>
            <h1 className='text-4xl mb-3'>Bistro Boss</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            
            </div>
            
        </div>
    );
};

export default About;