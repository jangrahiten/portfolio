import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'motion/react'

const Experience = () => {
  return (
    <div className='border-b border-neutral-400 pb-4'>
      <h2 className='my-20 text-center text-4xl font-bold drop-shadow-md'>Experience</h2>
      <div>
      {EXPERIENCES.map((elem, index) => {
        return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div
                    whileInView={{x:0, opacity:1}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1}}
                className="w-full lg:w-1/4">
                    <p>{elem.year}</p>
                </motion.div>
                <motion.div
                whileInView={{x:0, opacity:1}}
                initial={{x:100, opacity:0}}
                transition={{duration:1}}
                className="w-full max-w-xl lg:w-3/4">
                <h6 className='mb-2 font-bold text-xl'>{elem.role} - <span className='font-semibold'>{elem.company}</span></h6>
                <p>{elem.description}</p>

                <div className='flex flex-wrap gap-2'>
                    {elem.technologies.map((e,index)=>{
                        return (
                            <div key={index} className="mt-2 font-medium text-sm text-purple-500 bg-purple-950 py-1 px-2 rounded-md">{e}</div>
                        )
                    })}
                </div>
                </motion.div>
            </div>
        );
    })}

      </div>
    </div>
  )
}

export default Experience
