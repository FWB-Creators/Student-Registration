import React from 'react';

interface Props {
    text: string;
}

const ButtonOrange = ({text}: Props) => {
    return (
        <button className='rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group
        bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white
        hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300'>
            <span className='relative font-semibold'>{text}</span>
        </button>
    )
}

export default ButtonOrange;