import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SliderFirstImage from './Images/pexels-antoni-shkraba-5215024 1.png'
import { BsArrowRight } from 'react-icons/bs';
import "@fontsource/jost";
import Image from 'next/image';






export default function Carousel() {
  return (
<>
    <div className=' bg-gradient-radial from-[#F4F7F9] to-[#a4d9fd] mb-[42px]'>

      <div className='container mx-auto'>
        <Swiper className=''
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={1200}
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className='flex items-center justify-evenly relative'>
              <div className='flex flex-col mr-4'>
                <h2 className=' text-[48px] font-medium w-[481px] h-[166px] leading-[50px]'>It's time to take care of yourself comprehensively!</h2>
                <p className='w-[393px] h-[119px] font-normal leading-[30px]'>Working with the body, emotions and taking into account food aspects ... this is how qualified physiotherapists work today. It's your whole body.</p>
                <div>
                  <button className='bg-[#fff] py-[15px] px-[35px] text-lg uppercase font-[500] text-[#2B4B72] border-[2px]-solid border-[#55B2FC]'>
                    <div className='flex'>
                      <span className=''>more information</span> <span className='mt-[5px] ml-4'><BsArrowRight /></span>
                    </div>
                  </button>
                </div>
              </div>
              <div className='ml-4'>
                <Image src={SliderFirstImage.src} alt="" width={422} height={540} />
              </div>
              <div className='flex flex-col items-center bottom-0 mt-96'>
                <div><span className='w-[75px] h-[40px] text-[61px]'>01</span> <span className='text-[#9C9A9A] text-[26px] font-bold leading-[30px] w-[29px] h-46[px]'>/</span> </div>
                <div className='text-[26px] font-medium text-[#000059] opacity-30'>03</div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              second
            </div>

          </SwiperSlide>
        </Swiper>
      </div>
     
    </div>

   <div className='container mx-auto capitalize text-[48px] font-medium font-jost mb-[42px]'>services</div>
    </>
  )
}