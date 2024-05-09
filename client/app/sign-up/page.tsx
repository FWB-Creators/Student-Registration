import { FC } from 'react'
import SignUp from '../component/Sign-up'
import Image from 'next/image'

function App() {
  return (
    <div className="grid grid-cols-2 h-[calc(100vh-4rem)]">
      <div className="flex flex-row justify-center items-center bg-orange-primary">
        <Image src="/static/Fox1.png" alt="Fox" width={550} height={550} />
      </div>
      <div className="flex flex-row justify-center items-center">
        <SignUp />
      </div>
    </div>
  )
}

export default App
