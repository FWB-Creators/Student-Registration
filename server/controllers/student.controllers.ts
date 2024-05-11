import { Router } from 'express'
import { getStudentInfo, getStudentCourse } from '../services/student.services'
const router = Router()

//get student info
router.post('/info', async (req, res) => {
  //token from body of req
  const { userID } = req.body
  console.log('UserID student:', userID)

  const studentInfo = await getStudentInfo(userID as number)
  console.log('Student info:', studentInfo)
  //   res.send('Student info eieis')
  res.json(studentInfo)
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
