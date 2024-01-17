import React from 'react';
import { motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Coretan = () => {
    const [coret, inCoret] = useInView({
        triggerOnce: true,
    });
    const PathVariant = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            width: 150,
            height: 100,
            strokeWidth: 38,
            strokeHeight: 50,
            strokeLinecap: 'round',
            transition: { duration: 4, ease: 'easeInOut' },
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: { duration: 4, ease: 'easeInOut' },
        },
    };
    return (
        <>
            <motion.svg
                xmlns='http://www.w3.org/2000/svg'
                width='300'
                height='108'
                viewBox='0 0 1319 108'
                fill='none'
                className={'pt-20'}
                ref={coret}
            >
                <motion.path
                    d='M20.2121 87.1275L147.489 37.3605C162.124 31.6379 178.231 41.2362 180.163 56.8313V56.8313C182.184 73.1454 199.593 82.686 214.432 75.6115L284.401 42.2526C299.878 34.8738 318.348 42.5044 324.129 58.6462V58.6462C324.144 58.6867 324.154 58.7284 324.162 58.7709V58.7709C326.212 70.9379 337.919 78.9984 350.017 76.5725L362.962 73.9766L438.23 50.7072C453.12 46.1038 468.347 42.6677 483.771 40.4302L490.242 39.4915C522.589 34.7992 555.485 35.4246 587.631 41.3429L615.628 46.4976L692.235 53.6392C725.114 56.7042 758.273 54.3201 790.375 46.5828L831.918 36.5701C874.207 26.3777 918.206 25.5036 960.866 34.0083L1008.32 43.4691C1044.24 50.6294 1081.16 51.1529 1117.27 45.0137L1209.13 29.3935L1298.12 20.1437'
                    stroke='#007BFF'
                    stroke-width='40'
                    stroke-linecap='round'
                    initial='hidden'
                    animate={inCoret ? 'visible' : 'hidden'}
                    variants={PathVariant}
                />
            </motion.svg>
        </>
    );
};

export default Coretan;
