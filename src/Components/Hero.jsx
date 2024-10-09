import React from 'react'
import { HERO_CONTENT } from '../constants'
const Hero = () => {
  return (
    <>
      <div className='border-b border-neutral-950  pb-4 lg:mb-3.5'>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className='pb-16 text-6xl font-thin tracking-tight  lg:mt-16 lg:text-8xl'>Hiten Jangra</h1>
                </div>
                <span className='bg-gradient-to-r from-pink-600 via-slate-500 to-green-900 bg-clip-text text-4xl tracking-tight text-transparent font-bold '>Frontend Developer</span>
                <p className='my-2 max-w-xl py-6 font-light tracking-tighter '>
                  {HERO_CONTENT}
                </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero
