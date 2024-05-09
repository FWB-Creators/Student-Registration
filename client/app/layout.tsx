import type { Metadata } from 'next'
import { Inter, Rubik } from 'next/font/google'
import Navbar from './Navigation/Navbar'
import './global.css'
const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rubik',
})

export const metadata: Metadata = {
  title: 'Student Registration | Money D Tong',
  description: 'Final project for database syllabus',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${inter.variable} ${rubik.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
