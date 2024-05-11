import Cookies from 'js-cookie'
const userLogout = () => {
  Cookies.remove('token', { path: '/' })
  Cookies.remove('userID', { path: '/' })
  return { message: 'Logout successful' }
}

export { userLogout }
