import dbConnection from '../database/database'

const getAllStudentInfo = async () => {
  return new Promise((resolve, reject) => {
    dbConnection.query(`SELECT * FROM studentinfo`, (err, results) => {
      if (err) {
        console.error('An error occurred:', err)
        return reject(err)
      }
      return resolve(results)
    })
  })
}

const deleteStudentAccount = async (studentId: number) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `DELETE FROM studentuser WHERE User_ID = ?`,
      [studentId],
      (err, results) => {
        if (err) {
          console.error('An error occurred:', err)
          return reject(err)
        }

        dbConnection.query(
          `DELETE FROM studentinfo WHERE User_ID = ?`,
          [studentId],
          (err, results) => {
            if (err) {
              console.error('An error occurred:', err)
              return reject(err)
            }
            return resolve(results)
          }
        )
      }
    )
  })
}

export { getAllStudentInfo, deleteStudentAccount }
