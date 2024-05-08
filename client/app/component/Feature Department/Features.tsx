import React from 'react';
import Image from 'next/image';

const Features = () => {
    const disciplines = [
        { name: 'COMPUTER ENGINEERING', icon: '/static/Laptop.png' },
        { name: 'MECHANICAL ENGINEERING', icon: '/static/Gear.png' },
        { name: 'CIVIL ENGINEERING', icon: '/static/Blueprint.png' },
        { name: 'CHEMICAL ENGINEERING', icon: '/static/Chemical.png' }
    ];

    return (
        <div className='py-6 pb-16 bg-gray-50'>
            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-[1.4rem]'>
                {disciplines.map((discipline, index) => (
                    <div key={index} className='flex'>
                        <div className='border-gray-500 bg-white p-6 rounded-3xl hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 flex items-center'>
                            <div>
                                <div className='ml-6'>
                                    <p className='text-black opacity-90 text-[15px]'>{discipline.name}</p>
                                </div>
                            </div>
                            <div className='ml-auto'>
                                <Image
                                    src={discipline.icon}
                                    alt="icon"
                                    width={110}
                                    height={110}
                                    className='mx-auto'
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
