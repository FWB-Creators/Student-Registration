import type { Metadata } from 'next'
import { Inter, Rubik } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const rubik = Rubik({ subsets: ['latin'] })

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
      <body className={`${inter.className} ${rubik.className}`}>
        {children}
      </body>
    </html>
  )
}
