import React from 'react'
import SearchBar from './Search/SearchBar'
import Features from './Feature Department/Features'

const Departments = () => {
  return (
    <div className="bg-gray-50 h-screen w-full">
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold py-6">Department</h1>
      </div>
      <div className="flex justify-center py-6">
        <SearchBar />
      </div>
      <div>
        <Features />
      </div>
    </div>
  )
}

export default Departments
