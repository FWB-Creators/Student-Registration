import express, { Request, Response, NextFunction, Router } from 'express'
import cors from 'cors'
import mysql, { RowDataPacket } from 'mysql2'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import { generateAccessToken } from './lib/generateToken'
// import { verifyToken } from './lib/verifyToken'

import authToken from './middleware/auth'

import jwt from 'jsonwebtoken'
dotenv.config()

const app = express()
const port = 3001

import connection from './database/database'
// import userRoutes from './controllers/user.controllers'
import studentRoutes from './controllers/student.controllers'
import instructorRoutes from './controllers/instructor.controllers'
import departmentRoutes from './controllers/department.controllers'
import loginRoutes from './controllers/login.controllers'
import signupRoutes from './controllers/signup.controllers'
import adminRoutes from './controllers/admin.controllers'
// Use cors middleware, this will allow all CORS requests

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'mydb',
// })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
)

// app.use('/controller', authToken, userRoutes)

// app.use('/user', userRoutes)
app.use('/student', studentRoutes)
app.use('/instructor', instructorRoutes)
app.use('/department', departmentRoutes)
app.use('/login', loginRoutes)
app.use('/signup', signupRoutes)
app.use('/admin', adminRoutes)

app.get('/', (req, res, next) => {
  res.send('Hello World, test middleware')
})

// app.post('/login', (req, res, next) => {
//   //login middleware
//   const { username, password, role } = req.body
//   console.log('Login:', username, password, role)
//   connection.query(
//     `SELECT * FROM users WHERE Username = '${username}' AND password = '${password}';`,
//     (err, results) => {
//       if (err) {
//         console.log('An error occurred:', err)
//         return res.json({ message: 'An error occurred' })
//       }
//       if (Array.isArray(results) && results[0]) {
//         const user = results[0] as RowDataPacket
//         console.log('User test:', user)
//         const userInfo = {
//           User_ID: user.User_ID as number,
//           // username: user.username,
//           // role: user.role,
//         }
//         const token = generateAccessToken(userInfo)
//         console.log('Query result:', results)
//         console.log('Token:', token)
//         return res.json({ token })
//       } else {
//         console.log('Query result:', results)
//         return res.json({ message: 'Invalid username or password' })
//         // return res.json({ message: 'Invalid username or password' })
//       }

//       // return res.json({ users: results })
//     }
//   )
// })

app.post('/verify', authToken, (req: any, res, next) => {
  console.log('Verify asfas:' + req.user)
  const { user } = req.user
  const { User_ID } = user
  return res.json({ userID: `${User_ID}`, message: 'Verify token' })
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
