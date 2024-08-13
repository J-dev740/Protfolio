import  { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

 export const RootLayout = ({className,children,...props}:ComponentProps<'div'>) => {
  return (
    <div
    className={twMerge(`flex p-2 text-[#474747]   pb-20  bg-[url('/bg.svg')] min-h-screen min-w-screen w-full h-full`,className)}
    >
        {children}
    </div>
  )
}
