import { Router } from 'express'
const router = Router()

router.get('/info', (req, res) => {
  res.send('Instructor')
})

export default router
