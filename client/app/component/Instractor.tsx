import React from 'react'
import NavPages from '../Navigation/NavPage'
import SearchBar from './Search/SearchBar'
import Teacher from './Instructor/Teacher'

const Instrctor = () => {
  return (
    <div className="bg-gray-50 h-screen w-full">
      <div>
        <NavPages />
      </div>
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold py-6">Instractor</h1>
      </div>
      <div className="flex justify-center py-6">
        <SearchBar />
      </div>
      <div>
        <Teacher />
      </div>
    </div>
  )
}

export default Instrctor
