import React, { ComponentProps, useState } from 'react'
import {motion} from 'framer-motion'
import { twMerge } from 'tailwind-merge'
interface StickyProps{
content:string;
}
export const Sticky:React.FC<StickyProps & ComponentProps<'div'>> = ({content,className}) => {
  return (
    

    <motion.div
    drag
    initial={{rotate:0}}
    dragMomentum={false}
    whileHover={{ rotate:25 ,scale:1.1}}
    transition={{ease:'linear', duration:0.2}}
    className={twMerge(`flex items-center justify-center text-center w-[130px] handle h-[130px] text-[20px] hover:cursor-grab bg-blue-500 text-wrap flex-wrap p-4  tracking-tight leading-6 `,className)}>
        <p className='flex w-full font-gae text-[#474747] font-medium  text-wrap  flex-wrap'>{content}</p>
    </motion.div>
  )
}

