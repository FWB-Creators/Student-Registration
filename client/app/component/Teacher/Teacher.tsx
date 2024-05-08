import React from 'react';
import Image from 'next/image';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';

const Teacher = () => {
    const disciplines = [
        { name: 'SIKARES NUNTIPATSAKUL', position: 'Profession', tel: '000-000-0000', email: 'sikares.n@kmutt.ac.th', icon: '/static/joi.png' },
        { name: 'SIKARES NUNTIPATSAKUL', position: 'Profession', tel: '000-000-0000', email: 'sikares.n@kmutt.ac.th', icon: '/static/joi.png' },
        { name: 'SIKARES NUNTIPATSAKUL', position: 'Profession', tel: '000-000-0000', email: 'sikares.n@kmutt.ac.th', icon: '/static/joi.png' },
        { name: 'SIKARES NUNTIPATSAKUL', position: 'Profession', tel: '000-000-0000', email: 'sikares.n@kmutt.ac.th', icon: '/static/joi.png' },
        { name: 'SIKARES NUNTIPATSAKUL', position: 'Profession', tel: '000-000-0000', email: 'sikares.n@kmutt.ac.th', icon: '/static/joi.png' },
        { name: 'SIKARES NUNTIPATSAKUL', position: 'Profession', tel: '000-000-0000', email: 'sikares.n@kmutt.ac.th', icon: '/static/joi.png' },
        { name: 'SIKARES NUNTIPATSAKUL', position: 'Profession', tel: '000-000-0000', email: 'sikares.n@kmutt.ac.th', icon: '/static/joi.png' },
        { name: 'SIKARES NUNTIPATSAKUL', position: 'Profession', tel: '000-000-0000', email: 'sikares.n@kmutt.ac.th', icon: '/static/joi.png' }
    ];

    return (
        <div className='py-6 pb-16 bg-gray-50'>
            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-[1.4rem]'>
                {disciplines.map((discipline, index) => (
                    <div key={index}>
                        <div className='border-gray-500 bg-white p-6 rounded-3xl hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 flex flex-col items-center'>
                            <div className='mb-4'>
                                <Image
                                    src={discipline.icon}
                                    alt="icon"
                                    width={110}
                                    height={110}
                                    className='mx-auto rounded-t-3xl'
                                />
                            </div>
                            <div className='text-center py-2'>
                                <p className='text-black opacity-90 text-[15px] font-bold py-1'>{discipline.name}</p>
                                <p className='text-black opacity-90 text-[15px] py-1'>{discipline.position}</p>
                                <div className="flex items-center py-1">
                                    <PhoneIcon className="h-5 w-5 text-orange-500 opacity-90 mr-2" />
                                    <p className='text-black opacity-90 text-[15px]'>{discipline.tel}</p>
                                </div>
                                <div className="flex items-center py-1">
                                    <EnvelopeIcon className="h-5 w-5 text-orange-500 opacity-90 mr-2" />
                                    <p className='text-black opacity-90 text-[15px]'>{discipline.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Teacher;
