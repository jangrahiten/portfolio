import React from "react";
import { HERO_CONTENT } from "../constants";
import ProfilePicture from "../assets/profilepic.jpg";
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
                  bg-gradient-to-br from-cyan-500 via-green-600 to-slate-700 bg-clip-text text-transparent font-bold">My Tech stack:</span>
                    <div>
                    
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
