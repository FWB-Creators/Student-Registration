import { Router } from 'express'
import {
  getStudentInfo,
  getStudentCourse,
  editStudentInfo,
} from '../services/student.services'
const router = Router()

//get student info
router.post('/info', async (req, res) => {
  //token from body of req
  console.log('Req:', req.body)

  const { userID } = req.body
  console.log('UserID student:', userID)

  const studentInfo = await getStudentInfo(userID as number)
  console.log('Student info:', studentInfo)
  //   res.send('Student info eieis')
  res.json(studentInfo)
})

router.post('/editinfo', async (req, res) => {
  const {
    User_ID,
    Name,
    Surname,
    Contact,
    Address,
    Email,
    Department_ID,
    Registration_ID,
    DOB,
    ID_card,
    Sex,
    Year,
  } = req.body
  console.log(req.body)
  const status = await editStudentInfo(
    User_ID,
    Name,
    Surname,
    Contact,
    Address,
    Email,
    Department_ID,
    Registration_ID,
    DOB,
    ID_card,
    Sex,
    Year
  )
    .then((status) => {
      console.log('user info updated')
      res.json({ message: 'User info updated' })
    })
    .catch((err) => {
      console.error('An error occurred:', err)
      res.json({ message: 'An internal server error occurred' })
    })

  // Rest of your code goes here
})

//get student course
router.post('/course', async (req, res) => {
  const { userID } = req.body
  console.log('UserID student:', userID)
  const studentCourse = await getStudentCourse(userID as number)
  //   res.send('Student course')
  res.json(studentCourse)
})

export default router
