import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex w-full h-16 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image src='/assets/logo.png' alt='/' width='130' className='md:h-[28px] md:w-[120px] h-[25px] w-[100px]' height='20' />
        <div>
          <Link href='/'> <li >Home</li></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar