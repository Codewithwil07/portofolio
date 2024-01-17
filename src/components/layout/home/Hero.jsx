import { image } from '../../../constant';

export default function Hero() {
    return (
        <div className='flex flex-col gap-y-10 px-5'>
            <div className='flex flex-col gap-y-14'>
                <h1 className='font-extrabold text-5xl md:text-4xl lowercase relative'>
                    A happy Front-end Developer Who Aims to Help Others Grow in
                    Web Development
                </h1>
                <img
                    src={image.MiniWave}
                    alt='image'
                    className='w-40 relative bottom-12'
                />
                <p className='text-xl md:text-2xl top-2 w-[80%] lowercase'>
                    <span className='font-bold'>1 Years of experiences</span> in
                    using React.js and now trying
                    to use next.js
                </p>
            </div>
            <div className='flex flex-col items-start relative bottom-11 self-end gap-y-1 right-[27rem]'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='30'
                    height='37'
                    viewBox='0 0 40 37'
                    fill='none'
                    className=' hidden md:block'
                >
                    <g clip-path='url(#clip0_0_64)'>
                        <path
                            d='M27.9159 31.4561C20.019 25.1902 13.7895 18.0714 10.0309 8.49448M10.0309 8.49448C12.5436 8.84841 15.2027 8.99613 17.7456 8.92297M10.0309 8.49448C8.84109 12.6174 8.41801 15.817 8.49736 20.0909'
                            stroke='#0891B2'
                            stroke-width='3'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        />
                    </g>
                    <defs>
                        <clipPath id='clip0_0_64'>
                            <rect
                                width='24'
                                height='32'
                                fill='white'
                                transform='matrix(0.428577 -0.903505 -0.903505 -0.428577 28.9121 36.356)'
                            />
                        </clipPath>
                    </defs>
                </svg>
                <p className='text-sm -rotate-12 relative bottom-7 hidden md:block'>
                    But i prefer as Front-end anyway😂
                </p>
            </div>
        </div>
    );
}
