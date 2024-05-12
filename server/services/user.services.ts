import dbConnection from '../database/database'

const getUserInfo = async (userId: number) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `SELECT * FROM users WHERE User_ID = ?`,
      [userId],
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

const createUser = async (
  username: string,
  password: string,
  email: string,
  role: string
) => {
  return new Promise((resolve, reject) => {
    // First, check if the username already exists
    dbConnection.query(
      `SELECT * FROM users WHERE Username = ?`,
      [username],
      (err, results) => {
        if (err) {
          console.error('An error occurred while checking for duplicates:', err)
          return reject(err)
        }
        if (Array.isArray(results) && results.length > 0) {
          // If a user with the same username is found, reject the promise
          return reject(new Error('Username already exists'))
        } else {
          // If no user is found, proceed with inserting the new user

          dbConnection.query(
            `INSERT INTO users (Username, Password, Email, Role) VALUES (?, ?, ?, ?);
              SELECT LAST_INSERT_ID() AS User_ID;

              INSERT INTO teacherinfo (User_ID, other_column)
              
            `,
            [username, password, email, role],
            (insertErr, insertResults) => {
              if (insertErr) {
                console.error(
                  'An error occurred during user creation:',
                  insertErr
                )
                return reject(insertErr)
              }
              return resolve(insertResults)
            }
          )
        }
      }
    )
  })
}

const updateUser = async (username: string, password: string, role: string) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `UPDATE users SET password = ?, role = ? WHERE username = ?;`,
      [password, role, username],
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

export { getUserInfo, createUser, updateUser }
