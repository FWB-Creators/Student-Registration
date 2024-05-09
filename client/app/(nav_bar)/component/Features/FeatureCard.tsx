import React from 'react'
import Image from 'next/image';

interface Props {
    image: string;
    title: string;
}

const FeatureCard = ({image, title}: Props) => {
    return (
        <div className='border-gray-500 bg-white p-6 rounded-3xl hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 flex items-center'>
            <div>
                <div className='ml-6'>
                    <h1 className='text-2xl font-[500] text-black'>CPE 241</h1>
                    <p className='mt-[1rem] text-black opacity-90 text-[15px]'>
                        DATA BASESYSTEM
                    </p>
                </div>
            </div>
            <div className='ml-auto'>
                <Image
                    src="/static/Laptop.png"
                    alt="icon"
                    width={110}
                    height={110}
                    className='mx-auto'
                />
            </div>
        </div>
    )
}

export default FeatureCard