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
        <div className='flex flex-shrink-0 items-center gap-3'>
          <div className='rounded-full bg-white h-14 w-14 items-center justify-center flex flex-shrink-0'>
            <FaUser className='text-4xl'/>
          </div>
            <h1 className='font-bold text-4xl antialiased '>jangrahiten</h1>
        </div>
        <div className='flex flex-shrink-0 gap-5 items-center m-4 text-4xl'>
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
