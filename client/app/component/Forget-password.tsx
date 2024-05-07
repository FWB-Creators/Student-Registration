'use client'
import Cookies from 'js-cookie'
import { use, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Forget() {
    const [resMessage, setResMessage] = useState('')
    const router = useRouter()
    const handleLogin = async (event: any) => {
    event.preventDefault()
    console.log('hi')
    const target = event.target as typeof event.target & {
        username: { value: string }
        password: { value: string }
    }
    const username = target.username.value
    const password = target.password.value
    console.log(username, password)
    const data = { username, password }

    fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((status) => {
        console.log(status)
        if (status.token) {
            console.log('Login successful')
            setResMessage('Login successful')

            Cookies.set('token', status.token, { path: '/' })
            router.push('/')
        } else {
            console.log('Login failed')
            setResMessage('Login failed')
        }
    })
}

return (
    <div className="bg-white px-20 py-20 rounded-3xl border-2 border-gray-100 drop-shadow-md">
        <h1 className="text-5xl font-semibold">Forgot Password</h1>
        <p className="font-medium text-xl text-gray-500 mt-4">Welcome!</p>
        {resMessage}
        <form onSubmit={handleLogin} className="mt-8">
        <div className='my-2'>
            <label className="text-lg font-medium">Email</label>
            <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-tranparent"
            id="username"
            placeholder="username@gmail.com"
            type='email'
            ></input>
        </div>
        <div className='my-2'>
            <label className="text-lg font-medium">Username</label>
            <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-tranparent"
            id="username"
            placeholder="Enter your username"
            ></input>
        </div>
        <div className='my-2'>
            <label className="text-lg font-medium">New Password</label>
            <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-tranparent"
            placeholder="Enter your new password"
            id="password"
            type="password"
            ></input>
        </div>
        <div className='mt-2'>
            <label className="text-lg font-medium">Confirm New Password</label>
            <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-tranparent"
            placeholder="Enter your new password"
            id="password"
            type="password"
            ></input>
        </div>
        <button
            type="submit"
            className="mt-8 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-orange-500 text-white text-lg font-bold"
        >
            Confirm
        </button>
        </form>
    </div>
    )
}
