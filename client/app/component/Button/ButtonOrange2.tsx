import React from 'react'
import Link from 'next/link'
interface Props {
  text: string
  href?: string
}

const ButtonOrange2 = ({ text, href }: Props) => {
  return (
    <button
      className="rounded-full px-4 py-1 text-[15px] md:px-10 md:py-3.5 group
        bg-orange-primary hover:bg-gradient-to-r hover:bg-orange-secondary text-white
        hover:ring-2 hover:ring-offset-2 hover:ring-orange-primary transition-all ease-in-out duration-300"
    >
      <Link
        href={href as string}
        className="relative font-semibold text-base text-white"
      >
        {text}
      </Link>
    </button>
  )
}

export default ButtonOrange2
