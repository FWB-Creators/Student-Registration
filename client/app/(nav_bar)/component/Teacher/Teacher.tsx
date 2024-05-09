import React from 'react'
import Image from 'next/image'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'

const Teacher = () => {
const disciplines = [
    {
        name: 'SIKARES NUNTIPATSAKUL',
        position: 'Profession',
        tel: '000-000-0000',
        email: 'sikares.n@kmutt.ac.th',
        icon: '/static/joi.png',
    },
    {
        name: 'SIKARES NUNTIPATSAKUL',
        position: 'Profession',
        tel: '000-000-0000',
        email: 'sikares.n@kmutt.ac.th',
        icon: '/static/joi.png',
    },
    {
        name: 'SIKARES NUNTIPATSAKUL',
        position: 'Profession',
        tel: '000-000-0000',
        email: 'sikares.n@kmutt.ac.th',
        icon: '/static/joi.png',
    },
    {
        name: 'SIKARES NUNTIPATSAKUL',
        position: 'Profession',
        tel: '000-000-0000',
        email: 'sikares.n@kmutt.ac.th',
        icon: '/static/joi.png',
    },
    {
        name: 'SIKARES NUNTIPATSAKUL',
        position: 'Profession',
        tel: '000-000-0000',
        email: 'sikares.n@kmutt.ac.th',
        icon: '/static/joi.png',
    },
    {
        name: 'SIKARES NUNTIPATSAKUL',
        position: 'Profession',
        tel: '000-000-0000',
        email: 'sikares.n@kmutt.ac.th',
        icon: '/static/joi.png',
    },
    {
        name: 'SIKARES NUNTIPATSAKUL',
        position: 'Profession',
        tel: '000-000-0000',
        email: 'sikares.n@kmutt.ac.th',
        icon: '/static/joi.png',
    },
    {
        name: 'SIKARES NUNTIPATSAKUL',
        position: 'Profession',
        tel: '000-000-0000',
        email: 'sikares.n@kmutt.ac.th',
        icon: '/static/joi.png',
    },
]

return (
    <div className="py-6 pb-16 bg-gray-50 overflow-x-hidden">
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-[2rem]">
            {disciplines.map((discipline, index) => (
            <div key={index}>
                <div className="border-gray-500 bg-white p-6 rounded-3xl hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 flex flex-col items-center">
                <div className="m-4 relative w-[23rem] h-[23rem]">
                    <Image
                    src={discipline.icon}
                    alt="icon"
                    //   width={110}
                    //   height={110}
                    layout='fill'
                    className="mx-auto rounded-3xl w-full h-full"
                    />
                </div>
                <div className="text-center py-2">
                    <h1 className="text-black opacity-90 text-lg font-bold pb-2">
                    {discipline.name}
                    </h1>
                    <p className="text-black opacity-90 text-[15px] py-2 font-semibold">
                    {discipline.position}
                    </p>
                        <div className="flex items-center py-2">
                    <PhoneIcon className="h-5 w-5 text-orange-500 opacity-90 mr-2" />
                    <p className="text-black opacity-90 text-[15px]">
                        {discipline.tel}
                    </p>
                    </div>
                    <div className="flex items-center py-2">
                        <EnvelopeIcon className="h-5 w-5 text-orange-500 opacity-90 mr-2" />
                    <p className="text-black opacity-90 text-[15px]">
                        {discipline.email}
                    </p>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>
    </div>
    )
}

export default Teacher