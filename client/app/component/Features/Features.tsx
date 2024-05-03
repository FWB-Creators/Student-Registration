import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import FeatureCard from './FeatureCard'
import Icon1 from "@/public/static/pen.png"
import Icon2 from "@/public/static/book.png"
import Icon3 from "@/public/static/gear.png"
import Icon4 from "@/public/static/human.png"

const Features = () => {
    return (
        <div className='py-[5rem] pb-[3-rem]'>
            <SectionHeading
                headingMini = "Ideal solution for you"
                headingPrimary = "Explore Ultimate features"
            />
            <div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-[1.4rem]'>
                <div>
                    <FeatureCard title="Register" image={Icon1.src}/>
                </div>
                <div>
                    <FeatureCard title="Course" image={Icon2.src}/>
                </div>
                <div>
                    <FeatureCard title="Department" image={Icon3.src}/>
                </div>
                <div>
                    <FeatureCard title="Instructor" image={Icon4.src}/>
                </div>
            </div>
        </div>
    )
}

export default Features