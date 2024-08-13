import React from 'react'
import { SectionProps } from '../types'
import { twMerge } from 'tailwind-merge'

export const Subsection:React.FC<SectionProps> = ({className,title,children,...props}) => {
  return (
    <div {...props} className={twMerge('flex flex-col    gap-y-[25px]  w-full h-fit items-center justify-center ','')}>

      <div className={twMerge(' flex w-full  min-[810px]:text-center text-start items-center min-[810px]:justify-start justify-center   text-[28px] font-solway font-bold  tracking-wide leading-tight ',className)}>
        {title}
        </div>


      <div className=' flex text-wrap w-full items-center min-[810px]:justify-start justify-center '>
        {children}
      </div>


    </div>
  )
}

