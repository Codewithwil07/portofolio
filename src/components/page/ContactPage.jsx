/* eslint-disable react/no-unknown-property */
import React from 'react';
import HeaderPage from '../fragment/HeaderPage';
import MainLayout from '../fragment/MainLayout';
import Button from '../element/Button/Button';
import ContactDetail from '../layout/contact/ContactDetail';

function Contact() {
    return (
        <MainLayout>
            <section className='grid grid-rows-contactSm md:grid-rows-contacttMd gap-y-5'>
                <HeaderPage.ContactHeader />
                <ContactDetail />
            </section>
        </MainLayout>
    );
}

export default Contact;
