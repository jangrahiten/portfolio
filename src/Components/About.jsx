import React, { useState } from "react";
import { ABOUT_TEXT } from "../constants";
import { motion, AnimatePresence  } from "motion/react";

const About = () => {
  const [aboutText, setAboutText] = useState(ABOUT_TEXT.Introduction);

  const changeText = (key) => {
    setAboutText(ABOUT_TEXT[key]);
    console.log(key);
  };

  return (
    <div className="border-b mt-10 border-neutral-400 pb-4 transition-all ease-in-out duration-1000">
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:p-8">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full">
            {/* Buttons */}
            <motion.div 
            whileInView={{x:0, opacity:1}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.5}}
            className="flex flex-row gap-1 lg:gap-4">
              {Object.entries(ABOUT_TEXT).map(([key, value], index) => (
                <button
                  key={index}
                  className="text-white bg-[#ffffff13] rounded-3xl font-bold lg:text-3xl px-4 lg:px-6 py-1 lg:py-2 w-full sm:w-auto lg:min-w-[5vw]"
                  onClick={() => changeText(key)}
                >
                  {key}
                </button>
              ))}
            </motion.div>
          </div>
          <motion.div
            layout
            transition={{ layout: { duration: 0.6, ease: "easeInOut" } }}
            className="overflow-hidden mt-6 rounded-xl p-4"
          >
            <AnimatePresence mode="wait">
              {aboutText && (
                <motion.p
                  key={aboutText}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.1, duration: 0.25 }}
                  className="text-lg flex justify-center"
                >
                  {aboutText}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;