"use client"
import './globals.css'
import { Inter } from 'next/font/google'
// import { ThemeProvider } from 'next-themes'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tamim Mahmud | Web Developer',
  description: 'Frontend Expart with MERN Stack',
}

{/*class="dark" its html tag need for dark mode*/}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
      {/*<ThemeProvider enableSystem={true} attribute='class'>
  </ThemeProvider>*/}
      {children}
      </body>
    </html>
  )
}
