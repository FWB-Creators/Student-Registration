import React from 'react';
import Link from "next/link";
import { XMarkIcon } from '@heroicons/react/16/solid';

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav = ({nav, closeNav}: Props) => {
    const navOpenStyle = nav ? "translate-x-0": "translate-x-[-100%]";

    return (
        <div className={`transform transition-all ${navOpenStyle} duration-200 fixed top-0 left-0 z-[200] h-[100vh] right-0
            bottom-0 bg-gray-300`}>
            <XMarkIcon
                onClick={closeNav}
                className='w-[2rem] h-[2rem] absolute top-[2rem] text-white z-[202] right-[2rem]'
            />
            <ul className="font-semibold relative z-[201] space-y-10 flex flex-col justify-center h-[100%] items-center">
                <li className="text-[25px] cursor-pointer text-red-600">
                    <Link href="/">Home</Link>
                </li>
                <li className="text-[25px] cursor-pointer text-white hover:text-red-600 transition-all duration-200">
                    <Link href="/">Register</Link>
                </li>
                <li className="text-[25px] cursor-pointer text-white hover:text-red-600 transition-all duration-200">
                    <Link href="/">Course</Link>
                </li>
                <li className="text-[25px] cursor-pointer text-white hover:text-red-600 transition-all duration-200">
                    <Link href="/">Department</Link>
                </li>
                <li className="text-[25px] cursor-pointer text-white hover:text-red-600 transition-all duration-200">
                    <Link href="/">Instructor</Link>
                </li>
            </ul>
        </div>
    )
}

export default MobileNav;