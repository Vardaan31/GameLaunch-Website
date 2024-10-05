import React from 'react'
import { motion } from 'framer-motion'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 rounded-tl-2xl rounded-tr-2xl bg-green-900'>
      <div className='text border-t-2 border-b-2 border-zinc-400 flex overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat: Infinity, duration:4}}  className='text-[10vw] leading-none uppercase pt-1 pb-3 -mb-[3vw]] pr-7 font-semibold'>DEPLOY THE SOLDIERS</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat: Infinity, duration:4}}  className='text-[10vw] leading-none uppercase pt-1 pb-3 -mb-[3vw]] pl-7 pr-7 font-semibold'>DEPLOY THE SOLDIERS</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:4}} className='text-[10vw] leading-none uppercase pt-1 pb-3 pl-7 -mb-[3vw]font-semibold'>DEPLOY THE SOLDIERS</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
