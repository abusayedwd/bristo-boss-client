import { useState } from 'react';
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../../Hooks/UseMenu';
import Ordertab from '../Ordertab/Ordertab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
 

const Order = () => {
        const categoris = ['dessert', 'salad', 'soup', 'pizza', 'drinks']
        const {category} = useParams();
       
        const initialIndex = categoris.indexOf(category)

         
        const [menu] = UseMenu();
       
        const drinks = menu.filter(item => item.category === 'drinks')
        const pizza = menu.filter(item => item.category === 'pizza')
        const dessert = menu.filter(item => item.category === 'dessert')
        const salad = menu.filter(item => item.category === 'salad')
        const soup = menu.filter(item => item.category === 'soup')

        const [index, setIndex] = useState(initialIndex)
        return (
                <div>
                         <Helmet>
        <title>Bristo Boss | Order Food</title>

           </Helmet>
                        <Cover img={orderImg} title='order food'></Cover>
                        <h1 className='mt-12 text-3xl text-blue-400 font-bold text-center mb-4'>Category By Food</h1>

                        <Tabs defaultIndex={index} onSelect={(index) => setIndex(index)}>
                                <TabList>
                                        <Tab>Dessert</Tab>
                                        <Tab>Salad</Tab>
                                        <Tab>Soup</Tab>
                                        <Tab>Pizza</Tab>
                                        <Tab>drinks</Tab>
                                         
                                </TabList>
                                <TabPanel>
                                <Ordertab items = {dessert}></Ordertab>
                                </TabPanel>
                                <TabPanel>
                                <Ordertab items = {salad}></Ordertab>
                                </TabPanel>
                                <TabPanel>
                                <Ordertab items = {soup}></Ordertab>
                                </TabPanel>
                                <TabPanel>
                                <Ordertab items = {pizza}></Ordertab>
                                </TabPanel>
                                <TabPanel>
                                <Ordertab items = {drinks}></Ordertab>
                                </TabPanel>
                                
                        </Tabs>
                </div>
        );
};

export default Order;