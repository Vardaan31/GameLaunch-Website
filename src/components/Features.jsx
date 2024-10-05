import { motion,  useAnimation } from 'framer-motion';


function Features() {

  const cards=[useAnimation(),useAnimation()];

  const handleHover=(index)=>{
      cards[index].start({y:'0'});
  }

  const handleHoverEnd=(index)=>{
    cards[index].start({y:'100%'});
}
  
 
  
    return (
      <div className='w-full py-20'>
        <div className='w-full px-10 border-b-[1px] border-zinc-400 pb-16'>
          <h1 className='text-7xl tracking-tight'>Featured Games</h1>
        </div>
        <div className='px-20'>
          <div className="cards w-full flex items-center justify-center gap-16 mt-10">
            <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cardcontainer relative w-[80vh] h-[90vh]">
              <h1 className='absolute text-[#ffffff] flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                {"VALORANT".split('').map((item, index) => (
                  <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.22,1,0.36,1],delay:index*0.06}} className='inline-block' key={index}>{item}</motion.span>  // Add key prop
                ))}
              </h1>
              <div className='card w-full h-full rounded-2xl overflow-hidden'>
                <img className='w-full h-full rounded-2xl' src="https://m.media-amazon.com/images/M/MV5BNmNhM2NjMTgtNmIyZC00ZmVjLTk4YWItZmZjNGY2NThiNDhkXkEyXkFqcGdeQXVyODU4MDU1NjU@._V1_.jpg" alt="" />
              </div>
            </motion.div>
            <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardcontainer relative w-[80vh] h-[90vh]">
              <h1 className='absolute text-[#ffffff] right-full flex overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                {"COD:MW2".split('').map((item, index) => (
                  <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.22,1,0.36,1],delay:index*0.06}} className='inline-block' key={index}>{item}</motion.span>  // Add key prop
                ))}
              </h1>
              <div className='card w-full h-full rounded-2xl overflow-hidden'>
                <img className='w-full h-full rounded-2xl' src="https://image.api.playstation.com/vulcan/img/rnd/202008/1900/lTSvbByTYMqy6R22teoybKCg.png" alt="" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
  

export default Features
