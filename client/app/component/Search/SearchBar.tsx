import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React from 'react'

const SearchBar = () => {

    return (
        <form className='w-2/5 relative'>
            <div className="relative">
                <input type="search" placeholder='Search' className="w-full border-2 border-gray-200 rounded-full p-4 bg-transparent"/>
                <button className='border-2 border-gray-200 rounded-full absolute right-1 top-1/2 -translate-y-1/2 bg-white w-12 h-12 flex items-center justify-center'> {/* เพิ่ม w-10 h-10 เพื่อกำหนดขนาดของปุ่ม */}
                    <MagnifyingGlassIcon 
                        className='w-[1rem] h-[2rem] text-gray-300 cursor-pointer'
                    />
                </button>
            </div>
        </form>
    )
}

export default SearchBar