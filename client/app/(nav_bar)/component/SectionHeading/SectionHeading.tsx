import React from 'react'

interface Props {
    headingMini: string;
    headingPrimary: string;
}

const SectionHeading = ({headingMini, headingPrimary}: Props) => {
    return (
        <div className='text-center p-2'>
            <p className='font-medium text-orange-500 md:text-[16px] text-[15px]'>{headingMini}</p>
            <h1 className='mt-[0.5rem] font-bold text-[22px] md:text-[30px] text-orange-500'>
                {headingPrimary}
            </h1>
        </div>
    )
}

export default SectionHeading