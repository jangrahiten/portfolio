import React from "react";
import { HERO_CONTENT } from "../constants";
import ProfilePicture from "../assets/profilepic.jpg";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { TbBrandThreejs } from "react-icons/tb";

const Hero = () => {
   return (
      <>
         <div className="border-b border-neutral-950  pb-4 lg:mb-3.5">
            <div className="flex flex-wrap">
               <div className="w-full lg:w-1/2">
                  <div className="flex flex-col items-center lg:items-start">
                     <h1 className="pb-16 text-6xl font-thin tracking-tight  lg:mt-16 lg:text-8xl">
                        Hiten Jangra
                     </h1>
                  </div>
                  <span className="flex items-center lg:items-start bg-gradient-to-r from-purple-700 via-slate-800 to-purple-700 bg-clip-text tracking-tight text-transparent font-bold text-5xl">
                     Frontend Developer
                  </span>
                  <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-2xl">
                     {HERO_CONTENT}
                  </p>
                  <div className=""><span className="pb-16 text-4xl tracking-tight  lg:mt-16 lg:text-5xl
                  bg-gradient-to-br from-cyan-500 via-green-600 to-slate-700 bg-clip-text text-transparent font-bold">My Tech stack</span>
                    <div className="flex items-center lg:items-start flex-row gap-4 text-4xl lg:text-6xl m-2 mt-5">
                    <FaReact  className="text-cyan-500"/>
                    <SiTypescript className="text-yellow-500"/>
                    <RiNextjsFill className=""/>
                    <SiMongodb className="text-green-600"/>
                    <SiExpress className=""/>
                    <FaNodeJs className="text-green-600"/>
                    <TbBrandThreejs className=""/>
                    </div>
                    </div>
               </div>
               <div className="w-full lg:w-1/2 lg:p-8">
                  <div className="flex justify-center">
                     <img
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
