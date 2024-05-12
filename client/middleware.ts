import { NextRequest, NextResponse } from 'next/server'

// This is a simplified example of how you might adjust the middleware

export async function middleware(req: NextRequest) {
  console.log('FE middleware:')
  const token = req.cookies.get('token')

  if (!token) {
    if (req.nextUrl.pathname === '/profile') {
      return NextResponse.redirect(new URL('/login', req.url))
    }
    console.log('No token found')
    return NextResponse.next()
  }

  if (token) {
    // console.log('Token found:', token)
    try {
      const verifyResult = await fetch('http://localhost:3001/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })

      const verifyData = await verifyResult.json()
      // console.log('Verify data:', verifyData)
      if (verifyData.message == 'Verify token') {
        // (req.nextUrl.pathname === 'login' || req.nextUrl.pathname === 'sign-up')
        const { userID } = verifyData
        // console.log('Redirect to home:', verifyData)
        // const response = NextResponse.redirect(new URL('/', req.url))
        // response.headers.append('Verify', JSON.stringify(verifyData.decoded))
        // return NextResponse.redirect(new URL('/', req.url))
        const response = NextResponse.next()
        // response.headers.append('UserID', userID)
        response.headers.append('Set-Cookie', `userID=${userID}; path=/`)

        //

        return response
        // return response
      }

      if (verifyData?.message === 'Invalid token') {
        console.log('Verify JWT:', verifyData.message)
        //I want to make cookie expire
        // console.log('Verify JWT:', verifyData.message)
        // Create a response object with a 401 Unauthorized status
        // const response = new Response('Unauthorized', {
        //   status: 401,
        //   headers: {
        //     'Set-Cookie': [
        //       'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly',
        //       'userID=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly',
        //     ],
        //   },
        // })

        const response = NextResponse.redirect(new URL('/', req.url))

        response.headers.set(
          'Set-Cookie',
          `token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly, 
          userID=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly`
        )
        return response
      }

      return NextResponse.next()
    } catch (error) {
      console.error('Verification error:', error)
      return NextResponse.next()
    }
  }
}

// export const config = {
//   // matcher: ['/login', '/sign-up'],
// }
