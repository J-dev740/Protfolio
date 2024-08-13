// import React from 'react'
import { Section } from './Section'
// import cloud from '../../public/cloud.svg'
import bubble from '../../public/bubbles.svg'
import burst from '../../public/burst.gif'
import { LinkItem } from './About'
import {TfiDirection} from 'react-icons/tfi'

interface props{
    summary:string;
    img:string,
    title:string,
}
const projects:props[]=[
    {
        summary: `Welcome to a deep dive into one of my favorite projects! I'm excited to walk you through this journey,
        revealing how I navigated from the initial concept to the final realization. It's a story of innovation,
        resilience, and problem-solving`,
        img:'./bg1.PNG',
        title:'GameUi'
    },
    {
        summary: `Welcome to a deep dive into one of my favorite projects! I'm excited to walk you through this journey,
        revealing how I navigated from the initial concept to the final realization. It's a story of innovation,
        resilience, and problem-solving`,
        img:'./bg2.PNG',
        title:'Graza'
    },
    {
        summary: `Welcome to a deep dive into one of my favorite projects! I'm excited to walk you through this journey,
        revealing how I navigated from the initial concept to the final realization. It's a story of innovation,
        resilience, and problem-solving`,
        img:'./bg3.PNG',
        title:'Krypt'
    },
    {
        summary: `Welcome to a deep dive into one of my favorite projects! I'm excited to walk you through this journey,
        revealing how I navigated from the initial concept to the final realization. It's a story of innovation,
        resilience, and problem-solving`,
        img:'./bg4.PNG',
        title:'Quest Engine'
    },
    {
        summary: `Welcome to a deep dive into one of my favorite projects! I'm excited to walk you through this journey,
        revealing how I navigated from the initial concept to the final realization. It's a story of innovation,
        resilience, and problem-solving`,
        img:'./bg5.PNG',
        title:'Drop State'
    },
    
]

export const Projects = () => {
  return (
    <Section title='Projects' >
        <div className='flex w-full h-fit flex-col items-center mb-20  gap-10 justify-start '>
            {/* render project cards */}
            {projects.map((p:props,idx:number)=>(
                <PCard key={idx} title={p.title} summary={p.summary} img={p.img}/>
            ))}

        </div>

    </Section>
  )
}

const PCard=({summary,title,img}:props)=>{
    return(
        <div className=' relative group flex w-fit border-[1px] border-black  bg-black rounded-xl '>
            <img src={bubble}
             className='absolute opacity-0  max-[810px]:w-[50px] max-[810px]:h-[50px] max-[810px]:-top-5 group-hover:opacity-100 transition-all duration-700 w-[200px] h-[100px] z-20  -top-20 left-0 '/>
            {/* <img src={cloud}
             className='absolute opacity-100 group-hover:-translate-x-80 group-hover:-translate-y-28 group-hover:opacity-0 transition-all duration-500 w-[200px] h-[100px] z-20   -bottom-5 right-0 '/> */}
            <div className={` relative flex -m-1 w-fit flex-row max-[810px]:flex-col items-center bg-[url("/bg.svg")] bg-white hover:-translate-x-4 hover:-translate-y-2 transition-all duration-300  bg-cover    rounded-xl  min-[810px]:gap-8 gap-1 max-w-[800px] max-h-[350px] `}>
                <img src={burst} className='absolute z-20 -top-20 -right-20  max-[810px]:w-[50px] max-[810px]:h-[50px] max-[810px]:-top-5 max-[810px]:-right-5 w-[200px] h-[150px] flex '/>

                {/* img */}
                <div
                style={{backgroundImage:`url(${img})`}}
                 className={`flex min-[810px]:w-[400px] ml-4 min-[810px]:h-[250px] h-[200px] w-[200px] rounded-lg  bg-cover bg-no-repeat bg-top `} />
                {/* second section */}
                <div className='flex max-[810px]:hidden w-full  flex-col gap-y-4 items-start justify-start px-4 py-6 '>
                    <div className='flex flex-row w-full justify-between '>
                    <p className=' font-solway w-fit font-bold  ml-4 text-[32px]'>{title}</p>
                    <LinkItem icon={TfiDirection} link='github'/>
                    </div>
                    <div className=' ml-4  min-[810px]:flex flex-wrap max-w-[500px] text-[#8C8FA6] text-[20px] tracking-normal leading-[28px] text-wrap  text-start justify-start font-gae '>
                        <p className='flex text-wrap flex-wrap w-full '>
                           {summary}
                            {/* .aldfjladfjaldfajldfalfalfasdlfadlsfallkdlkdjfalkfjakldfjalkfjasdlfjasldfl */}
                        </p>
                    </div>
                </div>
                <div className='flex min-[810px]:hidden items-center max-h-[30px]  truncate justify-center text-[22px]'>{title}</div>


            </div>
        </div>
    )
}