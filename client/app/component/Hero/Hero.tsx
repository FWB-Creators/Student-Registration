import React from 'react'
import ButtonOrange2 from '../Button/ButtonOrange2'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center'>
            <div className='grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto'>
                <div className='col-span-2'>
                    <h1 className='text-[27px] md:text-[35px] lg:text-[60px] mb-[1rem] font-bold text-orange-500 leading-[2.4rem] md:leading-[4rem]'>
                        Never too late to learn
                    </h1>
                    <p className='md:text-[22px] text-[15px] mb-[2rem] text-black opacity-90 font-[400]'>
                    Learning opens the door to an endless world of knowledge and understanding.
                    </p>
                    <div className='flex items-center space-x-4 md:space-x-6'>
                        <ButtonOrange2 text='Login'/>
                    </div>
                </div>
                <div className='col-span-3 hidden sm:block'>
                    <div className="flex justify-center active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out">
                        <Image src="/static/Fox1.png" alt="Fox" width={550} height={550} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero