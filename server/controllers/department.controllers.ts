import { Router } from 'express'
import { getAllDepartmentInfo } from '../services/department.services'
const router = Router()

//get all departments
router.get('/info', async (req, res) => {
  const departments = await getAllDepartmentInfo()
  res.json(departments)
})

export default router
