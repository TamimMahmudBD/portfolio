"use client";
import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { useState, useEffect } from 'react';
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { useTheme } from 'next-themes'
const Footer = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;
  
  return (
    <div className=' flex flex-col md:flex-row justify-between text-center p-2 md:px-16'>
      <div className='fixed right-[20px] bottom-[20px] flex justify-center'>
        {currentTheme === 'dark' ? (
          <button
            className='p-1 ' onClick={() => setTheme('light')}
          ><BsFillSunFill />
          </button>
        ) : (<button
          className='p-1 ' onClick={() => setTheme('dark')}
        ><BsMoonFill />
        </button>)}
      </div>
      <div>
        <p className='text-sm py-2 px-8 md:px-0'>© 2023 Tamim Mahmud | Web Developer | All right reserved.</p>
      </div>
      <div className="flex justify-center items-center gap-5 text-[#666666]">
        <BsFacebook />
        <BsGithub />
        <BsLinkedin />
      </div>
    </div>
  )
}

export default Footer