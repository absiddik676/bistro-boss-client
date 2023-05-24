import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from '../../../assets/image/home/slide1.jpg'
import slide2 from '../../../assets/image/home/slide2.jpg'
import slide3 from '../../../assets/image/home/slide3.jpg'
import slide4 from '../../../assets/image/home/slide4.jpg'
import slide5 from '../../../assets/image/home/slide5.jpg'
import SectionTitle from '../../../cmponents/SectionTitle/SectionTitle';

const Categroy = () => {
    return (
        <div>
            <SectionTitle
            subHeading={'---From 11:00am to 10:00pm---'}
            heading={'ORDER ONLINE'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide >
                    <img src={slide1} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Sups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Dessrts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Categroy;