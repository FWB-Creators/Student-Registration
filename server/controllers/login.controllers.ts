import { Router } from 'express'
import jwt from 'jsonwebtoken'
import {
  loginStudent,
  loginTeacher,
  loginAdmin,
} from '../services/login.services'
import { generateAccessToken } from '../lib/generateToken'

const router = Router()

router.post('/student', async (req, res) => {
  const { username, password } = req.body
  const student = (await loginStudent(username, password)) as any
  //   const student: any[] = (await loginStudent('john_doe', 'password123')) as any
  if (Array.isArray(student) && student.length > 0) {
    console.log('Student:', student)
    const user = student[0] as any
    const { Username, Password, User_ID, Role } = user
    const userTokenInfo = { User_ID, Role }
    const token = await generateAccessToken(userTokenInfo)

    console.log('Token:', token)
    return res.json({ token, User_ID }).status(200)
  }
  return res.json({ message: 'Invalid username or password' }).status(401)
})

router.post('/teacher', async (req, res) => {
  const { username, password } = req.body
  const teacher = await loginTeacher(username, password)
  if (Array.isArray(teacher) && teacher.length > 0) {
    const user = teacher[0] as any
    const { Username, Password, User_ID, Role } = user
    const userTokenInfo = { User_ID, Role }
    const token = await generateAccessToken(userTokenInfo)
    return res.json({ token, User_ID }).status(200)
  }
  return res.json({ message: 'Invalid username or password' }).status(401)
})

router.post('/admin', async (req, res) => {
  const { username, password } = req.body
  const admin = await loginAdmin(username, password)
  if (Array.isArray(admin) && admin.length > 0) {
    const user = admin[0] as any
    const { Username, Password, User_ID, Role } = user
    const userTokenInfo = { User_ID, Role }
    const token = await generateAccessToken(userTokenInfo)
    return res.json({ token, User_ID }).status(200)
  }
  return res.json({ message: 'Invalid username or password' }).status(401)
})

export default router
