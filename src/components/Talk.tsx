import { useRef } from 'react'
import { Section } from './Section'
import { LinkItem, links } from './About';
import emailjs from '@emailjs/browser'

export const Talk = () => {
    const ref=useRef(null);
    const handleSubmit=(e:any)=>{
        e.preventDefault();
        if(ref.current!=null)
       { emailjs.sendForm(
            "service_e9ippmr",
            "template_ilsvxsj",
            ref.current,
            "chSDySa8Z4AxjNUnx"
        )
        .then((result:any)=>{
            console.log(result.text);
            alert("message sent");
        }).catch((error:any)=>{
            console.log(error?.text??"something went wrong");
        })}

    }
  return (
    <Section title={"Let's Talk"}>
        {/* contact form  */}
         <form 
         ref={ref}
         onSubmit={handleSubmit} className='flex flex-col gap-y-3 w-full min-w-[200px] max-w-[800px] md:text-[22px] text-[15px] font-gae placeholder-[#8C8FA6] text-black font-medium'>
                <p className='flex  flex-wrap w-fit self-center justify-self-center hover:underline  transition-all duration-200 font-gae text-[38px] text-[#474747] max-[810px]:text-[22px]  font-extralight underline-offset-2'>jithu4cfs@gmail.com</p>
              <div className='flex flex-row  self-center justify-self-center min-[810px]:w-[90%] min-[810px]:justify-center  min-[810px]:gap-10 max-[810px]:justify-between w-[80%]  items-center  '>
                  {links.map((item) => (
                      <LinkItem icon={item.icon} link={item.link} />
                  ))}
                      </div>
            <div className='flex w-full max-[810px]:flex-col items-center justify-center gap-4  mt-[80px] '>
                <input required={true} name='user_name' type='text' placeholder='Your Name' className='border-[2px] h-[45px] w-1/2 pl-2 border-[#474747] rounded-[15px]  '/>
                <input required={true} name='user_email' type='email' placeholder='Email Address' className='border-[2px] pl-2  w-1/2 h-[45px] border-[#474747] rounded-[15px] '/>
            </div>
            <textarea name='message' className='flex min-[810px]:min-h-[100px] pl-3 w-full rounded-[20px] border-[#474747] border-[2px]'/>
            <div className='flex bg-black rounded-[20px] '>
            <button type='submit'  className='flex w-full max-w-[800px] hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-300 rounded-[20px] h-[40px] text-white font-gae bg-[#474747] text-center items-center justify-center'>Send</button>
            </div>

         </form>
    </Section>
  )
}

