import React from 'react'
import Image from 'next/image'

interface Props {
  image: string
  title: string
}

const FeatureCard = ({ image, title }: Props) => {
  return (
    <div className="flex flex-col flex-grow bg-white w-64 p-8 rounded-xl drop-shadow">
      <div className="grid grid-cols-3">
        <div className="flex flex-col justify-center col-span-2">
          <div className="font-semibold">CPE123</div>
          <div>Database System</div>
        </div>
        <div className="flex flex-col justify-center items-end">
          <Image src="/static/PC.svg" alt="Laptop" width={90} height={90} />
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
