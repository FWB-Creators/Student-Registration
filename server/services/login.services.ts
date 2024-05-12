import dbConnection from '../database/database'

const loginStudent = async (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `SELECT * FROM studentuser WHERE Username = ? AND Password = ?`,
      [username, password],
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

const loginTeacher = async (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `SELECT * FROM teacherinfo WHERE Username = ? AND Password = ?`,
      [username, password],
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

const loginAdmin = async (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `SELECT * FROM adminuser WHERE Username = ? AND Password = ?`,
      [username, password],
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

export { loginStudent, loginTeacher, loginAdmin }
