import { Router } from 'express'
import {
  getAllStudentInfo,
  deleteStudentAccount,
} from '../services/admin.services'
const router = Router()

router.get('/student/info', (req, res) => {
  getAllStudentInfo()
    .then((results: any) => {
      console.log('Results:', results)
      res.json(results)
    })
    .catch((err) => {
      res.json(err)
    })
})

router.post('/student/delete', (req, res) => {
  const { User_ID } = req.body
  deleteStudentAccount(User_ID)
    .then((results: any) => {
      console.log('Results:', results)
      res.json(results)
    })
    .catch((err) => {
      res.json(err)
    })
})

export default router
