import { Router } from 'express'
import dbConnection from '../database/database'
import { createUser, getUserInfo } from '../services/user.services'
// import auth from '../middleware/auth'

import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

interface User {
  User_ID: number
  Username: string
  Password: string
  Email: string
  Role: string
}

const router = Router()

router.post('/', async (req, res) => {
  const { token } = req.body
  console.log('Token:', token)
  const userId = await jwt.verify(
    token as string,
    process.env.SECRET_TOKEN as string,
    (err: any, decoded: any) => {
      if (err) {
        return null
        // return { message: 'Invalid token' }
      }
      console.log('Decoded:', decoded)
      return decoded.user.User_ID as number
      //   return { message: decoded }
    }
  )

  console.log('User ID:', userId)
  if (typeof userId === 'number') {
    const users = (await getUserInfo(userId)) as User[]
    console.log('Users:', users)
    const userInfo = users[0] as User
    return res.json({ userInfo })
  }
  return res.json({ message: 'Invalid token' }).status(401)
})

router.post('/signup', async (req, res) => {
  const { username, password, email } = req.body
  console.log('Signup:', username, password, email)
  try {
    await createUser(username, password, email, 'student')
    return res.json({ message: 'User created' })
  } catch (err) {
    return res.json({ message: 'error' })
  }
})

export default router
