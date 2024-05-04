import { Router } from 'express'
import dbConnection from '../database/database'
import { getUserInfo } from '../services/user.services'
// import auth from '../middleware/auth'

import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

interface User {
  userid: number
  username: string
  password: string
  role: string
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
      return decoded.user.userid as number
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
})

export default router
