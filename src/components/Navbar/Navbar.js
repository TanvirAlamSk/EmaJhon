import React from 'react';
import logo from "../../images/Logo.svg"
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='header flex justify-between items-center px-16 py-2'>
            <div>
                <img src={logo}></img>
            </div>
            <div>
                <ul className='flex text-white text-sm'>
                    <li className='mr-6'><Link to="/">Order</Link></li>
                    <li className='mr-6'><Link to="/review-order">Order Review</Link></li>
                    <li className='mr-6'><Link to="/inventory">Manage Inventory</Link></li>
                    <li className='mr-6'><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;