'use client'
import { FC, useState } from 'react'
import ButtonOrange from './component/Button/ButtonOrange'
import Link from 'next/link'

const Navbar: FC = () => {
  const [currentPage, setCurrentPage] = useState('Home')
  const handleChangePage = (page: string) => {
    setCurrentPage(page)
  }

  const menu = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Registeration',
      link: '/registeration',
    },
    {
      name: 'Course',
      link: '/course',
    },
    {
      name: 'Department',
      link: '/department',
    },
    {
      name: 'Instructor',
      link: '/instructor',
    },
  ]
  return (
    <nav className="border-b">
      <div className="flex relative justify-between items-center h-16 mx-10">
        <div className="font-bold">Student Registration</div>
        <div className="hidden md:flex md:absolute left-1/2 transform -translate-x-1/2">
          {menu.map((item, index) => (
            <Link key={index} href={item.link}>
              <div
                className={`${
                  currentPage == item.name ? 'font-bold' : ''
                } hover:bg-slate-100 transition-all ease-in-out rounded-full duration-300 px-4 py-2`}
                onClick={() => handleChangePage(item.name)}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-row gap-x-3">
          <ButtonOrange text="Sign Up" href="/login"></ButtonOrange>
          <ButtonOrange text="Login" href="/login"></ButtonOrange>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
