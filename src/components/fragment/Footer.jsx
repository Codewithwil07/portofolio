import React from 'react';
import Hero from '../layout/home/Hero';
import { image } from '../../constant';

const Footer = () => {
    return (
        <div className='py-5 bg-fifth pt-10 flex flex-col gap-y-2'>
            <div className='flex justify-center items-center gap-x-2'>
                <p className='font-extrabold text-white text-sm'>MADE WITH</p>
                <div className='flex gap-x-1'>
                    <img src={image.React} alt='' className='w-5 md:w-8' />
                    <img src={image.Tailwind} alt='' className='w-5 md:w-8' />
                </div>
            </div>
            <div className='text-center'>
                <p className='text-white text-sm'>
                    Made by <span className='font-bold'>Willy Syahputra.</span>{' '}
                    All Right reserverd.
                </p>
            </div>
        </div>
    );
};

export default Footer;
