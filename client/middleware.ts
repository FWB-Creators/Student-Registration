import { NextRequest, NextResponse } from 'next/server'

// This is a simplified example of how you might adjust the middleware
export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')
  // const token = Cookies.get('token')
  // const token = (await req.cookies['token']) as string
  console.log('Token (Middleware):', token)

  // if (!token) {
  //   return new Response('Unauthorized', { status: 401 })
  // }

  try {
    const verifyResult = await fetch('http://localhost:3001/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    })

    const verifyData = await verifyResult.json()
    console.log('Verify data:', verifyData)
    // if (!verifyResult.ok) {
    //   // Handle verification failure
    //   return new Response('Unauthorized', { status: 401 })
    // }

    // Proceed with the request if the token is verified
    return NextResponse.next()
  } catch (error) {
    console.error('Verification error:')
    return NextResponse.next()
    // return new Response('Internal Server Error', { status: 500 })
  }
}
