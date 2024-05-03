import crypto from 'crypto'

export const generateSecret = () => {
  const secret = crypto.randomBytes(64).toString('hex') as string
  console.log(secret)
  return secret
}

generateSecret()
