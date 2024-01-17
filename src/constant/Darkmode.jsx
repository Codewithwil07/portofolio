import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import '../index.css';
import { useState } from 'react';

const DarkLightMode = ({ hidden }) => {
    const [isModeOpen, setModeOpen] = useState(false);

    const setDarkmode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
        localStorage.setItem('selectedTheme', 'dark');
    };

    const setLightmode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light');
        localStorage.setItem('selectedTheme', 'light');
    };

    const selectedTheme = localStorage.getItem('selectedTheme', 'dark');
    if (selectedTheme === 'dark') setDarkmode();

    return (
        <div className={`z-20 absolute left-5 top-5 text-yellow-300 lg:static ${hidden}`}>
            {isModeOpen ? (
                <BsFillMoonStarsFill
                    onClick={() => setModeOpen(!isModeOpen)}
                    className='cursor-pointer text-xl'
                    onChange={setDarkmode()}
                />
            ) : (
                <BsFillSunFill
                    onClick={setModeOpen}
                    className='cursor-pointer text-xl'
                    onChange={setLightmode()}
                />
            )}
        </div>
    );
};

export default DarkLightMode;
