import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
      <nav className='mb-20 flex items-center justify-between py-6 px-2 '>
        <div className='flex flex-shrink-0 gap-3 items-center'>
          <div className='rounded-full bg-white h-10 w-10 sm:h-14 sm:w-14 items-center justify-center flex flex-shrink-0'>
            <FaUser className=' text-2xl sm:text-3xl'/>
          </div>
            <h1 className='font-bold text-2xl sm:text-3xl antialiased '>jangrahiten</h1>
        </div>
        <div className='flex flex-shrink-0 gap-5 items-center m-4 text-xl sm:text-3xl'>
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
