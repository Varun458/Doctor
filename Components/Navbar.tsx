import React from 'react'
import logoImage from './Images/IMPACT logo_with 3d effect 1.png'
import NavButton from './NavButton'
import Image from 'next/image'
export default function Navbar() {
  return (
   <>
   <div className='container mx-auto'>
   <div className=' '>
    <ul className='md:h-[100px] flex justify-evenly items-center'>
        <li><Image src={logoImage.src} alt="image not found" width={138} height={99}/></li>
        <li className='uppercase text-[20px] font-medium py-2 px-4'>Team</li>
        <li className='uppercase text-[20px] font-medium py-2 px-4'>Services</li>
        <li className='uppercase text-[20px] font-medium py-2 px-4'>blog</li>
        <li className='uppercase text-[20px] font-medium py-2 px-4'>contact</li>
        <li className='md:ml-80'><NavButton/></li>
    </ul>
  
   
   </div>
   </div>
   </>
  )
}
