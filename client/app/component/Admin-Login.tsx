'use client'
import Cookies from 'js-cookie'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
export default function Login() {
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

    fetch('http://localhost:3001/login/teacher', {
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
          console.log('Token:', status.token)
          setResMessage('Login successful')

          Cookies.set('token', status.token, { path: '/' })
          Cookies.set('userID', status.userID, { path: '/' })
          Cookies.set('role', 'admin', { path: '/' })
          router.push('/')
        } else {
          console.log('Login failed')
          setResMessage('Login failed')
        }
      })
  }

  return (
    <div className="bg-white px-16 py-12 rounded-3xl border-2 border-gray-100 ">
      <h1 className="text-3xl font-semibold">Admin Log in</h1>
      <p className="text-lg text-gray-500 mt-1">Welcome back!</p>
      {resMessage}
      <form onSubmit={handleLogin} className="mt-6">
        <div className="my-2">
          <label className="text-base font-medium">Username</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 my-2 bg-tranparent"
            id="username"
            placeholder="Enter your username"
          ></input>
        </div>
        <div className="mt-2">
          <label className="text-base font-medium">Password</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 my-2 bg-tranparent"
            placeholder="Enter your password"
            id="password"
            type="password"
          ></input>
        </div>
        <div className="mt-2 flex justify-end items-center">
          <button className="font-medium text-sm text-orange-primary">
            Forgot password?
          </button>
        </div>
        <button
          type="submit"
          className="mt-4 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-orange-500 text-white text-lg font-bold"
        >
          Log in
        </button>

        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base">Don't have an account?</p>
          <Link
            href="/sign-up"
            className="text-orange-primary text-base font-medium ml-2"
          >
            Sign up
          </Link>
        </div>
      </form>
    </div>
  )
}
