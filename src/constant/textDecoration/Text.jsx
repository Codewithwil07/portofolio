/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';

const Toles = ({ kalimat, className }) => {
    const kataKata = kalimat.split('');
    const innerAngle = 360 / kataKata.length;
    return (
        <>
            {kataKata.map((kata, index) => (
                <p key={index} className='absolute whitespace-nowrap'>
                    {kata.split('').map((huruf, hurufIndex) => (
                        <span
                            key={hurufIndex}
                            className={className}
                            style={{
                                transform: `rotate(${
                                    index /
                                    Math.sin(innerAngle / (180 / Math.PI))
                                }deg)`,
                            }}
                        >
                            {huruf}
                        </span>
                    ))}
                </p>
            ))}
        </>
    );
};

export default Toles;

const Github = () => {
    return <Toles kalimat='Facebook - facebook -facebook - facebook ' />;
};

const Gmail = () => {
    return <Toles kalimat='G-mail - G-mail - G-mail - G-mail' />;
};

const Ig = () => {
    return <Toles kalimat='Instagram - Instagram - Instagram - Instagram' />;
};

const Linkedin = () => {
    return <Toles kalimat='Linkedin - Linkedin - Linkedin - Linkedin' />;
};

const Tools = () => {
    return (
        <Toles
            kalimat='Tool stack - Tool Stack - Tool Stack -'
            className={
                'origin-yeh -top-[5px] absolute text-[9px] font-semibold text-white right-[0.2rem]'
            }
        />
    );
};
const Project = () => {
    return <Toles kalimat='Projects - Projects - Projects - Projects' />;
};

Toles.Github = Github;
Toles.Gmail = Gmail;
Toles.Ig = Ig;
Toles.Linkedin = Linkedin;
Toles.Tools = Tools;
Toles.Project = Project;
