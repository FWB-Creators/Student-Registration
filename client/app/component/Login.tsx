'use client'
import Cookies from 'js-cookie'
import { use, useState } from 'react'
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
      <h1 className="text-5xl font-semibold">Student Log in</h1>
      <p className="font-medium text-xl text-gray-500 mt-4">Welcome back!</p>
      {resMessage}
      <form onSubmit={handleLogin} className="mt-8">
        <div className='my-2'>
          <label className="text-lg font-medium">Username</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-tranparent"
            id="username"
            placeholder="Enter your username"
          ></input>
        </div>
        <div className='mt-2'>
          <label className="text-lg font-medium">Password</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-tranparent"
            placeholder="Enter your password"
            id="password"
            type="password"
          ></input>
        </div>
        <button
          type="submit"
          className="mt-8 w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-orange-500 text-white text-lg font-bold"
        >
          Log in
        </button>
        <div className="mt-8 flex justify-between item-center">
          <div>
            <input
              className="accent-orange-500"
              type="checkbox"
              placeholder="Remember for 30 days"
              id="remember"
            ></input>
            <label className="ml-2 font-medium text-base">
              Remember for 30 days
            </label>
          </div>
          <button className="font-medium text-base text-orange-500">
            Forgot password
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <div className="flex justify-center gap-8">
            <button className="flex rounded-full py-3 border-2 border-gray-100 item-center justify-center gap-2 px-8 transition duration-300 ease-in-out hover:bg-gray-100">
              <svg
                className="mt-0.5 ml-0.5"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="27"
                height="27"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              {/* Sign in with Google */}
            </button>
            <button className="flex rounded-full py-3 border-2 border-gray-100 item-center justify-center gap-2 px-8 transition duration-300 ease-in-out hover:bg-gray-100">
              <svg
                className="ml-0.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
              >
                <path
                  fill="#1877F2"
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.95 3.625 9.025 8.375 9.775v-6.934H7.625V12h2.75V9.844c0-2.723 1.621-4.225 4.111-4.225 1.188 0 2.276.088 2.575.125v2.75h-1.75c-1.388 0-1.625.656-1.625 1.594V12h3.375l-.625 3.842h-2.75v6.934C18.375 21.025 22 16.95 22 12c0-5.52-4.48-10-10-10z"
                />
              </svg>
              {/* Sign in with Facebook */}
            </button>
            <button className="flex rounded-full py-3 border-2 border-gray-100 item-center justify-center gap-2 px-8 transition duration-300 ease-in-out hover:bg-gray-100">
              <svg
                className="mt-0.5 ml-0.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="25"
                height="25"
              >
                <path
                  fill="#000000"
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.385.6.11.793-.261.793-.577 0-.285-.012-1.231-.017-2.235-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.755-1.332-1.755-1.088-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.303 3.495.997.108-.779.42-1.31.763-1.61-2.675-.303-5.487-1.337-5.487-5.93 0-1.31.468-2.384 1.235-3.226-.124-.302-.536-1.526.117-3.18 0 0 1.008-.324 3.3 1.23.957-.267 1.982-.4 3-.405 1.016.005 2.039.138 2.998.405 2.29-1.554 3.296-1.23 3.296-1.23.656 1.654.242 2.878.118 3.18.77.842 1.234 1.916 1.234 3.226 0 4.604-2.816 5.624-5.489 5.922.43.369.818 1.102.818 2.22 0 1.604-.015 2.894-.015 3.287 0 .32.192.694.8.576C20.565 21.797 24 17.302 24 12c0-6.627-5.373-12-12-12"
                ></path>
              </svg>
              {/* Sign in with Github */}
            </button>
          </div>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base">Don't have an account?</p>
          <button className="text-orange-500 text-base font-medium ml-2">
            Sign up
          </button>
        </div>
      </form>
    </div>
  )
}
