import express from 'express'
import cors from 'cors'

const app = express()
const port = 3001

// Use cors middleware, this will allow all CORS requests
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
)

app.get('/api/home', (req, res) => {
  res.json({ message: 'Hello from the server!' })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
