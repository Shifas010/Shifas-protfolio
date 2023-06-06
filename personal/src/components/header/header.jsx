import React, { useEffect, useState } from 'react'
import crossBar from "../../assets/x.svg"
import NavBar from '../../assets/align-right.svg'
import { gsap } from 'gsap'

function Header() {

const [navbar, setnavbar] = useState(true)
const [Crossbar, setCrossbar] = useState(false)


useEffect(() => {
gsap.to(".outerbox",{duration:4})
},
[])


const navbarhandler=()=>{
 setCrossbar(true)
 setnavbar(false)
 gsap.to(".outbox",{duration:4})
 
}

const crossBarhandler=()=>{
  setnavbar(true)
  setCrossbar(false)
}


  return (
    <div className='w-full md:h-[70px] h-4/5 z-50 absolute md:flex  overflow-hidden'>
        <div className="md:w-1/2 w-full"></div>
        <div className="Navitem w-full md:w-1/2 md:justify-end items-center md:flex p-8 " id='Navitem'>
        <ul className='medium flex gap-10 lg:gap-20 text-white'>
            <li >Home </li>
            <li>About</li>
            <li>Contact</li>
        </ul>
          <div className="smalldevice">
        <div className="navcontroller w-full justify-end flex ">{
          navbar&&
           <div className="Navbar justify-end flex w-1/2 "> <img  src={NavBar}alt="" onClick={navbarhandler} /></div>
        }{
          Crossbar&&
         <div className="cross justify-end flex w-1/2 "> <img  src={crossBar}alt="" onClick={crossBarhandler} /></div>
        }
       </div>
      { Crossbar &&  
          
       <div className="outbox w-full  h-full flex justify-center  items-center bg-black bg-opacity-70 rounded-[20%]">
        <ul className='gap-20  text-white '>
            <li >Home </li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </div>
        }
        </div>


        </div>

      
    </div>
  )
}

export default Header