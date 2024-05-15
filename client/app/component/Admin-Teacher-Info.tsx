import React from 'react'
import Link from 'next/link'
import {
  AcademicCapIcon,
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  BookOpenIcon,
  UserGroupIcon,
  UserIcon,
  PlusCircleIcon,
} from '@heroicons/react/16/solid'

function Admin_Teacher_Information() {
  return (
    <div className=" px-20 animate-slowfade">
      <section>
        <div className="w-full flex justify-center">
          <div className="bg-white w-10/12 px-16 py-10 rounded-3xl drop-shadow">
            <h1 className="mx-auto text-3xl font-semibold py-6 text-center">
              Teacher Information
            </h1>
            <div className="grid grid-cols-7 gap-x-5">
              <div>
                <p className="text-base font-semibold py-3 text-gray-500">
                  No.
                </p>
                <p className="text-base font-semibold py-3">1</p>
                <p className="text-base font-semibold py-3">2</p>
                <p className="text-base font-semibold py-3">3</p>
                <p className="text-base font-semibold py-3">4</p>
                <p className="text-base font-semibold py-3">5</p>
                <p className="text-base font-semibold py-3">6</p>
                <p className="text-base font-semibold py-3">7</p>
                <p className="text-base font-semibold py-3">8</p>
                <p className="text-base font-semibold py-3">9</p>
                <p className="text-base font-semibold py-3">10</p>
              </div>
              <div>
                <p className="text-base font-semibold py-3 text-gray-500">
                  User ID
                </p>
                <p className="text-base font-semibold py-3">65070503439</p>
                <p className="text-base font-semibold py-3">65070503439</p>
                <p className="text-base font-semibold py-3">65070503439</p>
                <p className="text-base font-semibold py-3">65070503439</p>
                <p className="text-base font-semibold py-3">65070503439</p>
                <p className="text-base font-semibold py-3">65070503439</p>
                <p className="text-base font-semibold py-3">65070503439</p>
                <p className="text-base font-semibold py-3">65070503439</p>
                <p className="text-base font-semibold py-3">65070503439</p>
                <p className="text-base font-semibold py-3">65070503439</p>
              </div>
              <div>
                <p className="text-base font-semibold py-3 text-gray-500">
                  Name
                </p>
                <p className="text-base font-semibold py-3">Sikares</p>
                <p className="text-base font-semibold py-3">Sikares</p>
                <p className="text-base font-semibold py-3">Sikares</p>
                <p className="text-base font-semibold py-3">Sikares</p>
                <p className="text-base font-semibold py-3">Sikares</p>
                <p className="text-base font-semibold py-3">Sikares</p>
                <p className="text-base font-semibold py-3">Sikares</p>
                <p className="text-base font-semibold py-3">Sikares</p>
                <p className="text-base font-semibold py-3">Sikares</p>
                <p className="text-base font-semibold py-3">Sikares</p>
              </div>
              <div>
                <p className="text-base font-semibold py-3 text-gray-500">
                  Surname
                </p>
                <p className="text-base font-semibold py-3">Nuntipatsakul</p>
                <p className="text-base font-semibold py-3">Nuntipatsakul</p>
                <p className="text-base font-semibold py-3">Nuntipatsakul</p>
                <p className="text-base font-semibold py-3">Nuntipatsakul</p>
                <p className="text-base font-semibold py-3">Nuntipatsakul</p>
                <p className="text-base font-semibold py-3">Nuntipatsakul</p>
                <p className="text-base font-semibold py-3">Nuntipatsakul</p>
                <p className="text-base font-semibold py-3">Nuntipatsakul</p>
                <p className="text-base font-semibold py-3">Nuntipatsakul</p>
                <p className="text-base font-semibold py-3">Nuntipatsakul</p>
              </div>
              <div>
                <p className="text-base font-semibold py-3 text-gray-500">
                  Email
                </p>
                <p className="text-base font-semibold py-3">hilly@gmail.com</p>
                <p className="text-base font-semibold py-3">hilly@gmail.com</p>
                <p className="text-base font-semibold py-3">hilly@gmail.com</p>
                <p className="text-base font-semibold py-3">hilly@gmail.com</p>
                <p className="text-base font-semibold py-3">hilly@gmail.com</p>
                <p className="text-base font-semibold py-3">hilly@gmail.com</p>
                <p className="text-base font-semibold py-3">hilly@gmail.com</p>
                <p className="text-base font-semibold py-3">hilly@gmail.com</p>
                <p className="text-base font-semibold py-3">hilly@gmail.com</p>
                <p className="text-base font-semibold py-3">hilly@gmail.com</p>
              </div>
              <div>
                <p className="text-base font-semibold py-3 text-gray-500">
                  Contact Number
                </p>
                <div className="text-base font-semibold py-3">096-516-7420</div>
                <div className="text-base font-semibold py-3">096-516-7420</div>
                <div className="text-base font-semibold py-3">096-516-7420</div>
                <div className="text-base font-semibold py-3">096-516-7420</div>
                <div className="text-base font-semibold py-3">096-516-7420</div>
                <div className="text-base font-semibold py-3">096-516-7420</div>
                <div className="text-base font-semibold py-3">096-516-7420</div>
                <div className="text-base font-semibold py-3">096-516-7420</div>
                <div className="text-base font-semibold py-3">096-516-7420</div>
                <div className="text-base font-semibold py-3">096-516-7420</div>
              </div>
              <div>
                <p className="text-base text-center font-semibold py-3 text-gray-500">
                  Edit
                </p>
                <div className="flex justify-center items-center">
                  <button className="my-2 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03] ease-in-out py-1 rounded-full bg-orange-primary text-white text-base font-semibold flex items-center justify-center mx-2">
                    <p className="text-center">Edit</p>
                  </button>
                  <button className="my-2 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03] ease-in-out py-1 rounded-full bg-gray-200 text-base font-semibold flex items-center justify-center mx-2">
                    <p className="text-center">Delete</p>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button className="my-2 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03] ease-in-out py-1 rounded-full bg-orange-primary text-white text-base font-semibold flex items-center justify-center mx-2">
                    <p className="text-center">Edit</p>
                  </button>
                  <button className="my-2 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03] ease-in-out py-1 rounded-full bg-gray-200 text-base font-semibold flex items-center justify-center mx-2">
                    <p className="text-center">Delete</p>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button className="my-2 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03] ease-in-out py-1 rounded-full bg-orange-primary text-white text-base font-semibold flex items-center justify-center mx-2">
                    <p className="text-center">Edit</p>
                  </button>
                  <button className="my-2 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03] ease-in-out py-1 rounded-full bg-gray-200 text-base font-semibold flex items-center justify-center mx-2">
                    <p className="text-center">Delete</p>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button className="my-2 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03] ease-in-out py-1 rounded-full bg-orange-primary text-white text-base font-semibold flex items-center justify-center mx-2">
                    <p className="text-center">Edit</p>
                  </button>
                  <button className="my-2 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03] ease-in-out py-1 rounded-full bg-gray-200 text-base font-semibold flex items-center justify-center mx-2">
                    <p className="text-center">Delete</p>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button className="my-2 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03] ease-in-out py-1 rounded-full bg-orange-primary text-white text-base font-semibold flex items-center justify-center mx-2">
                    <p className="text-center">Edit</p>
                  </button>
                  <button className="my-2 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03] ease-in-out py-1 rounded-full bg-gray-200 text-base font-semibold flex items-center justify-center mx-2">
                    <p className="text-center">Delete</p>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button className="my-2 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03] ease-in-out py-1 rounded-full bg-orange-primary text-white text-base font-semibold flex items-center justify-center mx-2">
                    <p className="text-center">Edit</p>
                  </button>
                  <button className="my-2 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03] ease-in-out py-1 rounded-full bg-gray-200 text-base font-semibold flex items-center justify-center mx-2">
                    <p className="text-center">Delete</p>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button className="my-2 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03] ease-in-out py-1 rounded-full bg-orange-primary text-white text-base font-semibold flex items-center justify-center mx-2">
                    <p className="text-center">Edit</p>
                  </button>
                  <button className="my-2 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03] ease-in-out py-1 rounded-full bg-gray-200 text-base font-semibold flex items-center justify-center mx-2">
                    <p className="text-center">Delete</p>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button className="my-2 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03] ease-in-out py-1 rounded-full bg-orange-primary text-white text-base font-semibold flex items-center justify-center mx-2">
                    <p className="text-center">Edit</p>
                  </button>
                  <button className="my-2 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03] ease-in-out py-1 rounded-full bg-gray-200 text-base font-semibold flex items-center justify-center mx-2">
                    <p className="text-center">Delete</p>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button className="my-2 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03] ease-in-out py-1 rounded-full bg-orange-primary text-white text-base font-semibold flex items-center justify-center mx-2">
                    <p className="text-center">Edit</p>
                  </button>
                  <button className="my-2 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03] ease-in-out py-1 rounded-full bg-gray-200 text-base font-semibold flex items-center justify-center mx-2">
                    <p className="text-center">Delete</p>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button className="my-2 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03] ease-in-out py-1 rounded-full bg-orange-primary text-white text-base font-semibold flex items-center justify-center mx-2">
                    <p className="text-center">Edit</p>
                  </button>
                  <button className="my-2 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03] ease-in-out py-1 rounded-full bg-gray-200 text-base font-semibold flex items-center justify-center mx-2">
                    <p className="text-center">Delete</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="mt-4 w-1/12 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-full bg-orange-primary text-white text-base font-semibold flex items-center justify-center">
                <p className="text-center">ADD</p>
                <PlusCircleIcon className="ml-3 h-6 w-6 text-center" />
              </button>
            </div>
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
          <div className="i-icon i-icon-arrow-left opacity-40 cursor-not-allowed h-6 w-6 text-gray-400">
            <button>
              <ArrowLongRightIcon className="h-6 w-6 text-center" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Admin_Teacher_Information
