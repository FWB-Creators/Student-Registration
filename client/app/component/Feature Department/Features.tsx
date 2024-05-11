import { FC } from 'react'
import Image from 'next/image'
import { ComputerDesktopIcon } from '@heroicons/react/24/solid'
interface CardProps {
  name: string
}
const Card: FC<CardProps> = ({ name }) => {
  return (
    <div className="flex flex-col w-64 px-10 py-6 bg-white rounded-2xl">
      <ComputerDesktopIcon className="size-16" />
      <div className="mt-4 text-xl font-semibold">{name}</div>
    </div>
  )
}

export default Card
