/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../element/Navbar/Navbar';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='w-full py-2 px-5'>
            <Navbar />
        </header>
    );
}
