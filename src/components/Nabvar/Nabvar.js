import React from 'react';
import logo from "../../images/Logo.svg"
import { Link } from "react-router-dom";

const Nabvar = () => {
    return (
        <div className="navbar bg-slate-800">
            <div className="navbar-start">
                <Link to="" className="btn btn-ghost normal-case text-xl">
                    <img src={logo}></img>
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/" className='text-white'>Home</Link></li>
                    <li ><Link to="/order" className='text-white'>Order</Link></li>
                    <li><Link to="/inventory" className='text-white'>Manage Inventory</Link></li>
                    <li><Link to="/login" className='text-white'>Login</Link></li>
                </ul>
            </div>
            <div className='navbar-end lg:hidden  '>
                <div className="dropdown w-32 right-0">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-right h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box mr-20 ">
                        <li><Link to="/" className='text-left'>Home</Link></li>
                        <li><Link to="/order" className='text-left'>Order</Link></li>
                        <li><Link to="/inventory" className='text-left'>Manage Inventory</Link></li>
                        <li><Link to="/login" className='text-left'>Login</Link></li>
                    </ul>
                </div>
            </div>

        </div >
    );
};

export default Nabvar;