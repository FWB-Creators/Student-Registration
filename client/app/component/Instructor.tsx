'use client'
import { FC, useState, useEffect, use } from 'react'
import SearchBar from './Search/SearchBar'
import Teacher from './Instructor/Teacher'

interface InstructorInfo {
  Department_ID: number
  Email: string
  Name: string
  Phone_No: string
  Surname: string
  User_ID: number
}

const Instructor: FC = () => {
  const [instructorInfo, setInstructorInfo] = useState<InstructorInfo[]>()

  const getInstructorInfo = async () => {
    try {
      const res = await fetch('http://localhost:3001/instructor/info')
      const data = await res.json()
      setInstructorInfo(data)
      console.log(data)
    } catch (error) {
      console.error('Error:', error)
    }
  }
  useEffect(() => {
    getInstructorInfo()
  }, [])
  return (
    <div className="bg-gray-50 h-screen px-20">
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold py-6">Instructor</h1>
      </div>
      <div className="flex justify-center py-6">
        <SearchBar />
      </div>
      <div className="flex flex-row justify-center flex-wrap">
        {instructorInfo?.map((data, index) => (
          <Teacher
            key={index}
            name={data.Name}
            surname={data.Surname}
            tel={data.Phone_No}
            email={data.Email}
            departmentID={data.Department_ID}
            icon="/static/people.png"
          />
        ))}
        {/* {mockData.map((data, index) => (
          <Teacher
            key={index}
            name={data.name}
            tel={data.tel}
            email={data.email}
            icon={data.icon}
          />
        ))} */}
      </div>
    </div>
  )
}

export default Instructor
