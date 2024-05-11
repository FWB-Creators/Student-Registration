'use client'
import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import FeatureCard from './Features/FeatureCard'
import Cookies from 'js-cookie'
interface StudentInfo {
  User_ID: number
  Name: string
  Surname: string
  Contract: string
  Address: string
  Email: string
  Department_ID: number
  Registration_ID: number
  DOB: string
  ID_card: string
  Sex: string
  Year: number
}

interface CourseInfo {
  Course_ID: string
  Course_name: string
  Hours: number
  Credit: number
  User_ID: number
  Department_ID: number
  Year: number
  Timetable: string
}

const Profile: FC = () => {
  const [studentInfo, setStudentInfo] = useState<StudentInfo>()
  const [courseInfo, setCourseInfo] = useState<CourseInfo[]>()
  const [loading, setLoading] = useState(true)

  const getStudentInfo = async () => {
    // console.log('Get student info')
    const userID = Cookies.get('userID')
    // console.log('User ID:', userID)
    try {
      const data = await fetch('http://localhost:3001/student/info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userID }),
      })
      const studentInfo = await data.json()
      setStudentInfo(studentInfo[0])
      // console.log(studentInfo)
    } catch (error) {
      console.error('Error:', error)
      // throw new Error('Error:', error)
    }
  }

  const getStudentCourse = async () => {
    const userID = Cookies.get('userID')
    try {
      const data = await fetch('http://localhost:3001/student/course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userID }),
      })
      const courseInfo = await data.json()
      setCourseInfo(courseInfo)
      console.log(courseInfo)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    const fetchStudentInfo = async () => {
      await getStudentInfo()
    }
    const fetchStudentCourse = async () => {
      await getStudentCourse()
    }

    fetchStudentInfo()
    fetchStudentCourse()
  }, [])

  setTimeout(() => {
    setLoading(false)
  }, 300)
  if (loading)
    return (
      <div className="flex flex-row justify-center items-center animate-pulse h-[calc(100vh-4rem)]"></div>
    )
  return (
    <div className="bg-gray-50 py-8 animate-slowfade">
      <section>
        <div className="flex justify-center">
          <div className="bg-orange-primary w-10/12 px-16 py-10 rounded-3xl flex items-center justify-between">
            <div>
              <p className="text-white pb-10">
                {new Date().toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
              <h1 className="text-white text-4xl font-semibold">
                Welcome back, {studentInfo?.Name}!
              </h1>
              <p className="text-white pt-4">
                How are you doing today? We hope you are doing well.
              </p>
            </div>
            <div className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out mr-20">
              <Image
                src="/static/Fox1.png"
                alt="Fox"
                width={220}
                height={220}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="w-10/12 mx-auto text-3xl font-semibold my-10">
          Profile
        </h1>
        <div className="flex justify-center my-5">
          <div className="bg-white w-10/12 px-16 py-10 rounded-3xl drop-shadow">
            <div className="grid grid-cols-7 gap-x-5">
              <div className="col-span-3 ">
                <p className="text-base font-semibold py-3">
                  Name: <span className="font-normal">{studentInfo?.Name}</span>
                </p>
                <p className="text-base font-semibold py-3">
                  Student ID:{' '}
                  <span className="font-normal">{studentInfo?.User_ID}</span>
                </p>
                <p className="text-base font-semibold py-3 truncate">
                  Email:{' '}
                  <span className="font-normal">{studentInfo?.Email}</span>
                </p>
                <p className="text-base font-semibold py-3">
                  Department:{' '}
                  <span className="font-normal">Dummy Department</span>
                </p>
                <p className="text-base font-semibold py-3">
                  Address:{' '}
                  <span className="font-normal">{studentInfo?.Address}</span>
                </p>
              </div>
              <div className="col-span-3">
                <p className="text-base font-semibold py-3 truncate">
                  Date of Birth:{' '}
                  <span className="font-normal ">
                    {studentInfo?.DOB as string}
                  </span>
                </p>
                <p className="text-base font-semibold py-3">
                  ID Card:{' '}
                  <span className="font-normal">{studentInfo?.ID_card} </span>
                </p>
                <p className="text-base font-semibold py-3">
                  Sex: <span className="font-normal">{studentInfo?.Sex} </span>
                </p>
                <p className="text-base font-semibold py-3">
                  Year: <span className="font-normal">{studentInfo?.Year}</span>
                </p>
              </div>
              <div className="">
                <Image
                  src="/static/people.png"
                  alt="joi"
                  width={120}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-10/12 mx-auto">
        <h1 className="text-3xl font-semibold my-10">Enrolled Courses</h1>
        <div className="flex flex-row flex-wrap gap-8">
          {/* {Array.from({ length: 8 }).map((_, index) => (
            <FeatureCard key={index} image="/static/PC.svg" title="CPE123" />
          ))} */}
          {courseInfo?.map((course, index) => (
            <FeatureCard
              key={index}
              image="/static/PC.svg"
              title={course.Course_ID}
              description={course.Course_name}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Profile
