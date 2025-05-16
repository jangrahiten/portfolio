import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'motion/react'



const Projects = () => {
  return ( 
    <div className='border-b border-neutral-400 pb-4'>
      <h2 className='my-20 text-center text-4xl font-bold drop-shadow-md'>Projects</h2>
      <div>
        {PROJECTS.map((e,index)=>{
            return (
                <div key={index} className='mb-8 gap-4 flex flex-wrap lg:justify-center'>
                    <motion.div className="w-full lg:w-1/4">
                        <motion.img
                        whileInView={{x:0, opacity:1}}
                        initial={{x:-100, opacity:0}}
                        transition={{duration:1}}
                        src={e.image} alt={e.title} className='mb-6'/>
                    </motion.div>
                    <motion.div
                    whileInView={{x:0, opacity:1}}
                    initial={{x:-100, opacity:0}} 
                    transition={{duration:1}} 
                    className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-bold'>{e.title}</h6>
                        <p className='mb-4'>{e.description}</p>
                        <motion.div className='flex flex-wrap gap-2'>
                            {e.technologies.map((e,index)=>{
                                return (
                                    <div key={index} className="mt-2 font-medium text-sm text-purple-500 bg-purple-950 py-1 px-2 rounded-md">{e}</div>
                                )
                            })}
                        </motion.div>
                    </motion.div>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Projects
