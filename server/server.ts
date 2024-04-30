import express from 'express'

//import express type
const app = express()
const port = 3001

app.get('/api/home', (req, res) => {
  res.json({ message: 'Hello from the server!' })
})

app.listen(port, () => {
  console.log(`Sup Nig! Server is running on port ${port}`)
})
