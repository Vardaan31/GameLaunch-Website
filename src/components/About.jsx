import React from 'react'
import gggSvg from '../ggg.svg';

function About() {
  return (
    <div>
      <div data-scroll data-scroll-section  className='w-full p-10 bg-[#c6e947] rounded-tl-2xl rounded-tr-2xl text-black'>
        <h1 className='text-[3vw] leading-[3.2vw] tracking-tight'> Ghosts is a fast-growing FPS shooter platform hosting the two top games in the genre: Call of Duty: Modern Warfare, and Valorant and has interactive campaigns combined with realistic battlegrounds multiplayer.</h1>
        <div className='w-full flex gap-5 border-t-[1px] mt-12 border-[#637429]'>
        <div className='w-1/2 pt-20'>
        <h1 className='text-6xl'>History of Battle-Zone</h1>
        <button className='flex gap-10 items-center uppercase px-10 py-6 mt-14 rounded-full bg-zinc-900 text-white'>Read More
          <div className='w-2 h-2 rounded-full bg-white'></div>
        </button>
        </div>
        <div className='w-[80vh] h-[80vh] mt-12 rounded-3xl bg-[#ffffff]'>
        <img src={gggSvg} alt="GG SVG" className='w-full h-full rounded-3xl' />
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default About



//1:17:44 
