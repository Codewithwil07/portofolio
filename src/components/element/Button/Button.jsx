/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { image } from '../../../constant';
import '../../../index.css';
import Text from '../../../constant/textDecoration/Text';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function Button({ children }) {
    return <>{children}</>;
}

const Rounded = () => {
    return (
        <div className='w-full flex flex-col bottom-10 gap-y-16 relative md:bottom-48'>
            <div className='w-full flex justify-center gap-x-10 top-10   relative md:top-36 md:gap-x-96 lg:gap-x-[500px]'>
                <a
                    href=''
                    className='relative flex justify-center items-center'
                    id='putar'
                >
                    <img
                        src={image.github}
                        alt=''
                        className='w-32 h-32 p-10  bg-primary rounded-full'
                    />
                    <Text.Github />
                </a>
                <a
                    href=''
                    className=' relative flex justify-center items-center'
                    id='putar'
                >
                    <img
                        src={image.Tiktok}
                        alt=''
                        className='w-32 h-32 p-10  bg-secondary  rounded-full'
                    />
                    <Text.Gmail />
                </a>
            </div>
            <div className='flex justify-center gap-x-10 md:gap-x-12 lg:gap-x-28'>
                <a
                    href=''
                    className=' relative flex justify-center items-center  '
                    id='putar'
                >
                    <img
                        src={image.Ig}
                        alt=''
                        className='w-32 h-32 p-10  bg-third rounded-full'
                    />
                    <Text.Ig />
                </a>
                <a
                    href=''
                    className=' relative flex justify-center items-center'
                    id='putar'
                >
                    <img
                        src={image.Linkedin}
                        alt=''
                        className='w-32 h-32 p-10 bg-fourth rounded-full'
                    />
                    <Text.Linkedin />
                </a>
            </div>
        </div>
    );
};

const Ractangle = () => {
    return (
        <div className='relative  right-20 md:right-10 xl:left-20'>
            <motion.a
                href=''
                className=' bg-sky-900 px-2 py-2 rounded-lg mt-10 ml-[24rem] w-20 h-20 flex justify-center lg:w-28 lg:h-28 md:ml-[25rem] lg:ml-[32rem]'
                animate={{ rotate: [0, 180, 360, 0 - 180, -360] }}
                transition={{
                    duration: 4,
                    ease: 'linear',
                    repeat: Infinity,
                }}
            >
                <img src={image.React} alt='' className='w-14 md:w-32' />
            </motion.a>
            <motion.a
                href=''
                className='bg-black px-2 py-2 rounded-lg -mt-10 ml-[18rem] w-16 h-16 flex justify-center lg:w-20 lg:h-20 md:ml-[19rem] lg:ml-[25rem]'
                animate={{
                    rotate: [0, 90, 180, 360, 0, -90, -180, -360],
                    borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                <img src={image.Figma} alt='' className='w-7 md:w-10' />
            </motion.a>
            <motion.a
                href=''
                className=' px-2 py-2 rounded-lg  mt-5 ml-[15rem] w-28 h-28 flex justify-center lg:w-36 lg:h-36 md:ml-[16rem] lg:ml-[20rem]'
                animate={{
                    borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                    backgroundColor: [
                        'rgb(186, 230, 253)',
                        'rgb(59, 130, 246)',
                    ],
                }}
                transition={{
                    duration: 7,
                    ease: 'linear',
                    repeat: Infinity,
                }}
            >
                <img src={image.Visual} alt='' className='w-14 md:w-20' />
            </motion.a>
            <motion.a
                href=''
                className=' bg-purple-900 px-2 py-2 rounded-lg  -mt-28 ml-[24rem]  w-14 h-14 flex justify-center lg::w-20 lg::h-20 md:-mt-28 md:ml-[25rem] lg:ml-[32rem]'
                animate={{
                    borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                    x: [0, 30, 0, -30],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                <img src={image.Tailwind} alt='' className='w-7 md:w-10' />
            </motion.a>
            <motion.div
                href=''
                className='bg-yellow-500 px-2 py-2 rounded-lg -mt-14 ml-[28.5rem]  w-20 h-20 flex justify-center lg::w-24 lg::h-24 lg:ml-[39rem] md:-mt-20 md:ml-[32rem] lg:-mt-20'
                initial={{ rotate: 0 }}
                animate={{ rotate: -180 }}
                transition={{
                    duration: 1,
                    ease: 'linear',
                    repeat: Infinity,
                    type: 'spring',
                }}
            >
                <img src={image.Html} alt='' className='w-10 md:w-10' />
            </motion.div>
            <motion.a
                href=''
                className=' bg-green-900 px-2 py-2 rounded-lg  mt-10 ml-[21rem] w-14 h-14 flex justify-center lg:w-20 lg:h-20 md:ml-[22rem] lg:ml-[26rem] md:mt-16 lg:mt-16'
                animate={{ y: [0, 30, 20, 0, 20, 30], x: [20, -20, 20, -20] }}
                transition={{ duration: 5, repeat: Infinity }}
            >
                <img src={image.Mongodb} alt='' className='w-10 md:w-16' />
            </motion.a>
            <motion.a
                href=''
                className=' bg-purple-300 px-2 py-2 rounded-lg  -mt-20 ml-[26rem] w-16 h-16 flex justify-center lg:w-24 lg:h-24 md:ml-[28rem] md:-mt-18 lg:ml-[35rem] lg:-mt-24'
                animate={{
                    scale: [1, 1.1, 1.2, 1],
                    backgroundColor: [
                        'rgb(216, 180, 254)',
                        'rgb(59, 130, 246)',
                    ],
                }}
                transition={{ duration: 6, repeat: Infinity }}
            >
                <img src={image.Bootstrap} alt='' className='w-10' />
            </motion.a>
        </div>
    );
};

const Normal = ({ children, variant, color }) => {
    return (
        <button
            className={`bg-blue-600 py-2 px-12 text-xl font-bold shadow-md text-${color} cursor-pointer ${variant} border-1 border-blue-600`}
        >
            {children}
        </button>
    );
};

const RoundedV2 = ({ size }) => {
    return (
        <div className='flex justify-center gap-x-10 pt-5'>
            <div className='flex flex-col gap-y-3'>
                <div className='flex justify-center'>
                    <div className={`rounded-full bg-primary  ${size}`} />
                </div>
                <div className={`rounded-full bg-secondary ${size}`} />
                <div className={`rounded-full bg-third ${size}`} />
            </div>
            <div className='flex flex-col gap-y-3 pt-10'>
                <div className={`rounded-full bg-third ${size}`} />
                <div className={`rounded-full bg-secondary ${size}`} />
                <div className={`rounded-full bg-primary ${size}`} />
            </div>
        </div>
    );
};

const RoundedV3 = () => {
    const controlS = useAnimation();
    const controlK = useAnimation();
    const controlI = useAnimation();
    const controlL = useAnimation();
    const controlLl = useAnimation();
    const controlSI = useAnimation();

    useEffect(() => {
        const svgVariants = async () => {
            while (true) {
                await controlS.start({
                    scaleX: 1,
                    scaleY: 1,
                    transition: {
                        duration: 1,
                        ease: 'easeInOut',
                        type: 'spring',
                    },
                });
                await controlS.start({
                    scaleX: 1.1,
                    scaleY: 1.1,
                });
            }
        };
        svgVariants();
        return () => controlS.stop();
    }, [controlS]);
    useEffect(() => {
        const svgVariants = async () => {
            while (true) {
                await controlK.start({
                    scaleX: 1,
                    scaleY: 1,
                    transition: {
                        duration: 2,
                        ease: 'easeInOut',
                        type: 'spring',
                    },
                });
                await controlK.start({
                    scaleX: 1.1,
                    scaleY: 1.1,
                });
            }
        };
        svgVariants();
        return () => controlK.stop();
    }, [controlK]);
    useEffect(() => {
        const svgVariants = async () => {
            while (true) {
                await controlI.start({
                    scaleX: 1,
                    scaleY: 1,
                    transition: {
                        duration: 1,
                        ease: 'easeInOut',
                        type: 'spring',
                    },
                });
                await controlI.start({
                    scaleX: 1.1,
                    scaleY: 1.1,
                });
            }
        };
        svgVariants();
        return () => controlI.stop();
    }, [controlI]);
    useEffect(() => {
        const svgVariants = async () => {
            while (true) {
                await controlL.start({
                    scaleX: 1,
                    scaleY: 1,
                    transition: {
                        duration: 2,
                        ease: 'easeInOut',
                        type: 'spring',
                    },
                });
                await controlL.start({
                    scaleX: 1.1,
                    scaleY: 1.1,
                });
            }
        };
        svgVariants();
        return () => controlL.stop();
    }, [controlL]);
    useEffect(() => {
        const svgVariants = async () => {
            while (true) {
                await controlLl.start({
                    scaleX: 1,
                    scaleY: 1,
                    transition: {
                        duration: 3,
                        ease: 'easeInOut',
                        type: 'spring',
                    },
                });
                await controlLl.start({
                    scaleX: 1.1,
                    scaleY: 1.1,
                });
            }
        };
        svgVariants();
        return () => controlLl.stop();
    }, [controlLl]);
    useEffect(() => {
        const svgVariants = async () => {
            while (true) {
                await controlSI.start({
                    scaleX: 1,
                    scaleY: 1,
                    transition: {
                        duration: 1,
                        ease: 'easeInOut',
                        type: 'spring',
                    },
                });
                await controlSI.start({
                    scaleX: 1.1,
                    scaleY: 1.1,
                    animationDelay: 11,
                });
            }
        };
        svgVariants();
        return () => controlSI.stop();
    }, [controlSI]);

    return (
        <div className='flex gap-x-3 items-end pt-10'>
            <motion.div
                className='w-8 md:w-12 h-10 rounded-full bg-primary flex justify-center p-1 font-bold text-xl text-white'
                initial={controlS}
                animate={controlS}
            >
                S
            </motion.div>
            <motion.div
                className='w-8 md:w-12 h-28 rounded-full bg-secondary flex justify-center p-1 font-bold text-xl text-white'
                initial={controlK}
                animate={controlK}
            >
                K
            </motion.div>
            <motion.div
                className='w-8 md:w-12 h-36 rounded-full bg-fourth flex justify-center p-1 font-bold text-xl text-white'
                initial={controlI}
                animate={controlI}
            >
                I
            </motion.div>
            <motion.div
                className='w-8 md:w-12 h-20 rounded-full bg-third flex justify-center p-1 font-bold text-xl text-white'
                initial={controlL}
                animate={controlL}
            >
                L
            </motion.div>
            <motion.div
                className='w-8 md:w-12 h-44 rounded-full bg-secondary flex justify-center p-1 font-bold text-xl text-white'
                initial={controlLl}
                animate={controlLl}
            >
                L
            </motion.div>
            <motion.div
                className='w-8 md:w-12 h-40 rounded-full bg-primary flex justify-center p-1 font-bold text-xl text-white'
                initial={controlSI}
                animate={controlSI}
            >
                S
            </motion.div>
        </div>
    );
};

const Normalv2 = () => {
    return (
        <div className='flex flex-col gap-y-10'>
            <Link
                to={
                    'https://instagram.com/willjuliansyah?igshid=MTJzeTN1ODEzY2tyNA=='
                }
            >
                <div
                    className={`bg-blue-800 py-2 px-3 text-xl self-start rounded-lg w-full shadow-md cursor-pointer text-white flex items-center gap-x-5`}
                >
                    <img src={image.Ig} alt='image' className='w-12' />
                    Instagram
                </div>
            </Link>
            <Link to={''}>
                <div
                    className={`bg-green-600 py-2 px-3 text-xl self-start rounded-lg w-full shadow-md cursor-pointer text-white flex items-center gap-x-5`}
                >
                    <img src={image.Tiktok} alt='image' className='w-12' />
                    Tiktok
                </div>
            </Link>
            <Link to={'https://wa.me/62881036249934'}>
                <div
                    className={`bg-rose-700 py-2 px-3 text-xl self-start rounded-lg w-full shadow-md cursor-pointer text-white flex items-center gap-x-5`}
                >
                    <img src={image.Wa} alt='image' className='w-12' />
                    Whatsapp
                </div>
            </Link>
        </div>
    );
};

Button.Rounded = Rounded;
Button.Ractangle = Ractangle;
Button.Normal = Normal;
Button.Normalv2 = Normalv2;
Button.RoundedV2 = RoundedV2;
Button.RoundedV3 = RoundedV3;
