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
    const drinks = menu.filter(item => item.category === 'drinks')
    console.log(menu);
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
           <Cover  img={manuImg}  title={'OUR MENU'} subTitle={'Would you like to try a dish? '}></Cover>

            {/* offererd */}
            <MenuCategroy  img={dessertImg} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} title={'offered'} items={offered}></MenuCategroy>

            {/* desserts menu */}
            <MenuCategroy
            title={'dessert'}
            subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            img={dessertImg}
            items={dessert}
            >
            </MenuCategroy>
            {/* pizz */}
            <MenuCategroy
            title={'pizza'}
            subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            img={pizzaImg}
            items={pizza}
            >
            </MenuCategroy>
            {/* SALADS */}
            <MenuCategroy
            title={'salad'}
            subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            img={saladImg}
            items={salad}
            >
            </MenuCategroy>
            {/* SOUPS */}
            <MenuCategroy
            title={'soup'}
            subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            img={soupImg}
            items={soup}
            >
            </MenuCategroy>
            <MenuCategroy
            title={'drink'}
            subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            img={soupImg}
            items={drinks}
            >
            </MenuCategroy>
        </div>
    );
};

export default Menu;