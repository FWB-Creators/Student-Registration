import mysql from 'mysql2'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mydb',
})

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database')
    return
  }
  console.log('Connected to the database successfully')
})

export default connection
