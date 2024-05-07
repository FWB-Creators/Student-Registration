'use client'
import { useEffect, useState, FormEvent } from 'react'
import Cookies from 'js-cookie'
import test from '../loading/page'

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
    console.log(data)
  } catch (error) {
    console.error('Error:', error)
  }
}
const Test = () => {
  const [resMessage, setResMessage] = useState('')
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Submit</button>
      </form>
      {resMessage}
      <div className="mt-20">Test user</div>
      <button onClick={testController}>Test</button>
      <div className="mt-20">Test verify</div>
      <button onClick={testVerify}>Test</button>
    </div>
  )
}

export default Test
