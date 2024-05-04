import { Router } from 'express'
import dbConnection from '../database/database'
import { getUser } from '../services/user.services'

const router = Router()

router.get('/', async (req, res) => {
  console.log('User controller')

  const users = await getUser('admin', 'password')
  console.log('Users:', users)
  //   res.json({ message: 'User controller test' })
  res.json(users)
})

export default router
