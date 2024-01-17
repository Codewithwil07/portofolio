/* eslint-disable no-unused-vars */
import React from 'react';
import image from '../../../constant/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skill = () => {
    const [item, inView] = useInView({
        triggerOnce: true,
    });

    const ContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const ChildrenVariants = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 100,
        },
    };

    return (
        <motion.div
            className='grid grid-cols-2 gap-x-10 gap-y-5 py-16 md:grid-cols-3 xl:grid-cols-4'
            variants={ContainerVariants}
            ref={item}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
        >
            <motion.div variants={ChildrenVariants}>
                <img src={image.Html} className=' w-10 pb-1' alt='Image-Icon' />
                <p className='text-gray-400 text-sm md:text-base'>
                    <span
                        className='font-extrabold text-xl text-black'
                        id='skill-header'
                    >
                        HTML
                    </span>
                    <br />
                    Hypertext Markup Language is the standard markup language
                    for documents designed to be displayed in internet browsers
                </p>
            </motion.div>
            <motion.div variants={ChildrenVariants}>
                <img src={image.CSS} alt='Image-Icon' className='w-10 pb-1' />
                <p className='text-gray-400 text-sm md:text-base'>
                    <span
                        className='font-extrabold text-xl text-black'
                        id='skill-header'
                    >
                        CSS
                    </span>
                    <br />
                    Cascading Style Sheets are Sheets rules form managing
                    several componenets in a web so that it will be more
                    structured and uniform
                </p>
            </motion.div>
            <motion.div variants={ChildrenVariants}>
                <img src={image.Js} alt='Image-Icon' className='w-10 pb-1' />
                <p className='text-gray-400 text-sm md:text-base'>
                    <span
                        className='font-extrabold text-xl text-black'
                        id='skill-header'
                    >
                        Javascript
                    </span>
                    <br />
                    Javascript is a high-level end dynamic programming language
                </p>
            </motion.div>
            <motion.div variants={ChildrenVariants}>
                <img
                    src={image.Tailwind}
                    alt='Image-Icon'
                    className='w-10 pb-2'
                />
                <span
                    className='font-extrabold text-xl text-black'
                    id='skill-header'
                >
                    TailwindCSS
                </span>
                <br />
                <p className='text-gray-400 text-sm md:text-base'>
                    A utulity-first CSS frameworks packed with classes like
                    flex, pt-8, text-center, and rotate-45 than can be composed
                    to build any design, directly in your markup
                </p>
            </motion.div>
            <motion.div variants={ChildrenVariants}>
                <img src={image.Typ} alt='Image-Icon' className='w-10 pb-2' />
                <p className='text-gray-400 text-sm md:text-base'>
                    <span
                        className='font-extrabold text-xl text-black'
                        id='skill-header'
                    >
                        Typescript
                    </span>
                    <br />
                    Typescript is a strongly typed programming language thats
                    build on Javascript, giving you better tooling at any scale
                </p>
            </motion.div>
            <motion.div variants={ChildrenVariants}>
                <img src={image.SCSS} alt='Image-Icon' className='w-10 pb-1' />
                <p className='text-gray-400 text-sm md:text-base'>
                    <span
                        className='font-extrabold text-xl text-black'
                        id='skill-header'
                    >
                        Sass
                    </span>{' '}
                    <br />
                    Sass is the most mature, stable, and powerful professional
                    grade CSS extension language in the world
                </p>
            </motion.div>
            <motion.div variants={ChildrenVariants}>
                <img src={image.React} alt='Image-Icon' className='w-10 pb-1' />
                <p className='text-gray-400 text-sm md:text-base'>
                    <span
                        className='font-extrabold text-xl text-black'
                        id='skill-header'
                    >
                        React
                    </span>{' '}
                    <br />
                    React is a javascript library used to build component-based
                    interactive user interfaces
                </p>
            </motion.div>
            <motion.div variants={ChildrenVariants}>
                <img src={image.Node} alt='Image-Icon' className='w-10 pb-1' />
                <p className='text-gray-400 text-sm md:text-base'>
                    <span
                        className='font-extrabold text-xl text-black'
                        id='skill-header'
                    >
                        Node
                    </span>{' '}
                    <br />
                    Node.js is a runtime environment for Javascript that is
                    open-source and cross platform
                </p>
            </motion.div>
            <motion.div variants={ChildrenVariants}>
                <img
                    src={image.Nextjs}
                    alt='Image-Icon'
                    className='w-10 pb-1'
                />
                <p className='text-gray-400 text-sm md:text-base'>
                    <span
                        className='font-extrabold text-xl text-black'
                        id='skill-header'
                    >
                        Next
                    </span>{' '}
                    <br />
                    Next.js is a popular open-source React framework for
                    building web applications. it allow developers to build
                    modern, server-render React applications with ease
                </p>
            </motion.div>
        </motion.div>
    );
};

export default Skill;
