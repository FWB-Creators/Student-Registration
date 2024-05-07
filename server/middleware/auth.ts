import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const authToken = (req: any, res: any, next: any) => {
  const { token } = req.body
  console.log('Verify Auth Middle:', token)

  jwt.verify(
    token as string,
    process.env.SECRET_TOKEN as string,
    (err: any, decoded: any) => {
      if (err) {
        console.log('Error:', err)
        // If the token is invalid, send an error response and do not call next()
        return res.status(401).json({ message: 'Invalid token' })
      }
      console.log('Decoded:', decoded)
      // Optionally attach decoded information to the request object
      req.user = decoded
      // Since the token is valid, call next() to continue processing the request
      console.log('req.user set to:', req.user)
      next()
    }
  )
}

export default authToken
