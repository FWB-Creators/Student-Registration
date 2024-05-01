import React from 'react'
import Form from '../component/Form'
import Image from 'next/image'

function App() {
    return (
    <div className="flex w-full h-screen">
        <div className="hidden lg:flex h-full w-8/12 items-center justify-center bg-[#FFA842]">
            <Image src="/static/Fox.png" alt="Fox" width={500} height={500} />
        </div>
        <div className="w-full flex items-center justify-center">
            <Form />
        </div>
    </div>
    )
}

export default App