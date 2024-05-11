import React from 'react'
import NavPages from '../Navigation/NavPage'
import SearchBar from './Search/SearchBar'
import Teacher from './Instructor/Teacher'

const Instructor = () => {
  const mockData = [
    {
      name: 'SIKARES NUNTIPATSAKUL',
      position: 'CPE Department Head',
      tel: '000-000-0000',
      email: 'sikares.n@kmutt.ac.th',
      icon: '/static/people.png',
    },
    {
      name: 'Ratchanon',
      position: 'CPE Department Head',
      tel: '000-000-0000',
      email: 'sikares.n@kmutt.ac.th',
      icon: '/static/people.png',
    },

    {
      name: 'Phuri',
      position: 'CPE Department Head',
      tel: '000-000-0000',
      email: 'sikares.n@kmutt.ac.th',
      icon: '/static/people.png',
    },
  ]
  return (
    <div className="bg-gray-50 h-screen w-full">
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold py-6">Instructor</h1>
      </div>
      <div className="flex justify-center py-6">
        <SearchBar />
      </div>
      <div>
        {mockData.map((data, index) => (
          <Teacher
            key={index}
            name={data.name}
            tel={data.tel}
            email={data.email}
            icon={data.icon}
          />
        ))}
      </div>
    </div>
  )
}

export default Instructor
