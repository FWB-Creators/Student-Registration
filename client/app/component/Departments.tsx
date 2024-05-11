'use client'
import { FC, useState, useEffect } from 'react'
import SearchBar from './Search/SearchBar'
import Card from './Feature Department/Features'
interface DepartmentInfo {
  Department_ID: number
  Name: string
  Program: string
  Detail: string
  HOD: string
}

const Departments = () => {
  const [departmentInfo, setDepartmentInfo] = useState<DepartmentInfo[]>()
  const [loading, setLoading] = useState(true)

  const getDepartmentInfo = async () => {
    try {
      const res = await fetch('http://localhost:3001/department/info')
      const data = await res.json()
      setDepartmentInfo(data)
      console.log(data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    getDepartmentInfo()
  }, [])
  setTimeout(() => {
    setLoading(false)
  }, 300)
  if (loading)
    return (
      <div className="flex flex-row justify-center items-center animate-pulse h-[calc(100vh-4rem)]"></div>
    )
  return (
    <div className="bg-gray-50 h-screen px-20 animate-slowfade">
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold py-6">Department</h1>
      </div>
      <div className="flex justify-center py-6">
        <SearchBar />
      </div>
<<<<<<< HEAD
      <div className="flex flex-row justify-center flex-wrap"></div>
        <Features />
=======
      <div className="flex flex-row justify-center flex-wrap">
        {departmentInfo?.map((data, index) => (
          <Card
            key={index}
            name={data.Name}
            // program={data.Program}
            // detail={data.Detail}
            // hod={data.HOD}
          />
        ))}
      </div>
>>>>>>> 3eb2d35d50321635c0f8a686ea8a3aadd630619a
    </div>
  )
}

export default Departments
