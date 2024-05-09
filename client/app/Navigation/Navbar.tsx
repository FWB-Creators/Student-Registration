import { FC } from 'react'
import Link from 'next/link'

const Navbar = () => {
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
      <div className="flex relative justify-between items-center h-16  mx-6">
        <div>Student Registration</div>
        <div className="absolute space-x-4 left-1/2 transform -translate-x-1/2">
          {menu.map((item, index) => (
            <Link key={index} href={item.link}>
              {item.name}
            </Link>
          ))}
        </div>
        <div>Login</div>
      </div>
    </nav>
  )
}

export default Navbar
