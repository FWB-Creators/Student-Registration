import express from 'express'
import cors from 'cors'
import mysql from 'mysql2'
import bodyParser from 'body-parser'
import jwt from 'jwt-simple'
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
  const { username, password } = req.body
  connection.query(
    `SELECT * FROM users WHERE username = '${username}' AND password = '${password}';`,
    (err, results) => {
      if (err) {
        console.log('An error occurred:', err)
        return res.json({ message: 'An error occurred' })
      }
      if (Array.isArray(results)) {
        console.log('Query result:', results.length)
      } else {
        console.log('Query result:', results)
      }
      // const payload = {
      //   sub: results[0],
      //   iat: Date.now(),
      // }
      // const SecretKey = 'billysudlhor'
      // const token = jwt.encode(payload, SecretKey)
      // return res.json({ token })
      return res.json({ users: results })
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
