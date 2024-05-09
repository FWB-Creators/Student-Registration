import React from 'react'
import Image from 'next/image'

interface Props {
  image: string
  title: string
}

const FeatureCard = ({ image, title }: Props) => {
  return (
    <div className="relative flex flex-col flex-grow bg-white w-64 h-32 p-8 rounded-xl shadow">
      <div className="grid grid-cols-3 gap-x-2 h-full">
        <div className="flex flex-col justify-center col-span-2 ">
          <div className="font-semibold">CPE123</div>
          <div className="font-light">Database System</div>
        </div>
        <div className="absolute right-4 top-[58%] transform translate-y-[-50%]">
          <Image src="/static/PC.svg" alt="Laptop" width={85} height={85} />
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
