'use client'
import { useEffect, useState } from 'react'

const Test = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/home')
        const data = await res.json()
        setData(data.users)
        console.log(data)
      } catch (error) {
        console.error('An error occurred while fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="h-screen flex flex-col justify-center items-center backdrop-blur ">
      {data ? (
        data.map((user) => (
          <div
            key={user.id}
            className="flex flex-row justify-center mt-2 pulse"
          >
            {user.username}
          </div>
        ))
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  )
}

export default Test
