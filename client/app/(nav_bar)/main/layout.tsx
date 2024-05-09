import { Poppins } from 'next/font/google'
import ResponsiveNav from '../../Navigation/ResponsiveNav'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-rubik">
        <ResponsiveNav />
        {children}
      </body>
    </html>
  )
}
