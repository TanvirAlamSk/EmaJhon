import React from 'react';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Products></Products> */}
        </div>
    );
};

export default Main;