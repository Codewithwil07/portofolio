import React from 'react';
import image from '../../../constant/image';
import HeaderPage from '../../fragment/HeaderPage';

const AboutDetail = () => {
    return (
        <div className='flex flex-col gap-y-5 relative py-20'>
            <HeaderPage.AboutHeader />
            <div className='flex flex-col md:flex md:flex-row pt-20 px-5' id='card'>
                <div className='px-3 flex flex-col py-20'>
                    <strong className='text-3xl font-extrabold pb-5 text-black md:text-4xl'>
                        Hello,
                    </strong>
                    <p className='text-start text-gray-500 text-lg pb-20 md:text-xl'>
                        My name is Willy Syahputra, you can call me Willy, i
                        focus on learning about web development especially using
                        javascript, with various frameworks such as Next.js and
                        others. when creating a website appearance, i prioritize
                        two things, user friendly and beautiful appearance. I am
                        a person of integrity, hard worker, structured and have
                        high curiosity about things.
                    </p>
                </div>
                <img src={image.Person} alt='' className='w-80 self-center relative bottom-10 md:bottom-5' />
            </div>
        </div>
    );
};

export default AboutDetail;
