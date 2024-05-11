import dbConnection from '../database/database'

const getAllDepartmentInfo = async () => {
  return new Promise((resolve, reject) => {
    dbConnection.query(`SELECT * FROM department`, (err, results) => {
      if (err) {
        console.error('An error occurred:', err)
        return reject(err)
      }
      return resolve(results)
    })
  })
}

export { getAllDepartmentInfo }
