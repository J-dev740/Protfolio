// import React from 'react'
import { Sticky } from './Sticky'
import {motion} from 'framer-motion'

const StickyMotion=motion(Sticky);
export const Hero = () => {
  return (
    <motion.div 
    initial={{opacity:0,scale:0.2}}
    animate={{opacity:1,scale:1}}
    transition={{duration:1,type:'tween',when: "beforeChildren",}}
    className='flex items-center justify-center   min-[810px]:min-h-[700px] min-h-[600px] h-fit  w-[80%] min-[810px]:w-full'>
        {/* header  & desc*/}
        <div className=' relative flex flex-col items-center gap-1 justify-center w-fit text-[52px] font-solway font-extrabold text-[#474747] h-fit self-center  justify-self-center'>
            {/* gif animation */}
            <div className="absolute opacity-75 flex -left-4 -top-2 bg-cover z-10 w-[100px] h-[80px] bg-[url('/spidy.gif')]">
                
            </div>
            <motion.p
            >Hi, I'm Indrajith!</motion.p>
            <p className='font-normal font-gae text-[24px] tracking-wide leading-10 text-[#8C8FA6] w-fit text-center'>A Web developer in India.</p>
        {/* sticky notes part */}
        <div className='  absolute min-[810px]:-bottom-[180%] min-[810px]:-right-[50%] min-[600px]:-bottom-[200%] -bottom-[120%] w-[257px] h-[246px]'>
            <div className='relative w-full h-full '>
            <StickyMotion 
            initial={{rotate:-50, opacity:0, transformOrigin:'top left', originY:-0.2,originX:0 }}
            animate={{opacity:1,rotate:25,}}
            transition={{duration:1, type:'spring', stiffness:100,  damping:8, delay:1   }}
            content={'👋🏼'} className='absolute h-[100px] w-[100px]  shadow-black min-[600px]:h-[130px] min-[600px]:w-[130px] text-[50px]  text-center left-2 max-[810px]:-top-0 -top-10 bg-yellow-100 drop-shadow-xl'/>
            <StickyMotion
            initial={{opacity:0,rotate:-50, transformOrigin:'top right',originY:0,originX:-0.2 }}
            animate={{opacity:1,rotate:15}}
            transition={{duration:1, type:'spring', stiffness:100, damping:8 ,delay:1.3 }}

             content={'Available for Hiring'} className='absolute h-[100px] w-[100px] min-[600px]:h-[130px] min-[600px]:w-[130px] bg-lime-300  left-20  min-[600px]:top-32 top-10 drop-shadow-xl'/>
            </div>

        </div>
        </div>
        {/* vector animation part */}
    </motion.div>
  )
}