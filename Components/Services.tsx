import React from 'react'
import ServicesMedicalYogaImage from './Images/WhatsApp Image 2023-06-22 at 13.45 1.png'
import ServicesAcupuntureImage from './Images/WhatsApp Image 2023-06-22 at 13.45 2.png'
import ServicesColorImage from './Images/pexels-sharon-wahrmund-237779 1.png'
import ServicesManuelImage from './Images/WhatsApp Image 2023-06-22 at 13.45 4.png'
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image'

export default function Services() {
    return (
        <>
            <div className='container flex mb-42 mx-auto justify-start mb-[42px] xl:pl-36'>
                <div className='w-[445px] mr-[60px]'>
                    <div><Image src={ServicesMedicalYogaImage.src} alt="" width={445} height={236} /></div>
                    <div><h3 className='text-[26px] capitalize font-medium'>medical yoga</h3></div>
                    <div><p className='text-[20px] capitalize text-[#3E3E3E]'>Neurological therapy that has been revolutionizing the world of physiotherapy for several years.</p></div>
                </div>
                <div className='w-[445px]'>
                    <div><Image src={ServicesAcupuntureImage.src} alt="" width={445} height={236} /></div>
                    <div><h3 className='text-[26px] capitalize font-medium'>Acupuncture</h3></div>
                    <div><p className='text-[20px] capitalize text-[#3E3E3E]'>Breathwork to keep you one breath ahead of the competition!</p></div>
                </div>
            </div>
            <div className='container flex mx-auto justify-end xl:pr-36 mb-[42px]'>
                <div className='w-[445px] mr-[60px]'>
                    <div><Image src={ServicesColorImage.src} alt="" width={445} height={236} /></div>
                    <div><h3 className='text-[26px] capitalize font-medium'>Colour Therapy</h3></div>
                    <div><p className='text-[20px] capitalize text-[#3E3E3E]'>Increase the efficiency of your body through individually selected movement exercises.</p></div>
                </div>
                <div className='w-[445px]'>
                    <div><Image src={ServicesManuelImage.src} alt="" width={445} height={236} /></div>
                    <div><h3 className='text-[26px] capitalize font-medium'>Manuel therepy</h3></div>
                    <div><p className='text-[20px] capitalize text-[#3E3E3E]'>An extremely effective form of therapy to normalize problems in our body.</p></div>
                </div>
            </div>

            <div className='container flex items-center justify-center mx-auto my-[84px]'>
                <button className='bg-[#F1F4F9] py-[15px] px-[35px] text-lg capitalize font-[400] text-[#2B4B72] border-2 border-solid border-[#A4C2E5] mx-auto w-[363px] flex justify-center'>
                    <div className='flex'>
                        <span className=''>show all services</span> <span className='mt-[5px] ml-24'><BsArrowRight /></span>
                    </div>
                </button>
            </div>
        </>
    )
}
