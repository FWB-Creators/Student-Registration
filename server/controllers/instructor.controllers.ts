import { Router } from 'express'
import { getAllInstructorsInfo } from '../services/instructor.services'
const router = Router()

//get all instructors info
router.get('/info', async (req, res) => {
  const instructors = await getAllInstructorsInfo()
  res.json(instructors)
})

export default router
