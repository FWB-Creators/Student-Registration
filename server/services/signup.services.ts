import dbConnection from '../database/database'

const createStudentUser = async (
  username: string,
  password: string,
  role: string
) => {
  return new Promise((resolve, reject) => {
    // Check if the username already exists
    dbConnection.query(
      `SELECT * FROM studentuser WHERE Username = ?;`,
      [username],
      (selectErr, selectResults) => {
        if (selectErr) {
          console.error('An error occurred during username check:', selectErr)
          return reject(selectErr)
        }

        if (Array.isArray(selectResults) && selectResults.length > 0) {
          return reject(new Error('Username already exists'))
        }

        // If the username does not exist, insert the new user
        dbConnection.query(
          `
          INSERT INTO studentinfo (Name, Surname, Contact, Address, Email, Department_ID, Registration_ID, DOB, ID_card, Sex, Year)
          VALUES (NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
          `,
          (insertErr, insertResults) => {
            if (insertErr) {
              console.error(
                'An error occurred during user creation:',
                insertErr
              )
              return reject(insertErr)
            }

            dbConnection.query(
              `SELECT LAST_INSERT_ID() AS User_ID;`,
              (selectErr, selectResults) => {
                if (selectErr) {
                  console.error(
                    'An error occurred during ID retrieval:',
                    selectErr
                  )
                  return reject(selectErr)
                }
                const userId = (selectResults as any)[0].User_ID

                dbConnection.query(
                  `
                  INSERT INTO studentuser (Username, Password, User_ID, Role)
                  VALUES (?, ?, ?, ?);
                  `,
                  [username, password, userId, role],
                  (insertUserErr, insertUserResults) => {
                    if (insertUserErr) {
                      console.error(
                        'An error occurred during user creation:',
                        insertUserErr
                      )
                      return reject(insertUserErr)
                    }
                    return resolve(insertUserResults)
                  }
                )
              }
            )
          }
        )
      }
    )
  })
}

const getStudentInfo = async (username: string) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `SELECT * FROM studentuser WHERE Username = ?;`,
      [username],
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

export { createStudentUser, getStudentInfo }
