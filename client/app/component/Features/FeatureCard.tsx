import React from 'react'
import Image from 'next/image'

interface CardProps {
  image: string
  title: string
  description: string
}

const FeatureCard = ({ image, title, description }: CardProps) => {
  return (
    <div className="relative flex flex-col bg-white w-72  p-8 rounded-xl shadow">
      <div className="grid grid-cols-3 gap-x-2 h-full">
        <div className="flex flex-col justify-center col-span-2 ">
          <div className="font-semibold">{title}</div>
          <div className="font-light">{description}</div>
        </div>
        <div className="absolute right-4 top-[58%] transform translate-y-[-50%]">
          <Image src="/static/PC.svg" alt="Laptop" width={85} height={85} />
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
