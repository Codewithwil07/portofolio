/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Card = ({ children }) => {
    return <>${children}</>;
};

export default Card;

const Header = ({ img, color }) => {
    return (
        <div className={`cursor-pointer border-${color}`} id='wrap-img-card'>
            <img src={img} alt='' className='rounded-t-[24px]' />
        </div>
    );
};

const Body = ({ description, color, title,}) => {
    return (
        <div className='flex flex-col pt-2 gap-y-5 px-[1rem]'>
            <p className={`text-lg text-${color} pb-3 md:text-xl`}>
                <span className='font-semibold'>{title}</span> {description}
            </p>
            {/* <div className='flex flex-row'>
                <div className='px-3 py-1 rounded-lg' id='cardBtn'>
                    <Link to={'/Inkultur'}>
                        <div className='flex justify-between items-center gap-x-10'>
                            <p className='text-lg font-bold text-seventh md:text-xl'>
                                • Live in Production
                            </p>
                            <FaLongArrowAltRight className='-rotate-45 text-eight bg-cyan-900'/>
                        </div>
                        <p className='text-xl font-bold text-eight md:text-2xl'>
                            {link}
                        </p>
                    </Link>
                </div>
            </div> */}
        </div>
    );
};

Card.Header = Header;
Card.Body = Body;
