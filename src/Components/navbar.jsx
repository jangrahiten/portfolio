import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <nav className='mb-20 flex items-center justify-between py-6 px-2 bg-red-600'>
        <div className='flex flex-shrink-0 items-center'>
            <h1 className='font-bold text-5xl text-white '>HJ</h1>
        </div>
        <div className='flex flex-shrink-0 gap-5 items-center m-4 text-5xl text-white'>
            <FaLinkedinIn className=''/>
            <FaGithub/>
            <FaXTwitter/>
            <FaInstagram/>
        </div>
      </nav>
    </>
  )
}

export default Navbar
