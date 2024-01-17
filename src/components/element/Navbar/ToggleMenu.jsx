/* eslint-disable react/prop-types */
import React from 'react';
import '../../../index.css';

const ToggleMenu = ({onClick}) => {
    return (
        <div onClick={onClick}
            className='flex justify-end flex-col items-end gap-y-1 z-10 lg:hidden'
            id='menu-toggle'
        >
            <input
                type='checkbox'
                className='absolute w-10 h-10 top-2 -right-1 cursor-pointer z-10 opacity-0'
                id='checkbox'
            />
            <span
                className='w-[23px] h-[3px]  bg-black  rounded-full
                ' 
                id='elementToggle'
            ></span>
            <span
                className='w-[23px] h-[3px]  bg-black  rounded-full
                '
                id='elementToggle'
            ></span>
            <span
                className='w-[23px] h-[3px]  bg-black  rounded-full
                '
                id='elementToggle'
            ></span>
        </div>
    );
};

export default ToggleMenu;
