import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const authToken = async (req: any, res: any, next: any) => {
  const { token } = req.body
  //extract val of jwt
  console.log('Verify Auth Middle:', token)
  const { name, value } = token

  jwt.verify(
    token as string,
    process.env.SECRET_TOKEN as string,
    (err: any, decoded: any) => {
      if (err) {
        console.log('Error:', err)
        return res.json({ message: 'Invalid token' })
      }
      console.log('Decoded:', decoded)
      // next()
      return res.json({ message: decoded })
    }
  )
}

export default authToken
