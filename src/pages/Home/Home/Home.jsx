import React from 'react';
import Banner from '../Banner/Banner';
import Categroy from '../Categroy/Categroy';
import About from '../About/About';
import PopularMenu from '../PopularMenu/PopularMenu';
import Call from '../Call/Call';
import Chef from '../Chef/Chef';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Categroy/>
            <About/>
            <PopularMenu/>
            <Call/>
            <Chef/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;