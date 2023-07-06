import React from 'react'
import DrImage from './Images/physiotherapist-massaging-patient-close-up 1.png'
import Image from 'next/image'

export default function AboutDr() {
    return (
        <>

            <div className='container mx-auto flex justify-evenly mb-[84px]'>

                <div className=''>
                    <Image src={DrImage.src} alt="" width={522} height={863} />
                </div>




                <div className=''>
                    <div className='text-[#D394A2] uppercase text-[20px] font-medium w-[325px]'>dr Kapil Chauhan</div>
                    <div className='w-[568px] text-[48px] font-medium'>Few Words About me</div>
                    <div className='w-[466px] text-[#3E3E3E] text-[20px] capitalize'>Dr Kapil Chauhan is a renowned pain specialist, Well-versed in multi-disciplinary therapies and techniques like Dry Needling, Acupuncture, Chiropractic, Kinesio-taping, and various approaches to Manual Therapy, presently working at the Department of Physiotherapy and Neuro-rehabilitation, QRG Marengo Asia Network Hospital, Faridabad. He is currently serving as a Senior Consultant and HOD in the hospital. <br /><br />His forte is in managing pain in the spine and various joints of the body with advanced physiotherapy techniques and other holistic methods. <br /><br />He pursues excellence in the arena of Pain care by continuously participating in advanced physiotherapy fellowship training from pioneer institutes in South Africa, the UK, India, and the USA.</div>
                    <div className=' w-[263px] text-[20px] uppercase font-medium'>find me on:</div>
                    <div className='grid grid-cols-2 gap-y-3'>

                        <div>
                            <button className='bg-[#F1F4F9] py-[15px] px-[35px] text-lg uppercase font-[400] text-[#2B4B72] border-[2px] border-solid border-[#A4C2E5] w-[267px]'>
                                <div className='flex'>
                                   <span className=''>facebook</span>
                                </div>
                            </button>
                        </div>
                        <div>
                            <button className='bg-[#F1F4F9] py-[15px] px-[35px] text-lg uppercase font-[400] text-[#2B4B72] border-[2px] border-solid border-[#A4C2E5] w-[267px]'>
                                <div className='flex'>
                                    <span className=''>instagram</span>
                                </div>
                            </button>
                        </div>
                        <div>
                            <button className='bg-[#F1F4F9] py-[15px] px-[35px] text-lg uppercase font-[400] text-[#2B4B72] border-[2px] border-solid border-[#A4C2E5] w-[267px]'>
                                <div className='flex'>
                                    <span className=''>linkedin</span> 
                                </div>
                            </button>
                        </div>

                    </div>
                </div>



            </div>

        </>
    )
}
