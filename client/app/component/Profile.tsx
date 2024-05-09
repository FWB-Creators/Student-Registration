import React from 'react'
import Image from 'next/image'
import FeatureCard from './Features/FeatureCard'
const Profile = () => {
  return (
    <div className="bg-gray-50 py-8">
      <section>
        <div className="flex justify-center">
          <div className="bg-orange-primary w-10/12 px-16 py-10 rounded-3xl flex items-center justify-between">
            <div>
              <p className="text-white pb-10">May 15, 2024</p>
              <h1 className="text-white text-4xl font-semibold">
                Welcome back, Gim!
              </h1>
              <p className="text-white pt-4">
                Always stay updated in your student life.
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
                  Name:{' '}
                  <span className="font-normal">Sikares Nuntipatsakul</span>
                </p>
                <p className="text-base font-semibold py-3">
                  Student ID: <span className="font-normal">65070503439</span>
                </p>
                <p className="text-base font-semibold py-3">
                  Email:{' '}
                  <span className="font-normal">sikares.n@kmutt.ac.th</span>
                </p>
                <p className="text-base font-semibold py-3">
                  Department:{' '}
                  <span className="font-normal">Computer Engineering</span>
                </p>
                <p className="text-base font-semibold py-3">
                  Address:{' '}
                  <span className="font-normal">
                    Parque Phutthabucha 48 Condo, Bang Mot, Thung Khru, Bangkok
                    10140
                  </span>
                </p>
              </div>
              <div className="col-span-3">
                <p className="text-base font-semibold py-3">
                  Date of Birth: <span className="font-normal">05/06/2547</span>
                </p>
                <p className="text-base font-semibold py-3">
                  ID Card: <span className="font-normal">11222333333</span>
                </p>
                <p className="text-base font-semibold py-3">
                  Sex: <span className="font-normal">Male</span>
                </p>
                <p className="text-base font-semibold py-3">
                  Year: <span className="font-normal">2</span>
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
        <div className="flex flex-row flex-wrap gap-5">
          {Array.from({ length: 8 }).map((_, index) => (
            <FeatureCard key={index} image="/static/PC.svg" title="CPE123" />
          ))}
          {/* <FeatureCard image="/static/PC.svg" title="CPE 241" /> */}
        </div>
      </section>
    </div>
  )
}

export default Profile
