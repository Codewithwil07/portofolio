import React from 'react';
import Button from '../../element/Button/Button';
import GmailComponenet from './GmailComponenet';
const ContactDetail = () => {
    return (
        <div className='flex flex-col gap-y-10 py-20 px-5' id='card'>
            <div className='flex flex-col gap-y-10 py-20'>
                <h1 className='text-3xl font-bold w-full text-black md:text-4xl'>
                    Lets talk about your projects.
                </h1>
                <p className='text-xl md:text-2xl text-gray-800'>
                    fill the form and send in your queries, i can respond as
                    soon as i can. alternatively, you can reach out to at my
                    email addres.
                </p>
                <GmailComponenet />
            </div>
        </div>
    );
};

export default ContactDetail;
