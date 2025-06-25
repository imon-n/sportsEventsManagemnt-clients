import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import TitleUpdater from '../components/common/TitleUpdater';

const MainLayout = () => {
    return (
        <div>
            <TitleUpdater></TitleUpdater>
            <Navbar/>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;