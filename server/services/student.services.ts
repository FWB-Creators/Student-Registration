import dbConnection from '../database/database'

const getStudentInfo = async (studentId: number) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `SELECT * FROM studentinfo WHERE studentinfo.User_ID = ?`,
      [studentId],
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

const getStudentCourse = async (studentId: number) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `SELECT * 
      FROM course
      WHERE course.Course_ID IN (
          SELECT Course_ID 
          FROM courseregistration
          WHERE Registration_ID IN (
              SELECT Registration_ID 
              FROM registration
              WHERE Registration_ID IN (
                  SELECT Registration_ID 
                  FROM studentinfo 
                  WHERE User_ID = ?
              )
          )
      );`,
      [studentId],
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

export { getStudentInfo, getStudentCourse }
