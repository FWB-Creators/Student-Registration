import dbConnection from '../database/database'

interface StudentInfo {
  Name: string
  Surname: string
  Contact: string
  Address: string
  Email: string
  Department_ID: string
  Registration_ID: string
  DOB: string
  ID_card: string
  Sex: string
}
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

const editStudentInfo = async (
  user_ID: number,
  name: string,
  surname: string,
  contact: string,
  address: string,
  email: string,
  departmentId: string,
  registrationId: string,
  dob: string,
  idCard: string,
  sex: string,
  year: number
) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `
      UPDATE studentinfo
      SET Name = ?, Surname = ?, Contact = ?, Address = ?, Email = ?, Department_ID = ?, Registration_ID = ?, DOB = ?, ID_card = ?, Sex = ?, Year = ?
      WHERE User_ID = ?;`,
      [
        name,
        surname,
        contact,
        address,
        email,
        departmentId,
        registrationId,
        dob,
        idCard,
        sex,
        year,
        user_ID,
      ],
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

export { getStudentInfo, getStudentCourse, editStudentInfo }
