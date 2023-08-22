import React from 'react';
import Nabvar from '../../components/Nabvar/Nabvar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Nabvar></Nabvar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;