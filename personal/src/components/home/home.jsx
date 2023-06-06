import React, { useEffect, useState } from 'react'
import whatsup  from '../../assets/whatsup.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import twitter from '../../assets/twitter.svg'
import profilepic from '../../assets/Shifas_side-removebg-preview.png'
import mouse from '../../assets/mouse.svg'
import { gsap } from 'gsap'
function Home() {

 const [HiButtoncolor,setHibuttoncolor]=useState(false)
 const [AboutmeButtoncolor,setAboutmebuttoncolor]=useState(false)

 useEffect(() => {
 setHibuttoncolor(true)
  // gsap.fromTo("#borderBox", { x: -400 , duration: 4 }, {x:40})
  gsap.fromTo(".borderBoxA", { x: -400,y: -200, },{duration: 1, x:40,y:20});
  gsap.fromTo(".borderBoxB", { x: -400,y: -200, },{duration: 5, x:40,y:20});
  gsap.fromTo(".borderBoxC", { x: -400,y: -1100, },{rotation: 360, duration: 5, x:40,y:0, ease: "bounce.out"});
  gsap.from(".Name",{y:-400 ,duration:2})
 },[])




  return (
    <div className='main w-full h-screen md:h-1/2 lg:h-screen items-center bg-black p-4 md:flex text-white relative'>
      <div className=" w-full md:w-1/2 md:h-full h-1/2  overflow-hidden relative flex ">
        <div  className=" borderBoxA w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] rounded-[20px] bg-red-500 z-30 absolute"></div>
        <div className="borderBoxB w-[150px] lg:w-[300px]  h-[150px] lg:h-[300px]   end-12  rounded-[20px]  mt-[30%] bg-red-500 z-10 absolute" ></div>
        <div className=" w-[200px] h-[200px] lg:w-[500px] lg:h-[400px] border rounded-[20px] mt-10 end-44 border-white  z-20 absolute  "></div>
        <div className="borderBoxC w-[100px] h-[100px] lg:w-[150px] md:h-[100px] lg:h-[150px] bottom-1 md:bottom-14 rounded-[20px] mt-[10%]  bg-red-500 z-10 absolute flex  overflow-hidden"></div>



        <div className='absolute z-40  w-full lg:h-full justify-end lg:items-center flex '>
        <img  className='items-baseline flex w-[350px] h-[350px] lg:w-[500px] lg:h-[500px]' src={profilepic} alt="" />
        </div>
        </div>
      <div className=" w-full md:w-1/2  md:h-full p-4 md:mt-24 "> 
        <div className="w-full h-5/6  md:h-4/6  flex ">
          <div className="w-5/6 h-full lg:p-[60px] font-bold ">
            <div className="greating w-full justify-start flex md:text-xl  text-lg mt-2   lg:h-1/6"> Hello, I Am </div>
            <div className=" overflow-hidden w-full justify-start flex text-4xl md:text-5xl lg:text-7xl mt-[10px]  lg:h-1/6 text-red-500 "> <div className="Name h-full items-center flex pb-2"> Shifas va </div> </div>
            <div className="w-full items-center flex   h-2/6 md:h-1/6   ">
              <div className="w-full flex h-full  items-baseline">
              <div className='  md:text-2xl lg:text-3xl h-full flex  overflow-hidden  items-center '> <div className="mr-4 Name">Software</div></div>
              <div className='lg:w-3/4 md:text-3xl lg:text-5xl text-2xl  h-full  flex p-2 overflow-hidden items-center'><div className="Name">Developer</div></div>
              </div>
              
             </div>
             <div className="lg:h-/6  w-full flex pt-[50px]">
              <div className="w-1/2  h-full  items-center flex"><button  className={ HiButtoncolor?`w-[100px] lg:w-[150px] h[30px] lg:h-[50px] bg-red-500`:"w-[100px] lg:w-[150px] h[30px] lg:h-[50px] border" } onMouseEnter={()=>{
                  setHibuttoncolor(true)
                  setAboutmebuttoncolor(false)
            
              }} >Say Hi</button>
              </div>
              <div className="w-1/2 h-full items-center flex  "><button className={AboutmeButtoncolor?`w-[100px] lg:w-[150px] h[30px] lg:h-[50px] bg-red-500`:"w-[100px] lg:w-[150px] h[30px] lg:h-[50px] border"} onMouseEnter={()=>{      
                  setHibuttoncolor(false)
                  setAboutmebuttoncolor(true)
               
                }}  >Contact us</button>
                </div>
             </div>
             <div className="w-full justify-end flex p-4"><img className='w-[15px] h-[20px] lg:w-[20px] lg:h-[30px]' src={mouse} alt="" /></div>
          </div>
          <div className="social p-4 w-1/6 h-full items-center lg:flex justify-start ">
            <ul>
              <li className='mt-4 bg-transparent'> <a href="https://wa.me/qr/YB2SPZXNVLHAD1"><img src={whatsup}  alt="" /> </a>  </li>
              <li className='mt-4 bg-transparent'> <a href="https://instagram.com/shifas_010?igshid=ZGUzMzM3NWJiOQ=="><img src={instagram} alt="" /></a></li>
              <li className='mt-4 bg-transparent'><a href="https://www.linkedin.com/in/shifas-va"><img src={linkedin} alt="" /> </a></li>
              <li className='mt-4 bg-transparent'><a href="#"><img src={twitter} alt="" /></a></li>
              
            </ul>

          </div>
        </div>
        <div className="w-full none h-1/6 justify-start  md:justify-end p-4 flex items-center"> <div className="mail text-xs md:text-sm"> <a href="gmailto:shifaskottayi@gmail.com"> shifaskottayi@gmail.com</a></div></div>
         </div>
      
    </div>
  )
}

export default Home