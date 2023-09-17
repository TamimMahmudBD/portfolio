"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail} from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='flex w-full h-14 shadow-xl z-[100] md:px-14'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <div>
          <Image src='/assets/logo.png' alt='/' width='130' className='md:h-[28px] md:w-[120px] h-[25px] w-[100px]' height='20' />
        </div>
        <div className='hidden md:flex'>
          <Link href='/'> <li className='ml-10 text-sm uppercase hover:border-b '>Home</li></Link>
          <Link href='/'> <li className='ml-10 text-sm uppercase hover:border-b '>About</li></Link>
          <Link href='/'> <li className='ml-10 text-sm uppercase hover:border-b '>Skills</li></Link>
          <Link href='/'> <li className='ml-10 text-sm uppercase hover:border-b '>Project</li></Link>
          <Link href='/'> <li className='ml-10 text-sm uppercase hover:border-b '>Contact</li></Link>
        </div>
        <div onClick={handleNav} className='md:hidden rounded-full shadow-xl shadow-gray p-3 cursor-pointer'>
          <AiOutlineMenu />
        </div>
      </div>


      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ' : ''}>
        <div className={nav ? 'md:hidden px-4 fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] ease-in duration-500' : 'px-4 fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] ease-in duration-500'}>
          <div className=''>
            <div className=' pt-3 flex w-full items-center justify-between'>
              <div>
                <Image src='/assets/logo.png' alt='/' width='130' className='md:h-[28px] md:w-[100px] h-[20px] w-[80px]' height='20' />
                <p className=' text-sm'>Let's buld your dream</p>
              </div>
              <div onClick={handleNav} className='rounded-full shadow-xl shadow-gray p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 mt-2'> </div>
          </div>
          <div className='py-4'>
            <ul className='capitalize'>
              <Link href='/'><li className='py-4 text-sm'>Home</li></Link>
              <Link href='/'><li className='py-4 text-sm'>About</li></Link>
              <Link href='/'><li className='py-4 text-sm'>Skills</li></Link>
              <Link href='/'><li className='py-4 text-sm'>Project</li></Link>
              <Link href='/'><li className='py-4 text-sm'>Contact</li></Link>
            </ul>
            <div className='pt-10 uppercase tracking-widest text-[#0f0f0ffa]'>
              <p>Let's Connect</p>
              <div className='flex justify-between my-4 w-[80%]'>
                <div className='rounded-full shadow-xl shadow-gray p-3 cursor-pointer hover:cals-105 ease-in duration-300'>
                  <FaLinkedin />
                </div>
                <div className='rounded-full shadow-xl shadow-gray p-3 cursor-pointer hover:cals-105 ease-in duration-300'>
                  <FaGithub />
                </div>
                <div className='rounded-full shadow-xl shadow-gray p-3 cursor-pointer hover:cals-105 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-xl shadow-gray p-3 cursor-pointer hover:cals-105 ease-in duration-300'>
                  <BsPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar