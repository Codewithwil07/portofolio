/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import Button from '../../element/Button/Button';
import SocialMediaComponent from './SocialMediaComponent';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const GmailComponenet = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_tbs6f37',
                'template_fmplxj1',
                form.current,
                '0mIW8ROK5sMCJl7uc'
            )
            .then(
                (result) => {
                    alert('Email terkirim', result);
                },
                (error) => {
                    alert('Email gagal terkirim', error);
                }
            );
        e.target.reset();
    };

    return (
        <div className='flex flex-col gap-y-5 gap-x-10 md:w-full md:flex md:flex-row md:items-center md:justify-start'>
            <form className='md:w-[50%] flex flex-col gap-y-5 text-lg md:text-xl' ref={form} onSubmit={sendEmail}>
                <div className='flex flex-col gap-y-2'>
                    <label for='name'>Name</label>
                    <input
                        type='text'
                        name='user_name'
                        className='rounded-lg h-10 p-2 bg-white'
                        required
                    />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label for='email'>Email</label>
                    <input
                        type='email'
                        name='user_email'
                        className='rounded-lg h-10 p-2'
                        required
                    />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label for='message'>Message</label>
                    <textarea
                        className='resize-none overflow-y-scroll rounded-lg p-2'
                        rows={'5'}
                        maxLength={'1000'}
                        name='message'
                        required
                    />
                    <Button.Normal
                        color={'white'}
                        position={'start'}
                        variant={'mt-20 self-start rounded-lg self-start'}
                        type='submit'
                        value='send'
                    >
                        Send
                    </Button.Normal>
                </div>
            </form>
            <SocialMediaComponent />
        </div>
    );
};

export default GmailComponenet;
