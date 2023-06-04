import React from 'react'

function Header() {

document.getElementById('Navitem')

  return (
    <div className='w-full h-[70px] flex bg-black overflow-hidden'>
        <div className="w-1/2"></div>
        <div className="Navitem w-1/2 md:justify-center items-center flex white" id='Navitem'>
        <ul className=' flex gap-20'>
            <li>Home </li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </div>
      
    </div>
  )
}

export default Header