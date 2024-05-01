import * as React from 'react';

export default function Sign() {
    return (
        <div className='bg-white px-20 py-20 rounded-3xl border-2 border-gray-100 drop-shadow-md'>
            <h1 className='text-5xl font-semibold'>Student Register</h1>
            <p className='font-medium text-xl text-gray-500 mt-4'>Welcome!</p>
            <div className='mt-8 flex flex-col gap-y-4'>
                <div className="flex justify-between">
                    <div className='flex-1 mx-5'>
                        <label className='text-lg font-medium'>Name</label>
                        <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your name' />
                    </div>
                    <div className='flex-1 mx-5'>
                        <label className='text-lg font-medium'>Surname</label>
                        <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your surname' />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className='flex-1 mx-5'>
                        <label className='text-lg font-medium'>Tel.</label>
                        <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='000-000-0000' />
                    </div>
                    <div className='flex-1 mx-5'>
                        <label className='text-lg font-medium'>Email</label>
                        <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='username@gmail.com' type='email'/>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className='flex-1 mx-5'>
                        <label className='text-lg font-medium'>ID-Card</label>
                        <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your ID-Card' />
                    </div>
                    <div className='flex-1 mx-5'>
                        <label className='text-lg font-medium'>Date Of Birth</label>
                        <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' type='date' />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className='flex-1 mx-5'>
                        <label className='text-lg font-medium'>Sex</label>
                        <select className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'>
                            <option value=''>Select your gender</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='other'>Other</option>
                        </select>
                    </div>
                    <div className='flex-1 mx-5'>
                        <label className='text-lg font-medium'>Year</label>
                        <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your year' />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className='flex-1 mx-5'>
                        <label className='text-lg font-medium'>Username</label>
                        <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your username' />
                    </div>
                    <div className='flex-1 mx-5'>
                        <label className='text-lg font-medium'>Password</label>
                        <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your password' type='password'/>
                    </div>
                </div>
                <button className='mt-8 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-orange-500 text-white text-lg font-bold'>Register</button>
            </div>
            <div className='mt-8 flex justify-center items-center'>
                <p className='font-medium text-base'>Have an account?</p>
                <button className='text-orange-500 text-base font-medium ml-2'>Login</button>
            </div>
        </div>
    )
}