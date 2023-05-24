import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../cmponents/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('../../../../public/Reviews/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-20'>
            <SectionTitle
                heading={'TESTIMONIALS'}
                subHeading={'---What Our Clients Say---'}
            ></SectionTitle>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='mx-24 flex flex-col items-center my-16 '>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                            />
                            <FaQuoteLeft className='text-6xl mt-6 '/>
                            <p className='my-8'>{review.details}</p>
                            <h3 className='text-2xl text-orange-400'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;