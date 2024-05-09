'use client'
import { useEffect, useState, FormEvent } from 'react'
import Cookies from 'js-cookie'
import test from '../(nav_bar)/loading/page'

const Test = () => {
  const [resMessage, setResMessage] = useState('')
  const [userInfo, setUserInfo] = useState({} as any)
  const [verifyMessage, setVerifyMessage] = useState('')

  ///
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      username: { value: string }
      password: { value: string }
    }
    console.log(target)
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
      .then((data) => {
        console.log(data)
        if (data.token) {
          console.log('Login successful')
          setResMessage('Login successful')
          //   localStorage.setItem('token', data.token)
          //   document.cookie = `token=${data.token}; path=/`
          Cookies.set('token', data.token, { path: '/' })
        } else {
          setResMessage('Login failed')
        }
      })
  }
  ///
  const testController = async () => {
    try {
      const token = Cookies.get('token')
      const res = await fetch('http://localhost:3001/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })
      // const data = await res.json()
      const data = await res.json()
      setUserInfo(data.userInfo)
      console.log(data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const testVerify = async () => {
    try {
      const token = Cookies.get('token')
      const res = await fetch('http://localhost:3001/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })
      const data = await res.json()
      setVerifyMessage(data.message)
      console.log(data)
    } catch (error) {
      console.error('Error:', error)
    }
  }
  return (
    <div>
      <section className="px-10 py-5">
        <div className="text-lg font-medium mb-6">User Login</div>
        <div className="pb-6 border-b border-black">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Submit</button>
          </form>
          {resMessage}
        </div>
      </section>
      <section className="px-10 pb-5">
        <div className="text-lg font-medium mb-6">User Info</div>
        <button
          className="border-2 border-black px-4 py-2 rounded-lg"
          onClick={testController}
        >
          Get Info
        </button>
        {userInfo && (
          <div className="mt-5">
            <div>User ID: {userInfo.User_ID}</div>
            <div>Username: {userInfo.Username}</div>
            <div>Password: {userInfo.Password}</div>
            <div>Email: {userInfo.Email}</div>
            <div>Role: {userInfo.Role}</div>
          </div>
        )}
      </section>
      <section className="px-10 pb-5">
        <div className="text-lg font-medium mb-6">Test verify</div>
        <button
          className="border-2 border-black px-4 py-2 rounded-lg"
          onClick={testVerify}
        >
          Test
        </button>
        <div className="mt-5">{verifyMessage}</div>
      </section>
    </div>
  )
}

export default Test
