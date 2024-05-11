import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React from 'react'

const SearchBar = () => {
  return (
    <div className="bg-white relative">
      <input
        type="search"
        placeholder="Search"
        className="w-96 border border-gray-200 rounded-full px-6 py-2 bg-transparent"
      />
      <div className="absolute right-5 top-3.5">
        <MagnifyingGlassIcon className="size-4" />
      </div>
    </div>
  )
}

export default SearchBar
