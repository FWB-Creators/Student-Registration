import React from 'react';
import Link from "next/link"
import ButtonBlue from '../Button/ButtonBlue';
import ButtonRed from '../Button/ButtonRed';
import { Bars3Icon } from '@heroicons/react/24/solid';

interface Props {
    openNav: () => void;
}

const Nav = ({openNav}:Props) => {
    return (
        <div className='h-[12vh] bg-white shadow-md'>
            <div className='w-[85%] flex items-center justify-between mx-auto h-[12vh]'>
                <h1 className='text-[16px] md:text-[25px] font-bold text-slate-800'>
                    <span className='text-[27px] md:text-[40px] text-red-600'>N</span>
                    igga
                    <span className='text-[27px] md:text-[40px] text-red-600'> A</span>
                    ree
                </h1>
                <ul className="font-semibold hidden lg:flex items-center space-x-10">
                    <li className="text-[17px] cursor-pointer text-red-500">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
                        <Link href="/">Register</Link>
                    </li>
                    <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
                        <Link href="/">Course</Link>
                    </li>
                    <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
                        <Link href="/">Department</Link>
                    </li>
                    <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
                        <Link href="/">Instructor</Link>
                    </li>
                </ul>
                <div className='flex items-center space-x-2 md:space-x-5'>
                    <ButtonBlue text='Login'/>
                    <ButtonRed text='Sign Up'/>
                    <Bars3Icon
                        onClick={openNav}
                        className="lg:hidden w-[1.5rem] h-[1.5rem] text-slate-900 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    )
}

export default Nav;