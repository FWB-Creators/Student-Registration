import Image from 'next/image'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'

interface instructorCardProps {}

const Card = () => {
  return (
    <div className="py-6 pb-16 bg-gray-50">
      <div className="border-gray-500 bg-white p-6 rounded-3xl hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 flex flex-col items-center overflow-hidden">
        <div className="m-4 relative w-20 h-20">
          <Image
            src={discipline.icon}
            alt="icon"
            layout="fill"
            className="mx-auto rounded-2xl"
          />
        </div>
        <div className="text-center py-2">
          <h1 className="text-black opacity-90 text-lg font-bold pb-2">
            {discipline.name}
          </h1>
          <p className="text-black opacity-90 text-[15px] py-2 font-semibold">
            {discipline.position}
          </p>
          <div className="flex items-center py-2">
            <PhoneIcon className="h-5 w-5 text-orange-500 opacity-90 mr-2" />
            <p className="text-black opacity-90 text-[15px]">
              {discipline.tel}
            </p>
          </div>
          <div className="flex items-center py-2">
            <EnvelopeIcon className="h-5 w-5 text-orange-500 opacity-90 mr-2" />
            <p className="text-black opacity-90 text-[15px]">
              {discipline.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
