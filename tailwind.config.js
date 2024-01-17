/* eslint-disable no-dupe-keys */
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            bg: {
                primary:
                    'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)',
            },
            colors: {
                primary: '#333c4a',
                secondary: '#495664',
                third: '#f6f7d3',
                fourth: '#f8fceb',
                fifth: '#091F2A',
                sixth: '#f0f0f0',
                seventh: '#40F4B2',
                eight: '#F0F9FF',
            },
            boxShadow: {
                primary: '0 0 10px 1px rgba(0, 0, 0, 0.2)',
                secondary:
                    'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;',
            },
            fontSize: {
                ssm: '10px',
            },
            fontWeight: {
                DoubleExtraBold: '1000',
            },
            gridTemplateColumns: {
                aboutMd: '28rem 10rem',
                aboutLg: '39rem 10rem',
            },
            gridTemplateRows: {
                aboutSm: '1fr',
                aboutMd: '1fr',
                aboutXl: '1fr',
                projectSm: '10rem 1fr',
                projectMd: '10rem 1fr',
                contactSm: '10rem 1fr',
                contacttMd: '10rem 1fr',
            },
            transformOrigin: {
                yeh: '0 60px',
            },
            translate: {
                x: '50% 50%',
            },
        },
    },
    plugins: [],
};
