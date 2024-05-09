import React from 'react'
import Link from 'next/link'
interface Props {
  text: string
  href: string
}

const ButtonOrange = ({ text, href }: Props) => {
  return (
    <Link
      href={href as string}
      className="relative font-medium text-base text-white"
    >
      <button
        title="button-orange"
        className="rounded-full px-4 py-1 text-[15px] md:px-8 md:py-2 overflow-hidden group
        bg-orange-primary relative hover:bg-gradient-to-r hover:from-orange-primary hover:to-orange-secondary text-white
        hover:ring-2 hover:ring-offset-2 hover:ring-orange-secondary transition-all ease-out duration-300"
      >
        {text}
      </button>
    </Link>
  )
}

export default ButtonOrange
