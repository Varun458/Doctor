import React from 'react'
import { BsArrowRight } from 'react-icons/bs';


export default function NavButton() {
  return (
    <>
        <div>
      <button className='bg-[#55B2FC] py-[15px] px-[35px] text-lg uppercase font-[400] text-white border-[2px]-solid border-[#55B2FC]'>
        <div className='flex'>
          <span className=''>make an appointment</span> <span className='mt-[5px] ml-4'><BsArrowRight/></span>
        </div>
      </button>
    </div>
    </>
  )
}
