import React from 'react';
import { useState } from 'react';
import DarkLightMode from '../../../constant/Darkmode';
import ToggleMenu from './ToggleMenu';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
    // eslint-disable-next-line no-unused-vars
    const [isMenuOpen, setMenuOpen] = useState(false);
    function handleClik() {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <div className='flex justify-between items-center w-full'>
            <Link to={'/'} className='flex flex-col w-[11rem]'>
                <p className='font-extrabold text-start text-md md:text-xl cursor-pointer'>
                    Willy Syahputra
                </p>
                <p className='text-sm font-light md:text-sm'>
                    Frontend Developer
                </p>
            </Link>
            <ToggleMenu onClick={handleClik} />
            <div
                className={`${
                    isMenuOpen ? 'block' : 'hidden'
                } flex flex-col items-start pt-28 gap-x-10 px-2 py-2 backdrop-blur-2xl h-screen text-2xl z-[5] gap-y-3 absolute left-0 top-0 w-full text-gray-400 rounded-md md:text-base lg:static lg:h-auto lg:flex lg:items-center lg:pt-0 lg:text-black`}
            >
                <div
                    className='flex flex-col font-semibold gap-y-10 lg:flex md:text-base lg:flex-row lg:gap-x-10 lg:text-md'
                    id='header'
                >
                    <Link
                        href=''
                        to={'/about'}
                        className='px-2 rounded-sm bg-transparent'
                    >
                        About
                    </Link>
                    <Link
                        to={'/project'}
                        className='px-2 rounded-sm bg-transparent'
                    >
                        Project
                    </Link>
                    <Link
                        to={'/contact'}
                        className='px-2 rounded-sm bg-transparent'
                    >
                        Contact
                    </Link>
                </div>
            </div>
            <DarkLightMode
                hidden={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}
            />
        </div>
    );
}
