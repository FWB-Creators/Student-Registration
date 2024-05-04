import dbConnection from '../database/database'

const getUser = async (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `SELECT * FROM users WHERE username = '${username}' AND password = '${password}';`,
      (err, results) => {
        if (err) {
          console.error('An error occurred:', err)
          return reject(err)
        }
        return resolve(results)
      }
    )
  })
}

export { getUser }
