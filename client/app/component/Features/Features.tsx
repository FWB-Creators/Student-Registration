'use client'
import React, { useState } from 'react';
import FeatureCard from './FeatureCard';
import Icon from "@/public/static/Laptop.png";

const Features = () => {
    const [showAll, setShowAll] = useState(false);
    const [numOfCards, setNumOfCards] = useState(8);

    const handleSeeAllClick = () => {
        setShowAll(true);
        setNumOfCards(16);
    };

    return (
        <div className='py-5 pb-16'>
            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-[1.4rem]'>
                <div className='col-span-full flex justify-between'>
                    <div>
                        <h1 className='text-3xl font-semibold pb-6'>Enrolled Courses</h1>
                    </div>
                    <div>
                        {!showAll && ( 
                            <button
                                className='text-lg hover:text-orange-500 font-semibold underline'
                                onClick={handleSeeAllClick}
                            >
                                See all
                            </button>
                        )}
                    </div>
                </div>
                {Array.from({ length: numOfCards }).map((_, index) => (
                    <div key={index}>
                        <FeatureCard title="Laptop" image={Icon.src} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;