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

export { getAllStudentInfo }
