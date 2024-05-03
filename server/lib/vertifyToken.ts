import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const verifyToken = (token: string) => {
  // Assert that process.env.SECRET_TOKEN is not undefined
  const secret = process.env.SECRET_TOKEN as string
  if (!secret) {
    throw new Error('SECRET_TOKEN is not defined in the environment variables')
  }
  return jwt.verify(token, secret)
}
export { verifyToken }
