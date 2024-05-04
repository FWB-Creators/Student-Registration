import { NextRequest, NextResponse } from 'next/server'

// This is a simplified example of how you might adjust the middleware

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')

  console.log('FE middleware:', token)
  if (!token) {
    console.log('No token found')
    return NextResponse.next()
  }

  if (token) {
    console.log('Token found:', token)
    try {
      const verifyResult = await fetch('http://localhost:3001/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })

      const verifyData = await verifyResult.json()

      if (
        verifyData.decoded &&
        (req.nextUrl.pathname === '/login' ||
          req.nextUrl.pathname === 'sign-up')
      ) {
        return NextResponse.redirect(new URL('/', req.url))
      }

      if (verifyData?.message === 'Invalid token') {
        console.log('Verify JWT:', verifyData.message)
        //I want to make cookie expire
        // console.log('Verify JWT:', verifyData.message)
        // Create a response object with a 401 Unauthorized status
        const response = new Response('Unauthorized', {
          status: 401,
          headers: {
            'Set-Cookie':
              'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly',
          },
        })
        return response
      }

      return NextResponse.next()
    } catch (error) {
      console.error('Verification error:', error)
      return NextResponse.next()
    }
  }
}

export const config = {
  matcher: ['/login', '/sign-up'],
}
