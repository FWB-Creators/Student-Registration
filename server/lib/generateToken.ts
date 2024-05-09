import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

interface User {
  User_ID: number
}
const generateAccessToken = (user: User) => {
  // Assert that process.env.SECRET_TOKEN is not undefined

  const secret = process.env.SECRET_TOKEN as string
  if (!secret) {
    throw new Error('SECRET_TOKEN is not defined in the environment variables')
  }
  return jwt.sign({ user }, secret, { expiresIn: '30m' })
}

export { generateAccessToken }
