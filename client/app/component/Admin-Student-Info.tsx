import React from 'react'
import {
  PlusCircleIcon,
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'

const mockData = [
  {
    id: 1,
    userId: '65070503439',
    name: 'Sikares',
    surname: 'Nuntipatsakul',
    email: 'hilly@gmail.com',
    contactNumber: '096-516-7420',
  },
  {
    id: 2,
    userId: '65070503440',
    name: 'John',
    surname: 'Doe',
    email: 'john@gmail.com',
    contactNumber: '096-516-7421',
  },
  {
    id: 3,
    userId: '65070503441',
    name: 'Jane',
    surname: 'Smith',
    email: 'jane@gmail.com',
    contactNumber: '096-516-7422',
  },
  {
    id: 4,
    userId: '65070503442',
    name: 'Chris',
    surname: 'Johnson',
    email: 'chris@gmail.com',
    contactNumber: '096-516-7423',
  },
  {
    id: 5,
    userId: '65070503443',
    name: 'Pat',
    surname: 'Brown',
    email: 'pat@gmail.com',
    contactNumber: '096-516-7424',
  },
  {
    id: 6,
    userId: '65070503444',
    name: 'Alex',
    surname: 'Davis',
    email: 'alex@gmail.com',
    contactNumber: '096-516-7425',
  },
  {
    id: 7,
    userId: '65070503445',
    name: 'Taylor',
    surname: 'Wilson',
    email: 'taylor@gmail.com',
    contactNumber: '096-516-7426',
  },
  {
    id: 8,
    userId: '65070503446',
    name: 'Jordan',
    surname: 'Martinez',
    email: 'jordan@gmail.com',
    contactNumber: '096-516-7427',
  },
  {
    id: 9,
    userId: '65070503447',
    name: 'Morgan',
    surname: 'Anderson',
    email: 'morgan@gmail.com',
    contactNumber: '096-516-7428',
  },
  {
    id: 10,
    userId: '65070503448',
    name: 'Casey',
    surname: 'Taylor',
    email: 'casey@gmail.com',
    contactNumber: '096-516-7429',
  },
]

function Admin_Student_Information() {
  return (
    <div className="bg-gray-50 h-screen px-20 animate-slowfade">
      <section>
        <div className="w-full flex justify-center">
          <div className="bg-white w-10/12 px-16 py-10 rounded-3xl drop-shadow">
            <h1 className="mx-auto text-3xl font-semibold py-6 text-center">
              Student Information
            </h1>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    No.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Surname
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockData.map((student, index) => (
                  <tr key={student.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.userId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.surname}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.contactNumber}
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
            {/* <div className="flex justify-center items-center">
              <button className="bg-orange-primary px-3 py-3 rounded-full text-white">
                <PlusCircleIcon className="h-4 w-4" />
              </button>
            </div> */}
          </div>
        </div>
      </section>
      <section></section>
      <section>
        <div className="my-6 flex flex-wrap justify-center items-center w-full font-medium text-sm gap-2">
          <div className="i-icon i-icon-arrow-left opacity-40 cursor-not-allowed h-6 w-6 text-gray-500">
            <button>
              <ArrowLongLeftIcon className="h-6 w-6 text-center" />
            </button>
          </div>
          <p className="flex justify-center items-center h-10 w-10 border rounded-full text-white bg-orange-primary cursor-pointer transition-colors duration-200 hover:bg-orange-300 hover:text-slate-100">
            1
          </p>
          <p className="flex justify-center items-center h-10 w-10 border rounded-full text-gray-400 border-orange-primary cursor-pointer transition-colors duration-200 hover:bg-orange-300 hover:text-slate-100">
            2
          </p>
          <p className="flex justify-center items-center h-10 w-10 border rounded-full text-gray-400 border-orange-primary cursor-pointer transition-colors duration-200 hover:bg-orange-300 hover:text-slate-100">
            3
          </p>
          <p className="flex justify-center items-center h-10 w-10 border rounded-full text-gray-400 border-orange-primary cursor-pointer transition-colors duration-200 hover:bg-orange-300 hover:text-slate-100">
            4
          </p>
          <div className="i-icon i-icon-arrow-left opacity-40 cursor-not-allowed h-6 w-6 text-gray-500">
            <button>
              <ArrowLongRightIcon className="h-6 w-6 text-center" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Admin_Student_Information
