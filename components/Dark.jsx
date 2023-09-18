"use client";
import React from 'react'
import { useState, useEffect } from 'react';
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { useTheme } from 'next-themes'

const Dark = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <div className='flex justify-center'>
            {currentTheme === 'dark' ? (
                <button
                    className='' onClick={() => setTheme('light')}
                ><BsFillSunFill />
                </button>
            ) : (<button
                className='' onClick={() => setTheme('dark')}
            ><BsMoonFill />
            </button>)}
        </div>
    )
}

export default Dark