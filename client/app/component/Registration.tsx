import React from 'react'
import Image from 'next/image'
import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/16/solid'

function Registration() {
  return (
    <div className="bg-gray-50 h-screen px-20 animate-slowfade">
      <section>
        <div className="flex justify-center">
          <h1 className="text-3xl font-semibold py-6">Registration</h1>
        </div>
        <div className="flex justify-center my-5">
          <div className="bg-white w-10/12 px-16 py-10 rounded-3xl drop-shadow">
            <div className="grid grid-cols-7 gap-x-5">
              <div className="col-span-3 ">
                <p className="text-base font-semibold py-3">
                  Name: <span className="font-normal">Hilly</span>
                </p>
                <p className="text-base font-semibold py-3">
                  Student ID: <span className="font-normal">Hilly</span>
                </p>
                <p className="text-base font-semibold py-3 truncate">
                  Email: <span className="font-normal">Hilly</span>
                </p>
                <p className="text-base font-semibold py-3">
                  Department:{' '}
                  <span className="font-normal">Dummy Department</span>
                </p>
                <p className="text-base font-semibold py-3">
                  Address: <span className="font-normal">Hilly</span>
                </p>
              </div>
              <div className="col-span-3">
                <p className="text-base font-semibold py-3 truncate">
                  Date of Birth: <span className="font-normal ">Hilly</span>
                </p>
                <p className="text-base font-semibold py-3">
                  ID Card: <span className="font-normal">Hilly </span>
                </p>
                <p className="text-base font-semibold py-3">
                  Sex: <span className="font-normal"> </span>
                </p>
                <p className="text-base font-semibold py-3">
                  Year: <span className="font-normal">Hilly</span>
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
      <section>
        <div className="flex justify-center my-5">
          <div className="bg-white w-10/12 px-16 py-10 rounded-3xl drop-shadow">
            <h1 className="mx-auto text-3xl font-semibold py-6 text-center">
              Selected Course
            </h1>
            <div className="grid grid-cols-6 gap-x-5">
              <div>
                <p className="text-base font-semibold py-3 text-gray-500">
                  Course ID
                </p>
                <p className="text-base font-semibold py-3">CPE112</p>
                <p className="text-base font-semibold py-3 truncate">CPE132</p>
                <p className="text-base font-semibold py-3">CPE222</p>
                <p className="text-base font-semibold py-3">CPE232</p>
              </div>
              <div>
                <p className="text-base font-semibold py-3 text-gray-500">
                  Course Name
                </p>
                <p className="text-base font-semibold py-3">DATA MODELS</p>
                <p className="text-base font-semibold py-3">COMPUTER</p>
                <p className="text-base font-semibold py-3">ALGORITHM</p>
                <p className="text-base font-semibold py-3">DATABASE</p>
              </div>
              <div>
                <p className="text-base font-semibold py-3 text-gray-500">
                  Instructor
                </p>
                <p className="text-base font-semibold py-3">AJ.Bie</p>
                <p className="text-base font-semibold py-3">AJ.Cherry</p>
                <p className="text-base font-semibold py-3">AJ.Tumtum</p>
                <p className="text-base font-semibold py-3">AJ.Kung</p>
              </div>
              <div>
                <p className="text-base font-semibold py-3 text-gray-500">
                  Credit
                </p>
                <p className="text-base font-semibold py-3">3</p>
                <p className="text-base font-semibold py-3">3</p>
                <p className="text-base font-semibold py-3">3</p>
                <p className="text-base font-semibold py-3">3</p>
              </div>
              <div>
                <p className="text-base font-semibold py-3 text-gray-500">
                  Hours
                </p>
                <p className="text-base font-semibold py-3">98</p>
                <p className="text-base font-semibold py-3">80</p>
                <p className="text-base font-semibold py-3">90</p>
                <p className="text-base font-semibold py-3">70</p>
              </div>
              <div>
                <p className="text-base font-semibold py-3 text-gray-500">
                  Delete
                </p>
                <div className="flex flex-col">
                  <button className="text-red-500 py-3">
                    <XCircleIcon className="h-6 w-6" />
                  </button>
                </div>
                <div className="flex flex-col">
                  <button className="text-red-500 py-3">
                    <XCircleIcon className="h-6 w-6" />
                  </button>
                </div>
                <div className="flex flex-col">
                  <button className="text-red-500 py-3">
                    <XCircleIcon className="h-6 w-6" />
                  </button>
                </div>
                <div className="flex flex-col">
                  <button className="text-red-500 py-3">
                    <XCircleIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <button
                className="my-4 w-1/12 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-full bg-orange-primary text-white text-base font-semibold flex items-center justify-center"
              >
                <p className='text-center'>ADD</p>
                <PlusCircleIcon className="ml-3 h-6 w-6 text-center"/>
              </button>
            </div>
            <div className='flex justify-center items-center'>
              <button
                className="my-4 w-1/12 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-full bg-orange-primary text-white text-base font-semibold flex items-center justify-center mx-3"
              >
                <p className='text-center'>Accept</p>
              </button>
              <button
                className="my-4 w-1/12 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-full bg-gray-200 text-base font-semibold flex items-center justify-center mx-3"
              >
                <p className='text-center'>Cancle</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Registration
