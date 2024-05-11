import React from 'react'
import SearchBar from './Search/SearchBar'
import FeatureCourses from './Feature Course/FeatureCourse'

const Course = () => {
    return (
    <div className="bg-gray-50 h-screen px-20">
        <div className="flex justify-center">
        <h1 className="text-3xl font-semibold py-6">Course</h1>
        </div>
        <div className="flex justify-center py-6">
            <SearchBar />
        </div>
        <div className="flex flex-row justify-center flex-wrap"></div>
            <FeatureCourses />
    </div>
    )
}

export default Course
