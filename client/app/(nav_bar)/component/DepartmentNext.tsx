import React from 'react'
import Link from 'next/link'
import NavPages from '../../Navigation/NavPage'
import Image from 'next/image'

const DepartmentNext = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div>
        <NavPages />
      </div>
      <div>
        <div className="text-sm text-gray-400 pt-6 pl-52">
          <Link href="/">
            <span className="text-gray-400 hover:underline hover:text-orange-500 cursor-pointer font-semibold">
              HOME
            </span>
          </Link>
          {' / '}
          <Link href="/department">
            <span className="text-gray-400 hover:underline hover:text-orange-500 cursor-pointer font-semibold">
              DEPARTMENT
            </span>
          </Link>
          {' / '}
          <Link href="/department-next">
            <span className="text-gray-400 hover:underline hover:text-orange-500 cursor-pointer font-semibold">
              COMPUTER ENGINEERING
            </span>
          </Link>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <div className="bg-[#FFA842] w-10/12 px-16 py-10 rounded-3xl flex items-center justify-between mt-5">
            <div className="w-9/12 mr-10 my-10">
              <h1 className="text-white pb-7 text-5xl font-semibold">
                What is Computer Engineering?
              </h1>
              <p className="text-white py-4 text-lg">
                Computer Engineering is a multifaceted field that merges aspects
                of both computer science and electrical engineering to design,
                develop, and maintain hardware and software components of
                computing systems. It encompasses a wide range of disciplines,
                including computer architecture, digital logic design, operating
                systems, computer networks, software engineering, and embedded
                systems, among others.
              </p>
              <p className="text-white py-4 text-lg">
                At its core, Computer Engineering focuses on the integration of
                hardware and software to create efficient and innovative
                solutions to complex problems. Computer engineers are equipped
                with a deep understanding of both hardware and software systems,
                allowing them to develop cutting-edge technologies such as
                microprocessors, embedded systems, and networking protocols.
              </p>
              <p className="text-white py-4 text-lg">
                In today's digital age, Computer Engineering plays a pivotal
                role in shaping the technological landscape. It drives
                advancements in areas such as artificial intelligence,
                cybersecurity, internet of things (IoT), and cloud computing.
                Computer engineers are at the forefront of developing
                transformative technologies that impact various industries,
                including healthcare, finance, transportation, and
                entertainment.
              </p>
              <p className="text-white py-4 text-lg">
                Furthermore, Computer Engineering is closely intertwined with
                other engineering disciplines, such as electrical engineering,
                mechanical engineering, and civil engineering, fostering
                interdisciplinary collaboration and innovation. This
                interdisciplinary approach enables computer engineers to tackle
                diverse challenges and contribute to solving real-world
                problems.
              </p>
              <p className="text-white py-4 text-lg">
                Overall, Computer Engineering encompasses a vast array of
                knowledge and skills, ranging from low-level hardware design to
                high-level software development. It is a dynamic and constantly
                evolving field that continues to push the boundaries of what is
                possible in the realm of computing, driving innovation and
                shaping the future of technology.
              </p>
            </div>
            <div className="my-4">
              <Image
                src="/static/Engineer.png"
                alt="Engineer"
                width={700}
                height={700}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DepartmentNext
