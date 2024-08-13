import React from 'react'
import { SectionProps } from '../types'
import { twMerge } from 'tailwind-merge'
import  line from '../../public/line.png'


export const Section:React.FC<SectionProps> = ({title,children,className,...props}) => {
  return (
    <div {...props} className={twMerge('flex flex-col   gap-[50px]  w-[80%] h-fit items-center justify-center ',className)}>

      <div className=' flex w-full  text-center items-center justify-center  text-[32px] md:text-[42px] font-solway font-bold  tracking-wide leading-tight '>
       <img  className=' flex  w-[80px]  pt-2 ' src={line} alt='line'/>
        {title}
       <img  className=' flex  w-[80px]  pt-2 ' src={line} alt='line'/>

        </div>


      <div className=' flex  w-full items-center justify-center '>

        {children}

      </div>


    </div>

  )
}