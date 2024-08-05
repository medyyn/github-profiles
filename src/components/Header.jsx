import React, { useEffect, useState } from 'react'
import Container from './Container'
import { FaMoon, FaSun } from 'react-icons/fa'

const Header = () => {
  const [theme, setTheme] = useState("light");
  useEffect (() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])

const toggleTheme = () => {
  if(theme === "light") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
  };

  return (
    <header className='py-6 border-b dark:border-b-white/15 border-b-black/15'>
        <Container>
            <div className="flex justify-between">
            <h1 className='capitalize dark:text-white font-semibold text-2xl'>
              github <p className='text-slate-500 inline-block'>
                profiles</p> </h1>
                <button onClick={toggleTheme} className='bg-black flex dark:bg-white dark:hover:bg-white/70 dark:active:bg-white/90 dark:text-black items-center gap-2 text-white hover:bg-black/70 active:bg-black/90 transition-all shadow-lg w-auto md:px-4 py-2 rounded-lg'>
                  {theme === "light" ? "Dark" : "light"}
                  {theme === "light" ? <FaMoon/> : <FaSun/>}
                </button>
            </div>
        </Container>
    </header>
  )
}

export default Header