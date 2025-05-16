import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { DiRedis } from 'react-icons/di'
import { FaNodeJs, FaAws } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { motion } from 'motion/react'
import { easeIn } from 'motion'

const iconVarients = (duration)=>({
  initial: {y:-10},
  final: {
    y: [10,-20], 
    transition:{
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-400 pb-4'>
      <h2 className='my-20 text-center text-4xl font-bold drop-shadow-md'>Technologies</h2>
      <h2></h2>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <motion.div 
        variants={iconVarients(2.5)}
        initial="initial"
        animate="final"
        className="rounded-2xl border-neutral-700 border-4 p-4">
            <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>
        <motion.div 
        variants={iconVarients(3)}
        initial="initial"
        animate="final"
        className="rounded-2xl border-neutral-700 border-4 p-4">
            <TbBrandNextjs className='text-7xl' />
        </motion.div>
        <motion.div 
        variants={iconVarients(5)}
        initial="initial"
        animate="final"
        className="rounded-2xl border-neutral-700 border-4 p-4">
            <SiMongodb className='text-7xl text-green-600' />
        </motion.div>
        <motion.div 
        variants={iconVarients(3)}
        initial="initial"
        animate="final"
        className="rounded-2xl border-neutral-700 border-4 p-4">
            <DiRedis className='text-7xl text-red-600' />
        </motion.div>
        <motion.div 
        variants={iconVarients(6)}
        initial="initial"
        animate="final"
        className="rounded-2xl border-neutral-700 border-4 p-4">
            <FaNodeJs className='text-7xl text-green-700' />
        </motion.div>
        <motion.div 
        variants={iconVarients(4)}
        initial="initial"
        animate="final"
        className="rounded-2xl border-neutral-700 border-4 p-4">
            <BiLogoPostgresql className='text-7xl text-blue-400' />
        </motion.div>
        <motion.div 
        variants={iconVarients(3)}
        initial="initial"
        animate="final"
        className="rounded-2xl border-neutral-700 border-4 p-4">
            <FaAws className='text-7xl text-yellow-700' />
        </motion.div>
      </div>
    </div>
  )
}

export default Technologies
