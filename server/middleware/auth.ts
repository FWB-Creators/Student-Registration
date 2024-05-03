import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const authMiddleware = async (req, res) => {
  const token: string = req.cookies['token'] as string
  console.log('token:', token)
}

export default authMiddleware
