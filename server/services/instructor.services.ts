import dbConnection from '../database/database'
const getAllInstructorsInfo = async () => {
  return new Promise((resolve, reject) => {
    dbConnection.query(`SELECT * FROM teacherinfo`, (err, results) => {
      if (err) {
        console.error('An error occurred:', err)
        return reject(err)
      }
      return resolve(results)
    })
  })
}

export { getAllInstructorsInfo }
