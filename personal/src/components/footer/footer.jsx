import React, { useRef } from 'react'
import { useEffect } from 'react';
import { gsap } from 'gsap';

function Footer() {

  const Progressbars = useRef()

  useEffect(() => {

    const Progressbar = new IntersectionObserver((entries)=>{
      const entry  = entries[1];
      console.log(entry);
      gsap.fromTo('.progressbarA',{x:-100},{ x:-10,duration:5})
      gsap.fromTo('.progressbarB',{x:-200},{ x:-100,duration:5})
      gsap.fromTo('.progressbarC',{x:-100},{ x:-20,duration:5})
    })
    Progressbar.observe(Progressbars.current)
  })

  return (
    <div className='h-2/3 md:1/2 w-full  absolute flex'>
        <div className="w-full h-full absolute">
        <div className="w-full h-full relative md:flex ">
          <div className="md:w-1/2  h-full w-full justify-center items-center flex bg-red-500">
            <div className="md:w-4/5 w-full h-1/2 md:h-full  text-white p-1 lg:p-4">
            <div className="header w-full flex text-2xl font-semiboldbold p-2 z-40 relative">My Skills</div>
            <div className="w-full flex text-xl md:text-3xl lg:text-5xl font-bold p-2 z-40 relative ">You Can Imagine</div>
            <div className="w-full flex text-2xl md:text-3xl lg:text-5xl font-bold p-2 z-40 relative">I Can Do</div>
            <div className="w-full flex pt-[10%] lg:text-lg text-sm font-semibold"> Fornt-end developer with a passion for delivering high-quality, efficent, and innovative solutions. Seeking a challenging role where I can utilize my skills and knowledge.</div>
            </div>
          </div>
          <div className=" md:w-1/2 w-full md:h-full h-2/3 justify-center items-center flex  p-6 bg-red-500" ref={Progressbars}>
          <div className="border-l-[1px] h-full w-full  items-center p-1 lg:pt-[10%]">
              <div className="w-full flex text-white items-center gap-2  lg:pt-10 pt-[10%]">
               <div className="w-[11px] h-[11px] bg-white relative right-[10px] transform rotate-45"></div> 
                <div className=" border w-4/6 h-[10px] rounded-lg  overflow-hidden">
            <div className="progressbarA w-full bg-white h-full rounded-lg"></div>
         </div>
         Javascript
        </div>
        <div className="w-full flex text-white items-center gap-2 pt-[10%] lg:pt-10">
               <div className="w-[11px] h-[11px] bg-white relative right-[10px] transform rotate-45"></div>
                <div className=" border w-4/6 h-[10px] rounded-lg overflow-hidden">
            <div className="progressbarB w-full bg-white h-full rounded-lg"></div>
         </div>
         Node js
        </div>
        <div className="w-full flex text-white items-center gap-2 pt-[10%] lg:pt-10">
               <div className="w-[11px] h-[11px] bg-white relative right-[10px] transform rotate-45"></div>
                <div className=" border w-4/6 h-[10px] rounded-lg  overflow-hidden">
            <div className="progressbarC w-full bg-white h-full rounded-lg"></div>
         </div>
         React js
        </div>
        
        </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Footer