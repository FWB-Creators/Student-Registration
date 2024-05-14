import { Router } from 'express'
import { getAllStudentInfo } from '../services/admin.services'
const router = Router()

router.get('/studentinfo', (req, res) => {
  getAllStudentInfo()
    .then((results: any) => {
      console.log('Results:', results)
      res.json(results)
    })
    .catch((err) => {
      res.json(err)
    })
})

export default router
