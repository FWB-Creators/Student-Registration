'use client'
import { FC, useState, useEffect } from 'react'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'

import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  UserCircleIcon,
  ArrowLeftStartOnRectangleIcon,
} from '@heroicons/react/16/solid'
import ButtonOrange from './component/Button/ButtonOrange'
import Link from 'next/link'
import Cookies from 'js-cookie'

const Navbar: FC = () => {
  const [login, setLogin] = useState(false)
  const [userInfo, setUserInfo] = useState<any[]>()
  const [currentPage, setCurrentPage] = useState('Home')

  useEffect(() => {
    checkLogin() // Check login status on component mount
  }, [])

  const handleChangePage = (page: string) => {
    setCurrentPage(page)
  }

  const checkLogin = () => {
    const userID = Cookies.get('userID')
    const token = Cookies.get('token')
    console.log('--------token--------', token)
    console.log('----------------', userID)
    if (token && userID) {
      const getProfile = async () => {
        try {
          const token = Cookies.get('token')
          const res = await fetch('http://localhost:3001/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
          })
          // const data = await res.json()
          const data = await res.json()
          setUserInfo(data.userInfo)
          console.log(data)
        } catch (error) {
          console.error('Error:', error)
        }
      }
      getProfile()
      setLogin(true)
    } else {
      setLogin(false)
    }
  }

  const menu = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Registration',
      link: '/registration',
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
                className={`hover:bg-slate-100 transition-all ease-in rounded-full duration-300 px-4 py-2`}
                onClick={() => handleChangePage(item.name)}
              >
                <div
                  className={`${currentPage === item.name ? 'font-bold' : ''}`}
                >
                  {item.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
        {!login ? (
          <div className="flex flex-row gap-x-3 animate-slowfade">
            <ButtonOrange text="Sign Up" href="/sign-up"></ButtonOrange>
            <ButtonOrange text="Login" href="/login"></ButtonOrange>
          </div>
        ) : (
          <div className="animate-slowfade ">
            <Menu>
              <MenuButton className="inline-flex items-center gap-2 rounded-md py-1.5 px-3  font-semibold  shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-100 data-[open]:bg-gray-100 data-[focus]:outline-1 data-[focus]:outline-white ">
                {userInfo ? userInfo.Username : 'User'}
                <ChevronDownIcon className="size-4" />
              </MenuButton>
              <Transition
                enter="transition ease-out duration-75"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <MenuItems
                  anchor="bottom end"
                  className="w-40 origin-top-right  rounded-xl border mt-2  bg-white px-3 py-2 text-sm  focus:outline-none"
                >
                  <MenuItem>
                    <Link href="/profile">
                      <button className="group flex items-center gap-2 w-full px-3 py-3 rounded-lg hover:bg-slate-100">
                        <UserCircleIcon className="size-4" />
                        <div>Profile</div>
                      </button>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/profile">
                      <button className="group flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-slate-100">
                        <ArrowLeftStartOnRectangleIcon className="size-4" />
                        <div>Logout</div>
                      </button>
                    </Link>
                  </MenuItem>
                </MenuItems>
              </Transition>
            </Menu>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
