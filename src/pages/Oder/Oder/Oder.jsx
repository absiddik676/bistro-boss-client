import React, { useState } from 'react';
import oderImg from '../../../assets/image/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../cmponents/FoodCard/FoodCard';
import OderTab from '../OderTab/OderTab';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
const Oder = () => {
    const categories = ['salad','pizza','soup','dessert','drink','offered']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex,setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')
    const offered = menu.filter(item => item.category === 'offered')
   
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Oder Food</title>
            </Helmet>
            <Cover img={oderImg} title={'OUR SHOP'} subTitle={'Would you like to try a dish?'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drink</Tab>
                    <Tab>Offered</Tab>
                </TabList>
                <TabPanel>
                  <OderTab items={salad}></OderTab>
                </TabPanel>
                <TabPanel>
                <OderTab items={pizza}></OderTab>
                </TabPanel>
                <TabPanel>
                <OderTab items={dessert}></OderTab>
                </TabPanel>
                <TabPanel>
                <OderTab items={soup}></OderTab>
                </TabPanel>
                <TabPanel>
                <OderTab items={drinks}></OderTab>
                </TabPanel>
                <TabPanel>
                <OderTab items={offered}></OderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Oder;