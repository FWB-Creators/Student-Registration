import React from 'react'
import SearchBar from './Search/SearchBar'
import Features from './Feature Department/Features'

const Departments = () => {
  return (
    <div className="bg-gray-50 h-screen px-20">
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold py-6">Department</h1>
      </div>
      <div className="flex justify-center py-6">
        <SearchBar />
      </div>
      <div className="flex flex-row justify-center flex-wrap"></div>
    </div>
  )
}

export default Departments
