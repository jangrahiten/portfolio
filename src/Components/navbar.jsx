import { useState } from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { hover, motion } from 'motion/react';

const Navbar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <nav className='mb-5 flex items-center justify-between py-6 px-2 '>
        <motion.div className={`flex flex-col font-bold  flex-shrink-0 gap-3 items-center text-4xl py-2 px-4 rounded`} onHoverStart={()=>setHovered(true)} onHoverEnd={()=>setHovered(false)}>
          <a href="/#contact" className={`${hovered ? 'text-blue-600' : ''} transition-all duration-500 ease-in-out`}>Contact Me</a>
          <div className={`border-t-4 border-[#1C2536] rounded-xl transition-all duration-500 ease-in-out ${hovered ? 'w-full' : 'w-0'}`}></div>
        </motion.div>
        <div className='flex flex-shrink-0 gap-5 items-center m-4 text-xl sm:text-3xl'>
            <a href="https://www.linkedin.com/in/jangrahiten/"><FaLinkedinIn className='text-4xl'/></a>
            <a href="https://github.com/jangrahiten"><FaGithub className='text-4xl'/></a>
            
            {/* <FaXTwitter/> */}
            {/* <FaInstagram/> */}
        </div>
      </nav>
    </>
  )
}

export default Navbar
