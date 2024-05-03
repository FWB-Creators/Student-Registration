import React from 'react'
import ButtonOrange from '../Button/ButtonOrange'
import FoxImg from '@/public/static/Fox2.png'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center'>
            <div className='grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto'>
                <div className='col-span-2'>
                    <h1 className='text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-orange-500 leading-[2.4rem] md:leading-[4rem]'>
                        KMUTT Login
                    </h1>
                    <p className='md:text-[17px] text-[15px] mb-[2rem] text-black opacity-90 font-[400]'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui exercitationem in eius consectetur placeat dolores similique natus porro obcaecati commodi, vero saepe, ipsa alias, quibusdam assumenda vel quod hic!
                    </p>
                    <div className='flex items-center space-x-4 md:space-x-6'>
                        <ButtonOrange text='Login'/>
                    </div>
                </div>
                <div className='col-span-3 hidden sm:block'>
                    <Image src={FoxImg} alt="Hero" width={600} height={600}/>
                </div>
            </div>
        </div>
    )
}

export default Hero