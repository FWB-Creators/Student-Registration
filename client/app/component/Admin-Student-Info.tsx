'use client'
import React, { useState, useEffect } from 'react'
import {
  PlusCircleIcon,
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'

interface StudentInfo {
  Address: string
  Contact: string
  DOB: string
  Department_ID: string
  Email: string
  ID_card: string
  Name: string
  Registration_ID: number
  Sex: string
  Surname: string
  User_ID: number
  Year: string
}

function Admin_Student_Information() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [studentData, setStudentData] = useState<StudentInfo[]>([])
  const itemsPerPage = 10
  const totalPages = Math.ceil(studentData.length / itemsPerPage)

  const fetchStudentData = async () => {
    try {
      const res = await fetch('http://localhost:3001/admin/studentinfo')
      const data = await res.json()
      setStudentData(data)
      console.log(data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    fetchStudentData()
  }, [])

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
  }

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const currentData = studentData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="bg-gray-50 h-screen px-20 animate-slowfade">
      <section>
        <div className="w-full flex justify-center">
          <div className="bg-white w-10/12 px-16 py-10 rounded-3xl drop-shadow overflow-hidden">
            <h1 className="mx-auto text-3xl font-semibold py-6 text-center">
              Student Information
            </h1>
            <table className="w-full divide-y divide-gray-200 overflow-hidden rounded-xl">
              <thead className="bg-gray-50">
                <tr>
                  {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    No.
                  </th> */}
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Surname
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact Number
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentData.map((student, index) => (
                  <tr key={student.User_ID}>
                    {/* <td className="px-6 py-4 whitespace-nowrap">
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </td> */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.User_ID ?? 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.Name ?? 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.Surname ?? 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.Email ?? 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.Contact ?? 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex justify-center items-center gap-x-2">
                        <button className="bg-orange-primary px-3 py-1.5 rounded-full text-white">
                          <PencilIcon className="h-4 w-4" />
                        </button>
                        <button className="bg-[#ff2727] px-3 py-1.5 rounded-full text-white">
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="my-6 flex flex-wrap justify-center items-center w-full font-medium text-sm gap-2">
              <button
                onClick={handlePrevPage}
                className={`${
                  currentPage === 1
                    ? 'opacity-40 cursor-not-allowed'
                    : 'cursor-pointer'
                } h-6 w-6 text-gray-500`}
                disabled={currentPage === 1}
              >
                <ArrowLongLeftIcon className="h-6 w-6 text-center" />
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <p
                  key={index + 1}
                  onClick={() => handlePageClick(index + 1)}
                  className={`flex justify-center items-center h-10 w-10 border rounded-full ${
                    currentPage === index + 1
                      ? 'text-white bg-orange-primary'
                      : 'text-gray-400 border-orange-primary cursor-pointer transition-colors duration-200 hover:bg-orange-300 hover:text-slate-100'
                  }`}
                >
                  {index + 1}
                </p>
              ))}
              <button
                onClick={handleNextPage}
                className={`${
                  currentPage === totalPages
                    ? 'opacity-40 cursor-not-allowed'
                    : 'cursor-pointer'
                } h-6 w-6 text-gray-500`}
                disabled={currentPage === totalPages}
              >
                <ArrowLongRightIcon className="h-6 w-6 text-center" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Admin_Student_Information
