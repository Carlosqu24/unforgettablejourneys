"use client"
import React from 'react'
import Link from 'next/link'

const Navbar = () => {

  const navbarClassnames = `
      w-full 
      h-20

      lg:px-8

      bg-[#252525] 
      fixed
      flex 
      justify-between 
      items-center
      bottom-0
      lg:top-0
      lg:bottom-auto
      lg:relative
      lg:bg-transparent

      z-50
  `

  return (
    <nav className={navbarClassnames}>
      <Link
        href="/"
        className='hidden lg:block mr-auto font-bold'
      >MyTravls</Link>

      <span>Logo</span>
    </nav>
  )
}

export default Navbar