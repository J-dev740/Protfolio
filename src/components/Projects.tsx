// import React from 'react'
import { Section } from './Section'
// import cloud from '../../public/cloud.svg'
import bubble from '../../public/bubbles.svg'
// import burst from '../../public/burst.gif'
import { LinkItem } from './About'
import {TfiDirection} from 'react-icons/tfi'
import {motion,useInView} from 'framer-motion'
// import {useInview} from 'react-intersection-observer'
import React from 'react'

interface props{
    summary:string;
    img:string,
    title:string,
    link:string,
}
const projects:props[]=[
    {
        summary: `🎮 Dive into GameUi: The ultimate single-page showcase for web2 gaming classics like PES, Cyberpunk,
         and FIFA! 🌟✨ Experience a sleek UI that envisions the future of 
        gaming with blockchain integration, where in-game assets become on-chain treasures. Explore the future of gaming now! 🚀🔗💎`,
        img:'./bg1.PNG',
        title:'GameUi',
        link:'https://trikontask.vercel.app/'
    },
    {
        summary: `🌿 Welcome to Graza: A sleek, stylish platform for premium olive oil and gourmet products! 🛒✨ 
        With an elegant UI and seamless cart functionality, 
        shopping for the finest ingredients has never been this smooth. Elevate your culinary experience with just a few clicks! 🍈💫`,
        img:'./bg2.PNG',
        title:'Graza',
        link:'https://graza.vercel.app/'
    },
    {
        summary: `🔐 Meet KRYPT: Your gateway to decentralized transactions on Ethereum! 🚀💎 Built with Hardhat and Solidity, this dApp transforms 
        how you interact with blockchain, offering secure, seamless transactions. Explore the future of finance with cutting-edge tech! 💰🔗✨`,
        img:'./bg3.PNG',
        title:'Krypt',
        link:'https://64da7e30e31abb007b297389--loquacious-sfogliatella-a5f7a1.netlify.app'
    },
    {
        summary: `🌐 Dive into the future with our decentralized questing engine! 🚀✨ Embark on epic quests, earn crypto rewards, 
        and explore a cutting-edge system design. 
        Check out the GitHub repo for the code that powers this innovative adventure platform. Ready to level up? 🎮🔗💰`,
        img:'./bg4.PNG',
        title:'Quest Engine',
        link:'https://github.com/J-dev740/questEngine'
    },
    {
        summary: `🌟 Dive into Drop-State! 🌟 Our sleek frontend prototype empowers artists to showcase and 
        sell their unique t-shirt designs.
         Seamlessly onboard and transform your creativity into merch magic—where fashion meets artistry in a vibrant marketplace! 🎨👕✨`,
        img:'./bg5.PNG',
        title:'Drop State',
        link:'https://dropstate-clone.vercel.app'
    },
    {
        summary: `🚀 Introducing Do-Drag: The ultimate Kanban board with slick drag-and-drop functionality! 🛠️✨ Seamlessly manage tasks with a modern,
         intuitive design and robust session storage—just like a to-do list, but way cooler. Perfect for keeping your projects on track with style! 📊🔥`,
        img:'./bg6.PNG',
        title:'Do-Drag',
        link:'https://snitch-ten.vercel.app'
    },
    {
        summary:`📝 Introducing OPEN-NOTE: Your open-source desktop Markdown editor crafted with ElectronJs, TypeScript, and React! 🚀✨ Enjoy seamless inline Markdown editing, autosaving, and dynamic note management. With local storage and Jotai for efficient state management,
         it’s the ultimate tool for effortless note-taking and organization. Dive into a smoother, smarter writing experience! 🌟📚`,
         img:'./bg7.PNG',
         title:'Open-Note',
         link:'https://github.com/J-dev740/OpenNote'
    }
]

export const Projects = () => {
  return (
    <Section 
    title='Projects' >
        <div className='flex w-full h-fit flex-col items-center mb-20  gap-12 min-[810px]:gap-14 justify-start '>
            {/* render project cards */}
            {projects.map((p:props,idx:number)=>(
                <PCard key={idx} title={p.title} summary={p.summary} img={p.img} link={p.link}/>
            ))}

        </div>

    </Section>
  )
}

const PCard=({summary,title,img,link}:props)=>{
    const ref=React.useRef(null);
    const isInView=useInView(ref,{ margin: '0px 0px -150px 0px' })
    return(
        <motion.div 
        ref={ref}
        initial={{ opacity:0,x:-100}}
        animate={isInView?{opacity:1,x:0}:{opacity:0,x:-100}}
        viewport={{once:true,amount:0.3}}
        transition={{duration:0.2,ease:'easeInOut',type:'tween', }}
        className=' relative group flex w-fit border-[1px] border-black  bg-black rounded-xl '>
            <img src={bubble}
             className='absolute opacity-0  max-[810px]:w-[80px] max-[810px]:h-[70px] max-[810px]:-top-16 group-hover:opacity-100 transition-all duration-700 w-[200px] h-[100px] z-20  -top-20 left-0 '/>
            {/* <img src={cloud}
             className='absolute opacity-100 group-hover:-translate-x-80 group-hover:-translate-y-28 group-hover:opacity-0 transition-all duration-500 w-[200px] h-[100px] z-20   -bottom-5 right-0 '/> */}
            <div className={` relative  group-hover:border-[2px] group-hover:border-stone-600 flex -m-1 w-fit flex-row max-[810px]:flex-col items-center bg-[url("/bg.svg")] bg-white hover:-translate-x-4 hover:-translate-y-2 transition-all duration-300  bg-cover    rounded-xl  min-[810px]:gap-8 gap-1 max-w-[800px] max-h-[350px] `}>
                {/* <img src={burst} className='absolute z-20 -top-20 -right-20  max-[810px]:w-[50px] max-[810px]:h-[50px] max-[810px]:-top-5 max-[810px]:-right-5 w-[200px] h-[150px] flex '/> */}

                {/* img */}
                <div
                style={{backgroundImage:`url(${img})`}}
                 className={`flex min-[810px]:w-[400px] m-4 min-[810px]:h-[250px] h-[200px] w-[200px] rounded-lg  bg-cover bg-no-repeat bg-top `}>
                <div className='min-[810px]:hidden absolute top-0 right-0 '>
                <LinkItem  icon={TfiDirection} link={link}/>
                </div>
                 </div>
                {/* second section */}
                <div className='flex max-[810px]:hidden w-full  flex-col gap-y-4 items-start justify-start px-4 py-6 '>
                    <div className='flex flex-row w-full justify-between '>
                    <p className=' font-solway w-fit font-bold  ml-4 text-[32px]'>{title}</p>
                    <LinkItem icon={TfiDirection} link={link}/>
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
        </motion.div>
    )
}