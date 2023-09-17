import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tamim | Web Developer',
  description: 'Frontend Expart with MERN Stack',
}

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Main/>
        <About/>
      </body>
    </html>
  )
}
