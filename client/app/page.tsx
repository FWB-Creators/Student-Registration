'use client'
import { useState, useEffect } from 'react'
export default function Home() {
  const [data, setData] = useState<any>('loading.:')

  const fetchData = async () => {
    const response = await fetch('http://localhost:3001/api/home')
    const data = await response.json()
    console.log(data.message)
    setData(data.message)
  }
  fetchData()
  return (
    <div>
      <h1>Home</h1>
      <div>{data}</div>
    </div>
  )
}
