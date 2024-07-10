import React from 'react';
import Button from '../../element/Button/Button';
import { Link } from 'react-router-dom';

const Aboutme = () => {
  return (
    <section className='pt-20 px-5'>
      <div className='grid items-center md:grid-cols-aboutMd lg:grid-cols-aboutLg'>
        <div className='flex flex-col gap-y-5'>
          <h1 className='font-extrabold text-3xl md:text-4xl lg:text-4xl'>
            I'm a versatile proficient
          </h1>
          <p
            className='font-extrabold text-3xl md:text-4xl lg:text-4xl'
            id='darkModeTheme'
          >
            in both MERN Stack and
          </p>
          <p
            className='font-extrabold text-3xl md:text-4xl lg:text-4xl '
            id='darkModeTheme'
          >
            PERN Stack
          </p>
          <div className='flex flex-col max-w-xs md:max-w-screen-lg'>
            <p className='text-lg pb-5 md:text-xl'>
              With a passion for creating dynamic and scalable web applications,
              I have extensive experience in front-end and back-end development,
              ensuring a seamless user experience and robust functionality.
            </p>
            <Link
              className='flex justify-center md:justify-start md:self-start md:ml-16'
              to={'/about'}
            >
              <Button.Normal variant='rounded-lg' color={'white'}>
                About me
              </Button.Normal>
            </Link>
          </div>
        </div>
        <Button.Ractangle />
      </div>
    </section>
  );
};

export default Aboutme;
