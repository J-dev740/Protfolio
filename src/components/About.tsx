
import { Section } from './Section'
import { Subsection } from './Subsection'
import { IconType } from 'react-icons';
import { CiLinkedin } from 'react-icons/ci';
import {  FaGithub} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FiDownload, FiTwitter } from 'react-icons/fi';
import {  MdOutlineArrowForward } from 'react-icons/md';
// import Lottie from 'lottie-react';
// import pencil from '../../public/resume.json'
import { Sticky } from './Sticky';
import curve from '../../public/curve.png'
import { motion} from 'framer-motion';
import  { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

const LinksMotion=motion(Subsection);

export const LinkItem=forwardRef<HTMLAnchorElement,LinkItem>(({link,icon:Icon},ref)=>(
    
    <a
    ref={ref}
     href={link} target='_blank'>
        <div 
         className={twMerge('flex group  hover:scale-125 transition-all transform duration-300 ease-in-out hover:rounded-[18px] text-[24px] hover:-rotate-45  items-center justify-center w-[40px] h-[40px] rounded-[14px] border-[#474747] border-[2px]  ','')}>
        <Icon  className='text-[#474747] group-hover:opacity-10 duration-300  group-hover:hidden transition-all transform duration-900 flex  font-solway font-light' />
        <MdOutlineArrowForward className='text-[#474747] hidden group-hover:flex group-hover:scale-110 transition-all duration-900 opacity-0 group-hover:opacity-90  duration-300 font-solway font-light'/>
    </div>
        </a>
))




interface LinkItem{
    link:string;
    icon:IconType;
}
export const links:LinkItem[]=[
    {
        link:'https://www.linkedin.com/in/rindrajith',
        icon:CiLinkedin
    },
    {
        link:'https://leetcode.com/Jdev740/',
        icon:SiLeetcode
    },
    {
        link:'https://github.com/J-dev740',
        icon:FaGithub
    },
    {
        link:'https://j-dev740.github.io/Portfolio/',
        icon:FiTwitter
    },
]
// const itemVariants:Variants={
//     inital:{
//         x:0,
//     },
//     current:{
        
//     }
// }
 export const About =forwardRef<HTMLDivElement>(({...props},ref) => {

  return (
    <Section 
    {...props}
    ref={ref}
    title='About' className='max-[810px]:mt-12'>

        <div 
        className='flex  min-[810px]:flex-row  flex-col w-full items-start min-[810px]:gap-x-5 justify-center'>
{/* first section */}
            <div className='  flex flex-col items-start max-[810px]:self-center min-[810px]:w-1/2 min-[810px]:items-center justify-start px-4 py-2 '>
                  <div className='flex relative  w-[230px] h-[230px] '>
                      {/* sparkiling vector  */}
                      <div
                          className='w-[52px] h-[52px] relative flex'
                      // style="width:100%;height:0;padding-bottom:100%;position:relative;"
                      >
                          <iframe src="https://giphy.com/embed/fwcAdOkKvDwzuEukMG" width="100%" height="100%"
                              // style="position:absolute"
                              className='giphy-embed absolute top-1 left-2 flex'
                              frameBorder="0" allowFullScreen></iframe>
                      </div>
                      {/* image  */}
                      <div
                          style={{ backgroundImage: `url('/profile.jpeg')` }}
                          className='flex  bg-cover  bg-top bg-no-repeat absolute left-10 top-5 w-[120px] h-[120px] rounded-full ring-[3px] ring-[#474747]'></div>
                      {/* vecotor */}
                      <img
                          style={{ transform: 'scaleX(-1)', rotate: '-30deg' }}
                          src={curve} className='absolute flex w-[70px] h-[90px]    left-2 bottom-2' />
                      {/* yours truly */}
                      <p className='font-bold  font-gae text-[32px] flex absolute bottom-0 right-1'>Yours Truly</p>
                  </div>
                  <div className=' relative  mt-2  flex w-[230px] h-[488px]'>
                    <Sticky content={'Versatile Tool'} className='absolute bg-purple-300 left-1 top-5 drop-shadow-xl'/>
                    <Sticky content={'1+ years of Experience '} className='absolute  left-[122px] top-[100px] bg-yellow-300 drop-shadow-xl'/>
                    <Sticky content={'Sticky'} className='absolute bg-cyan-300 left-0 top-[250px] sm:top-[300px] z-20 drop-shadow-xl'/>
                    <Sticky content={'Competetive Programmer'} className='absolute  -right-[20px] top-[200px] sm:top-[250px] z-10 bg-lime-300 drop-shadow-3xl shadow-black '/>
                    <Sticky
                    // style={{rotate:'40'}}
                     content={'From India'} className='absolute  left-[20px] sm:top-[400px] z-10  top-[350px] bg-gradient-to-tl  from-teal-600  to-white drop-shadow-xl'/>



                  </div>

 
                {/* <Sticky content='Available for Hiring' className='bg-slate-300  drop-shadow-xl'/> */}
            </div>
{/* second section */}
              <div className='flex flex-col  min-[810px]:w-1/2 items-center justify-center gap-y-[50px] w-full p-2  '>
                  <LinksMotion
                  initial={{opacity:0,x:'100vw'}}
                  animate={{opacity:1,x:0}}
                  whileInView={{opacity:1,x:0}}
                  transition={{duration:1,staggerChildren:0.3}}
                  title='Links' className='max-[810px]:mt-8' >
                      <div
                       className='flex min-[810px]:w-[90%] min-[810px]:justify-start min-[810px]:gap-10 max-[810px]:justify-between w-[80%]  items-center  '>
                          {links.map((item:LinkItem,index:number) => (
                              <LinkItem
                                key={index}icon={item.icon} link={item.link} />
                          ))}
                      </div>
                  </LinksMotion>
                  <Subsection title='skills' >
                      <div className='flex w-[50%] items-center min-[810px]:justify-start justify-between text-wrap flex-wrap gap-y-2 gap-x-2'>
                          {skills.map((item) => (
                              <SkillItem key={item} skill={item} />
                          ))}

                      </div>
                  </Subsection>
                  <Subsection title='Experience' >
                      <Subsection className='text-[20px]' title='Mo Ventures'>

                          <div className='flex flex-col min-[810px]:items-start items-center justify-center w-full p-1 -mt-4'>
                              {/* position and period */}
                              <div className='flex flex-row items-center  text-[18px] gap-4'>
                                  <p className='font-gae font-semibold'>Full Stack developer</p>
                                  <p className='text-[#8C8FA6]  font-medium font-gae'>2023-2024</p>
                              </div>
                              {/* desc */}
                              <div className='flex text-wrap text-start  max-[810px]:text-center font-gae text-[#8C8FA6] font-light '>Developed Decentralized FullStack Gaming Application with DelightFul UserExperience</div>

                          </div>
                      </Subsection>
                  </Subsection>
                  {/* download resume part */}
                  <div className=' relative flex flex-col group hover:-translate-y-2 translate-x-2 transition-all duration-300 min-[810px]:self-start  items-center justify-center  w-fit '>
                      {/* download resume */}
                      <a href='https://drive.google.com/file/d/1u3lKoIjDjrFTKPrhkerU0lHErgXEKVLE/view?usp=sharing' target='_blank'>
                      <div 
                      className='flex text-center  hover:underline hover:underline-offset-2 transition-all duration-300 ease-in items-center  max-[810px]:justify-center justify-start  gap-2'>
                          <FiDownload className='w-[19px] h-[19px] font-extrabold mr-1' />
                          <p className='text-[24px] font-bold font-gae'>Download Resume</p>
                      </div>
                      </a>
                      {/* svg animation on hover */}
                      {/* <Lottie className='absolute flex w-[60px] h-[75px] -top-5 -right-8 ' animationData={pencil} loop={true} /> */}
                      {/* <div className='flex -z-10'> */}
                      <div
                          className='w-[45px] h-[45px] opacity-100 grou-hover:opacity-0 group-hover:translate-x-2 group-hover:opacity-0 group-hover:-translate-y-4 transition-all duration-200 relative -z-10'
                      >
                          <iframe src="https://giphy.com/embed/yH6LWrrwHUUW6TssXZ" 
                              // style="position:absolute"
                              className='absolute giphy-embed -top-16 -right-28 w-[45px] h-[45px]'></iframe>
                      </div>
                      <div 
                          className='w-[45px] h-[45px] opacity-0 translate-y-4 group-hover:translate-y-0  group-hover:opacity-100 transtion-all duration-300 relative  z-10'
                      >
                        <iframe src="https://giphy.com/embed/tvifwuG8nFAEfFME7J" width="100%" height="100%" className='absolute giphy-embed -top-28 -right-28 w-[45px] h-[45px]' allowFullScreen>
                        </iframe></div>

                      {/* </div> */}

                  </div>
              </div>
        </div>
    </Section>
  )
});



const skills=[
    'frontend','backend','blockchain','DataStructures & Algorithms','System Design'
]
const SkillItem=({skill}:{skill:string})=>(
    <div className='flex w-fit   justify-center items-center rounded-[14px] border-[2px] border-[#474747] p-1 font-semibold font-gae   '>
        {skill}
    </div>
)


