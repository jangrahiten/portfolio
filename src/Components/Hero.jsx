import React from "react";
import { HERO_CONTENT } from "../constants";
import ProfilePicture from "../assets/profilepic.jpg";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { motion } from "motion/react";

const container = (delay) =>(
   {
      hidden: {x:-100, opacity:0},
      visible: {x:0, opacity:1, transition: {duration:0.5, delay: delay}}
   }
)

const Hero = () => {
   return (
      <>
         <div className="border-b border-neutral-400  pb-4 lg:mb-3.5">
            <div className="flex flex-wrap">
               <div className="w-full lg:w-1/2 justify-center text-center">
                  <div className="flex flex-col items-center lg:items-start">
                     <motion.h1 
                     variants={container(0.5)}
                     initial="hidden"
                     animate="visible"
                     className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                        Hiten Jangra
                     </motion.h1>
                  </div>
                  <motion.span 
                  variants={container(0.5)}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center lg:items-start bg-purple-700 bg-clip-text tracking-tight text-transparent font-bold text-4xl justify-center lg:justify-start lg:text-5xl">
                     Fullstack Developer
                  </motion.span>
                  <motion.p 
                  variants={container(1)}
                  initial="hidden"
                  animate="visible"
                  className="my-2 w-full lg:max-w-xl py-6 font-light tracking-tighter text-2xl text-center lg:text-start lg:text-3xl">
                        {HERO_CONTENT}
                     </motion.p>
                  <motion.div 
                  variants={container(1.5)}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col w-full pb-10 items-center lg:items-baseline"><span className="text-5xl tracking-tight text-center lg:mt-10 lg:text-6xl
                  bg-gradient-to-br from-cyan-500 via-green-600 to-slate-700 bg-clip-text text-transparent font-bold">Current Stack</span>
                    <div className="flex items-center lg:items-start flex-row gap-4 text-5xl lg:text-6xl m-2 mt-5">
                    <SiMongodb className="text-green-600"/>
                    <SiExpress className=""/>
                    <FaReact  className="text-cyan-500"/>
                    <FaNodeJs className="text-green-600"/>
                    <RiNextjsFill className=""/>
                    </div>
                    </motion.div>
               </div>
               <div className="w-full hidden lg:block lg:w-1/2 lg:p-8">
                  <div className="flex justify-center">
                     <motion.img
                     initial={{x:100, opacity:0}}
                     animate={{x:0, opacity:1}}
                     transition={{delay:1.2,duration:1}}
                        src={ProfilePicture}
                        alt="image"
                        className="lg:h-full rounded-lg lg:size-full size-80"
                     />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Hero;
