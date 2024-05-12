'use client'
import { FC, useState } from 'react'
import Login from '../component/Login'
import Image from 'next/image'

function Page() {
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 500)
  if (loading)
    return (
      <div className="flex flex-row justify-center items-center animate-pulse h-[calc(100vh-4rem)]">
        Loading ...
      </div>
    )
  return (
    <div className="grid grid-cols-2 h-[calc(100vh-4rem)] animate-slowfade">
      <div className="flex flex-row justify-center items-center bg-orange-primary">
        <Image src="/static/Fox1.png" alt="Fox" width={550} height={550} />
      </div>
      <div className="flex flex-row justify-center items-center">
        <Login />
      </div>
    </div>
  )
}

export default Page
