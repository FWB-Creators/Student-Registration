import auth from 'basic-auth'

const myAuth = (req, res, next) => {
  console.log('auth middleware')
  const user = auth(req)
  const username: string = 'admin'
  const password: string = 'password'

  if (
    user.name.toLowerCase() === username.toLowerCase() &&
    user.pass === password
  ) {
    console.log('Basic authentication successful')
    next()
  } else {
    res.status(401).send('Unauthorized')
    res.end('Access denied')
  }
}

export default myAuth
