import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import manuImg from '../.../../../../assets/image/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../cmponents/SectionTitle/SectionTitle';
import MenuCategroy from '../MenuCategroy/MenuCategroy';
import dessertImg from '../../../assets/image/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/image/menu/pizza-bg.jpg'
import saladImg from '../../../assets/image/menu/salad-bg.jpg'
import soupImg from '../../../assets/image/menu/soup-bg.jpg'
const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
           <Cover img={manuImg}  title={'OUR MENU'} subTitle={'Would you like to try a dish? '}></Cover>

            {/* offererd */}
            <SectionTitle subHeading={'---Dont miss---'} heading={'TODAYS OFFER'}></SectionTitle>
            <MenuCategroy items={offered}></MenuCategroy>

            {/* desserts menu */}
            <MenuCategroy
            title={'DESSERTS'}
            subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            img={dessertImg}
            items={dessert}
            >
            </MenuCategroy>
            {/* pizz */}
            <MenuCategroy
            title={'PIZZA'}
            subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            img={pizzaImg}
            items={pizza}
            >
            </MenuCategroy>
            {/* SALADS */}
            <MenuCategroy
            title={'SALADS'}
            subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            img={saladImg}
            items={salad}
            >
            </MenuCategroy>
            {/* SOUPS */}
            <MenuCategroy
            title={'SOUPS'}
            subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            img={soupImg}
            items={salad}
            >
            </MenuCategroy>
        </div>
    );
};

export default Menu;