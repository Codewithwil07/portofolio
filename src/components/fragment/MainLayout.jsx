/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../index.css';
import Bgsvg from '../../constant/Animate/Bgsvg';

const MainLayout = (props) => {
    const { children } = props;
    return (
        <div className='overflow-x-hidden font-figtree'>
            <Bgsvg />   
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;
