import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa6";


function LandingPage() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textstructure mt-100 px-20 pt-28">
            <div className="masker">
                <h1 className='text-[5vw]  leading-[4.5vw] tracking-tighter uppercase font-medium'>DEFY THE LIMITS</h1>
            </div> 
            <div className="masker w-fit flex items-end overflow-hidden"> 
                <motion.div initial={{width: 0}} animate={{width: "8vw"}} transition={{ease: [0.76,0,0.24,1],duration:1}} className='flex justify-center items-center mr-3 ml-1 w-[8vw] rounded-md h-[3.7vw] relative bg-red-500 '><svg xmlns="http://www.w3.org/2000/svg" fill="none" height="55" viewBox="0 0 100 100" width="55" className=''><path d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z" fill="#fff"></path></svg></motion.div>
                <h1 className='text-[5vw] leading-[4.5vw]  tracking-tighter uppercase font-medium'>BATTLE 5v5</h1>
            </div>
            <div className="masker ">
                
                <h1 className='text-[5vw]  leading-[4.5vw]  tracking-tighter uppercase font-medium'>BECOME CHAMPIONS</h1>
            </div>

            

            <div className="masker flex justify-end mt-20">
                <h1 className='text-[5vw]  leading-[4.5vw] tracking-tighter uppercase font-medium'>Forced to go rogue</h1>
            </div> 
            <div className="w-full flex justify-end">
            <div className="masker w-fit flex items-end overflow-hidden">
                <h1 className='text-[5vw] leading-[4.5vw] tracking-tighter uppercase font-medium'>HUNTED FROM WITHIN</h1>
                <motion.div initial={{width: 0}} animate={{width: "8vw"}} transition={{ease: [0.76,0,0.24,1],duration:1}}  className='flex justify-center items-center ml-3 mr-1 w-[8vw] rounded-md h-[3.7vw] relative bg-green-900'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" className='w-full h-full'>
        <path d="M0 16H5V33H0zM5 16L14.011 24 22.489 16 22.489 23 14.011 31 5 23zM45 16.196H50V33.196H45zM27.489 33L36.522 25 45 33 45 26 36.522 18 27.489 26zM27.489 21.005L27.489 16 22.489 16 22.489 25.994zM22.489 28.016L22.489 33 27.489 33 27.489 23.027z" fill="currentColor"></path>
      </svg>
                </motion.div>
            </div>
            </div>
            <div className="masker flex justify-end ">
                
                <h1 className='text-[5vw]  leading-[4.5vw]  tracking-tighter uppercase font-medium'>Become the ultimate weapon</h1>
            </div>


            
            <div className="w-full border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
  {["Valorant", "Modern Warfare"].map((item, index) => (
    <p key={`game-${index}`} className='text-md font-light tracking-tight leading-none hover:text-red-400 hover:underline cursor-pointer'>
      {item}
    </p>
  ))}
            <div className="start flex items-center gap-2 hover:cursor-pointer group">
            <div className='px-5 py-2 border border-green-600 rounded-full font-light text-md text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300'>
                START YOUR MISSION
            </div>
            <div className='w-10 h-10 border border-green-600 flex items-center justify-center rounded-full group-hover:bg-green-600 transition-colors duration-300'>
                <span className='rotate-45 text-green-600 group-hover:text-white transition-colors duration-300'>
                <FaArrowUp />
                </span>
            </div>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default LandingPage


