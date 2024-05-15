import React, { useState, useEffect } from 'react'
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import {
  PlusCircleIcon,
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'

function Admin_Student_Information() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [studentData, setStudentData] = useState<StudentInfo[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedStudentId, setSelectedStudentId] = useState<number | null>(
    null
  )

  const itemsPerPage = 10
  const totalPages = Math.ceil(studentData.length / itemsPerPage)

  const fetchStudentData = async () => {
    try {
      const res = await fetch('http://localhost:3001/admin/student/info')
      const data = await res.json()
      setStudentData(data)
      console.log(data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const deleteStudent = async (userID: number) => {
    try {
      const res = await fetch('http://localhost:3001/admin/student/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ User_ID: userID }),
      })
      const data = await res.json()
      console.log(data)
      setStudentData(
        studentData.filter((student) => student.User_ID !== userID)
      )
      close()
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

  const open = (userID: number) => {
    setSelectedStudentId(userID)
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
    setSelectedStudentId(null)
  }

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
                        <button
                          title="Edit"
                          className="bg-orange-primary px-3 py-1.5 rounded-full text-white"
                        >
                          <PencilIcon className="h-4 w-4" />
                        </button>
                        <button
                          title="Delete"
                          onClick={() => open(student.User_ID)}
                          className="bg-[#ff2727] px-3 py-1.5 rounded-full text-white"
                        >
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

      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 transition-all ease-linear duration-300"
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto animate-slowfade">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-gray-100 px-10 py-8 backdrop-blur-2xl ">
                  <DialogTitle as="h1" className="text-lg font-medium">
                    Are you sure you want to delete this student?
                  </DialogTitle>
                  <p className="mt-2 text-sm/6">
                    This action cannot be undone. This will permanently delete
                    the student account.
                  </p>
                  <div className="mt-4 flex flex-row gap-x-2">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-[#ff2727] py-1.5 px-3 text-sm/6 font-semibold text-white"
                      onClick={async () => {
                        console.log('Delete')
                        if (selectedStudentId !== null) {
                          await deleteStudent(selectedStudentId)
                        }
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-[#000000] py-1.5 px-3 text-sm/6 text-white"
                      onClick={close}
                    >
                      Cancel
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default Admin_Student_Information
