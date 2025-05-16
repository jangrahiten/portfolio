import React from "react";
import Navbar from "./Components/navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/technologies";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
   return (
      <>
         <div className="overflow-x-hidden text-neutral-300 selection:bg-cyan-400 selection:text-cyan-900">
            <div className="fixed top-0 -z-10 h-full w-full"></div>
            <div className="absolute inset-0 -z-10 h-screen w-full items-center px-5  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] overflow-auto">
               <div className="container mx-auto px-0">
                  <Navbar />
                  <Hero />
                  <About />
                  <Technologies />
                  <Experience />
                  <Projects />
                  <Contact id={"#contact"}/>
               </div>
            </div>
         </div>
      </>
   );
};

export default App;
