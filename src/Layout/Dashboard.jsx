import React from 'react';
import { NavLink , Outlet } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineCalendar, AiOutlineHome, AiOutlineMenu  } from 'react-icons/ai';
import { BiWallet, BiCart } from 'react-icons/bi';
import useCart from '../hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart()
    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full ">
                    {/* Sidebar content here */}
                    <li><NavLink to='/dashboard/home'><AiOutlineHome size={24} />User Home</NavLink ></li>
                    <li><NavLink to='/dashboard/history'><BiWallet size={24} />Payment History</NavLink ></li>
                    <li><NavLink  to='/dashboard/reservation'><AiOutlineCalendar size={24} />Reservation</NavLink ></li>
                    <li><NavLink  to='/dashboard/mycart'><AiOutlineShoppingCart size={24} />My cart  <span className="badge badge-secondary">+{cart? cart.length : '0'}</span></NavLink > </li>
                    <div className="divider"></div>
                    <li><NavLink  to='/'><AiOutlineHome size={24} /> Home</NavLink ></li>
                    <li><NavLink  to='/menu'> <AiOutlineMenu size={24} />Our Menu</NavLink ></li>
                    <li><NavLink  to='/oder/salad'><BiCart size={24} />Oder</NavLink ></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;