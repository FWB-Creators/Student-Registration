import { Router } from 'express'
import { createStudentUser, getStudentInfo } from '../services/signup.services'
import { generateAccessToken } from '../lib/generateToken'
const router = Router()

router.post('/', async (req, res) => {
  const { Username, Password } = req.body[0]
  console.log(req.body)
  console.log('test', Username, Password)
  //   const create = await createStudentUser(username, password, 'student')
  try {
    await createStudentUser(Username, Password, 'student')

    const student = (await getStudentInfo(Username)) as any
    const user = student[0] as any
    const { User_ID, Role } = user
    const userTokenInfo = { User_ID, Role }
    const token = await generateAccessToken(userTokenInfo)

    res.json({ token, User_ID, Role }).status(200)
    // res.status(201).json({ message: 'User created successfully' })
  } catch (error: any) {
    console.error('An error occurred:', error.message)
    // Check if the error is a 'Username already exists' error
    if (error.message === 'Username already exists') {
      res.status(400).json({ message: error.message })
    } else {
      res.status(500).json({ message: 'An internal server error occurred' })
    }
  }
  //   console.log('Status:', status)
  //   console.log('Signup:', username, password)
})

export default router
