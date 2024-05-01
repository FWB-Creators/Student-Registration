import express from 'express'
import cors from 'cors'
import mysql from 'mysql2'

const app = express()
const port = 3001

// Use cors middleware, this will allow all CORS requests

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mydb',
})

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
)

app.get('/api/home', (req, res, next) => {
  connection.query('Select * from users', (err, results) => {
    if (err) {
      console.log('An error occurred:', err)
      return res.json({ message: 'An error occurred' })
    }
    console.log('Query result:', results)
    return res.json({ users: results })
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
