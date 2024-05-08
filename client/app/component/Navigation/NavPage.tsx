'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/solid'

interface Props {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {
    const [showDropdown, setShowDropdown] = useState(false)

const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown)
}

return (
    <div className="h-[8vh] bg-white shadow-md">
        <div className="w-[85%] flex items-center justify-between mx-auto h-[8vh]">
            <h1 className="text-[16px] md:text-[25px] font-bold text-slate-800">
            <span className="text-[27px] md:text-[40px] text-orange-500">D</span>
            atabase
            </h1>
            <ul className="font-semibold hidden lg:flex items-center space-x-10">
            <li className="text-[17px] cursor-pointer text-orange-500">
                <Link href="/">Home</Link>
            </li>
            <li className="text-[17px] cursor-pointer hover:text-orange-500 transition-all duration-200">
                <Link href="/">Registration</Link>
            </li>
            <li className="text-[17px] cursor-pointer hover:text-orange-500 transition-all duration-200">
                <Link href="/">Course</Link>
            </li>
            <li className="text-[17px] cursor-pointer hover:text-orange-500 transition-all duration-200">
                <Link href="/">Department</Link>
            </li>
            <li className="text-[17px] cursor-pointer hover:text-orange-500 transition-all duration-200">
                <Link href="/">Instructor</Link>
            </li>
            </ul>
            <div className="flex items-center space-x-2 md:space-x-5 relative">
            <button
                className="group font-semibold hidden lg:flex ml-auto"
                onClick={handleDropdownToggle}
                >
                <span className="group-hover:text-orange-500 text-lg">Sikares</span>
                <ChevronDownIcon
                className={`ml-1 group-hover:text-orange-500 w-[1rem] h-[2rem] text-slate-900 cursor-pointer ${
                    showDropdown ? 'rotate-180' : ''
                }`}
                />
            </button>
            {showDropdown && (
                <div className="absolute top-full right-0 mt-1 bg-white rounded-md shadow-lg">
                <ul className="py-1 w-28">
                    <li className="text-md font-semibold cursor-pointer hover:bg-gray-50 hover:text-orange-500 transition-all duration-200 px-4 py-4">
                    Edit Profile
                    </li>
                    <li className="text-md font-semibold cursor-pointer hover:bg-gray-50 hover:text-orange-500 transition-all duration-200 px-4 py-4">
                    Log Out
                    </li>
                </ul>
                </div>
            )}
            </div>
            <Bars3Icon
            onClick={openNav}
            className="lg:hidden w-[1.5rem] h-[1.5rem] text-slate-900 cursor-pointer"
            />
        </div>
    </div>
    )
}

export default Nav