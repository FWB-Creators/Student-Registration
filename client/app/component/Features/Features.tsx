import React from 'react'
// import SectionHeading from '../SectionHeading/SectionHeading'
import FeatureCard from './FeatureCard'
import Icon from "@/public/static/Laptop.png"

const Features = () => {
    return (
        <div className='py-5 pb-28'>
            {/* <SectionHeading
                // headingMini = "Ideal solution for you"
                // headingPrimary = "Explore Ultimate features"
            /> */}
            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-[1.4rem]'>
                <div className='col-span-full flex justify-between'>
                    <div>
                        <h1 className='text-3xl font-semibold pb-6'>Enrolled Courses</h1>
                    </div>
                    <div>
                        <button className='text-lg hover:text-orange-500 font-semibold underline'>
                            See all
                        </button>
                    </div>
                </div>
                <div>
                    <FeatureCard title="Laptop" image={Icon.src}/>
                </div>
                <div>
                    <FeatureCard title="Laptop" image={Icon.src}/>
                </div>
                <div>
                    <FeatureCard title="Laptop" image={Icon.src}/>
                </div>
                <div>
                    <FeatureCard title="Laptop" image={Icon.src}/>
                </div>
                <div>
                    <FeatureCard title="Laptop" image={Icon.src}/>
                </div>
                <div>
                    <FeatureCard title="Laptop" image={Icon.src}/>
                </div>
                <div>
                    <FeatureCard title="Laptop" image={Icon.src}/>
                </div>
                <div>
                    <FeatureCard title="Laptop" image={Icon.src}/>
                </div>
            </div>
        </div>
    )
}

export default Features