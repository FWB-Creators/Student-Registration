'use client'
import { useState, FC } from 'react'
import HeroSection from './component/Main/HeroSection'
const Home: FC = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 300)
  if (loading)
    return (
      <div className="flex flex-row justify-center items-center animate-pulse h-[calc(100vh-4rem)]"></div>
    )
  return (
    <div className="animate-slowfade">
      <HeroSection />
    </div>
  )
}

export default Home
