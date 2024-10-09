import React from "react";
import Navbar from "./Components/navbar";
import Hero from "./Components/Hero";

const App = () => {
   return (
      <>
         <div className="overflow-x-hidden text-neutral-300 selection:bg-cyan-400 selection:text-cyan-900">
            <div className="fixed top-0 -z-10 h-full w-full"></div>
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <div className="container mx-auto px-0">
               <Navbar />
               <Hero />
            </div>
         </div>
      </>
   );
};

export default App;
