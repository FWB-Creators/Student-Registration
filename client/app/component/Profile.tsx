import React from 'react'
import NavPage from './Navigation/NavPage'
import Features from './Features/Features'
import Image from 'next/image'

const Profile = () => {
    return (
        <div className='bg-gray-50'>
            <NavPage />
            <div className='flex justify-center my-5'>
                <div className='bg-[#FFA842] w-10/12 px-16 py-10 rounded-3xl'>
                    <p className='text-white pb-10'>May 15, 2024</p>
                    <h1 className='text-white text-3xl font-semibold'>Welcome back, HILLY!</h1>
                    <p className='text-white pt-5'>Always stay updated in your student portal</p>
                </div>
            </div>
            <div className='flex justify-center my-5'>
                <div className='bg-white w-10/12 px-16 py-10 rounded-3xl border-2 border-gray-100 drop-shadow-md'>
                <h1 className='text-3xl font-semibold pb-6'>Profile</h1>
                    <div className='flex justify-between'>
                        <div>
                            <p className='text-lg font-semibold py-3'>NAME: SIKARES NUNTIPATSAKUL</p>
                            <p className='text-lg font-semibold py-3'>STUDENT ID: 65070503439</p>
                            <p className='text-lg font-semibold py-3'>EDUCATION LEVEL: Computer Engineering</p>
                            <p className='text-lg font-semibold py-3'>DEPARTMENT :Computer Engineering</p>
                            <p className='text-lg font-semibold py-3'>ADDRESS: Parque Phutthabucha 48 Condo, Bang Mot, Thung Khru, Bangkok 10140</p>
                        </div>
                        <div>
                            <p className='text-lg font-semibold py-3'>EMAIL: sikares.n@kmutt.ac.th</p>
                            <p className='text-lg font-semibold py-3'>FACULTY: Computer Engineering</p>
                            <p className='text-lg font-semibold py-3'>YEAR: 2</p>
                            <p className='text-lg font-semibold py-3'>GPAX: 4.00</p>
                            
                        </div>
                        <div className='flex justify-between'>
                            <Image src="/static/joi.png" alt="joi" width={120} height={30} />
                        </div>
                    </div>
                </div>
            </div>
            <Features />
        </div>
    )
}

export default Profile