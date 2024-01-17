import React from 'react';


const AboutSubheading = () => {
    return (
        <div className='flex flex-col md:flex md:flex-row md:items-center px-5 py-20'>
            <div className='w-[90%] md:w-[90%]'>
                <h1 className='font-bold text-2xl md:text-3xl'>
                    My Development stack is focused on performance &
                    accesibility with delightful interactions
                </h1>
                <p className='pt-8 text-2xl md:text-3xl'>
                    Apart from my main domain, i also like branding, icon design
                    and minimal illustrations. i am an enthusiast of digital
                    art, motion design, WebGL.
                </p>
            </div>
        </div>
    );
};

export default AboutSubheading;
