'use client'
import { FC, useState } from 'react'
import Link from 'next/link'
import Admin_Course_Information from '../component/Admin-Course-Info'
import Admin_Student_Information from '../component/Admin-Student-Info'
import Admin_Teacher_Information from '../component/Admin-Teacher-Info'
import Admin_Department_Information from '../component/Admin-Department-Info'
import {
  UserGroupIcon,
  UserIcon,
  BookOpenIcon,
  AcademicCapIcon,
} from '@heroicons/react/20/solid'

const AdminPage = () => {
  const [currentTab, setCurrentTab] = useState('StudentInfo')

  const tabList = [
    { name: 'Student Information', icon: UserGroupIcon, tab: 'StudentInfo' },
    { name: 'Teacher Information', icon: UserIcon, tab: 'TeacherInfo' },
    { name: 'Course Information', icon: BookOpenIcon, tab: 'CourseInfo' },
    {
      name: 'Department Information',
      icon: AcademicCapIcon,
      tab: 'DepartmentInfo',
    },
  ]

  const handleTab = (tab: string) => {
    setCurrentTab(tab)
  }
  return (
    <div className="animate-slowfade">
      <div className="flex justify-center gap-x-4 my-8 ">
        {tabList.map((tab, index) => (
          <div
            key={index}
            onClick={() => handleTab(tab.tab)}
            className={`flex flex-col items-center justify-center px-6 py-3 cursor-pointer rounded-xl transition-all ease-linear duration-300  ${
              currentTab === tab.tab
                ? 'bg-gray-200 text-black'
                : 'bg-orange-primary text-white hover:bg-orange-secondary'
            }`}
          >
            <tab.icon className="h-8 w-8" />
            <p className="mt-1">{tab.name}</p>
          </div>
        ))}
      </div>
      {currentTab === 'StudentInfo' && <Admin_Student_Information />}
      {currentTab === 'TeacherInfo' && <Admin_Teacher_Information />}
      {currentTab === 'CourseInfo' && <Admin_Course_Information />}
      {currentTab === 'DepartmentInfo' && <Admin_Department_Information />}
    </div>
  )
}

export default AdminPage
