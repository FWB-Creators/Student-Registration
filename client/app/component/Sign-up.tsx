'use client'
import Cookies from 'js-cookie'
import { use, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignUp() {
  const [resMessage, setResMessage] = useState('')
  const router = useRouter()
  const handleSignUp = async (event: any) => {
    event.preventDefault()
    console.log('hi')
    const target = event.target as typeof event.target & {
      username: { value: string }
      password: { value: string }
      email: { value: string }
    }
    const username = target.username.value
    const password = target.password.value
    const email = target.email.value
    console.log(username, password, email)
    const data = { username, password, email }

    fetch('http://localhost:3001/user/signup', {
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
    <div className="bg-white px-16 py-12 rounded-3xl border-2 border-gray-100 ">
      <h1 className="text-3xl font-semibold">Student Sign Up</h1>
      <p className=" text-lg text-gray-500 mt-1">Welcome!</p>
      {resMessage}
      <form onSubmit={handleSignUp} className="mt-6">
        <div className="my-2">
          <label className="text-base font-medium">Email</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 my-2 bg-tranparent"
            id="email"
            placeholder="username@gmail.com"
            type="email"
          ></input>
        </div>
        <div className="my-2">
          <label className="text-base font-medium">Username</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 my-2 bg-tranparent"
            id="username"
            placeholder="Enter your username"
            type="text"
          ></input>
        </div>
        <div className="my-2">
          <label className="text-base font-medium">Password</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 my-2 bg-tranparent"
            placeholder="Enter your password"
            id="password"
            type="password"
          ></input>
        </div>
        <button
          type="submit"
          className="mt-4 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-orange-500 text-white text-lg font-bold"
        >
          Sign up
        </button>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base">Already has an account?</p>
          <Link
            href="/login"
            className="text-orange-primary text-base font-medium ml-2"
          >
            Log in
          </Link>
        </div>
      </form>
    </div>
  )
}
