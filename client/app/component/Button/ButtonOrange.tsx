import React from 'react'
import Link from 'next/link'
interface Props {
  text: string
  href?: string
}

const ButtonOrange = ({ text, href }: Props) => {
  return (
    <button
      className="rounded-full px-4 py-1 text-[15px] md:px-8 md:py-2 overflow-hidden group
        bg-orange-primary relative hover:bg-gradient-to-r hover:from-orange-primary hover:to-orange-secondary text-white
        hover:ring-2 hover:ring-offset-2 hover:ring-orange-secondary transition-all ease-out duration-300"
    >
      <span
        className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform
            translate-x-12 group-hover:-translate-x-40 bg-white opacity-10 rotate-12 ease"
      ></span>
      <Link
        href={href as string}
        className="relative font-medium text-base text-white"
      >
        {text}
      </Link>
    </button>
  )
}

export default ButtonOrange
