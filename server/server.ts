import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import mysql, { RowDataPacket } from 'mysql2'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import { generateAccessToken } from './lib/generateToken'
// import { verifyToken } from './lib/verifyToken'

import authMiddleware from './middleware/auth'
import jwt from 'jsonwebtoken'
dotenv.config()

const app = express()
const port = 3001

// Use cors middleware, this will allow all CORS requests

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mydb',
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
)

app.post('/login', (req, res, next) => {
  //login middleware
  const { username, password, role } = req.body
  connection.query(
    `SELECT * FROM users WHERE username = '${username}' AND password = '${password}';`,
    (err, results) => {
      if (err) {
        console.log('An error occurred:', err)
        return res.json({ message: 'An error occurred' })
      }
      if (Array.isArray(results) && results[0]) {
        const user = results[0] as RowDataPacket
        console.log('User test:', user)
        const userInfo = { username: user.username, role: user.role }
        const token = generateAccessToken(userInfo)
        console.log('Query result:', results)
        console.log('Token:', token)
        return res.json({ token })
      } else {
        console.log('Query result:', results)
        // return res.json({ message: 'Invalid username or password' })
      }

      // return res.json({ users: results })
    }
  )
})

app.post('/verify', (req, res, next) => {
  const { token } = req.body
  //extract val of jwt
  const { name, value } = token
  // console.log('Token xx: ', token)
  // console.log('Token BE: ', value)
  jwt.verify(
    value,
    process.env.SECRET_TOKEN as string,
    (err: any, decoded: any) => {
      if (err) {
        // console.log('Error:', err)
        return res.json({ message: 'Invalid token' })
      }
      console.log('Decoded:', decoded)
      return res.json({ decoded })
    }
  )
})

app.get('/api/home', (req, res, next) => {
  connection.query(
    "INSERT INTO users (username, password) VALUES ('admin', 'password');",
    (err, results) => {
      if (err) {
        console.log('An error occurred:', err)
        return res.json({ message: 'An error occurred' })
      }
      console.log('Query result:', results)
      return res.json({ users: results })
    }
  )
})
///

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
