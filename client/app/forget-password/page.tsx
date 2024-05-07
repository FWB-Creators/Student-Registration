import { FC } from 'react'
import Forget from '../component/Forget-password'
import Image from 'next/image'

function App() {
return (
    <div className="flex w-full h-screen bg-gray-50">
        <div className="hidden lg:flex h-full w-8/12 items-center justify-center bg-[#FFA842]">
            <div className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out">
                <Image src="/static/Fox1.png" alt="Fox" width={550} height={550} />
            </div>
        </div>
        <div className="w-full flex items-center justify-center bg-gray-50">
            <Forget />
        </div>
        </div>
    )
}

export default App
