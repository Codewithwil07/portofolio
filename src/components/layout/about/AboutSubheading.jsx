import React from 'react';

const AboutSubheading = () => {
  return (
    <div className='flex flex-col md:flex md:flex-row md:items-center px-5 py-20'>
      <div className='w-[90%] md:w-[90%]'>
        <h1 className='font-bold text-2xl md:text-3xl'>
          I believe in writing clean, maintainable code and following best
          practices in software development.
        </h1>
        <p className='pt-8 text-2xl md:text-3xl'>
          My approach to development is collaborative, even when working alone,
          as I value feedback and continuous improvement. I am always eager to
          learn new technologies and stay updated with the latest industry
          trends.
        </p>
      </div>
    </div>
  );
};

export default AboutSubheading;
