import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SliderFirstImage from "./Images/pexels-antoni-shkraba-5215024 1.png";
import Hero2 from "./hero2.svg";
import { BsArrowRight } from "react-icons/bs";
import "@fontsource/jost";
import Image from "next/image";

export default function Carousel() {
  return (
    <>
      <div className=" ">
        <div className=" ">
          <Swiper
            className=""
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            speed={1200}
            navigation={true}
            modules={[Navigation, Pagination, Autoplay]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="flex items-center justify-evenly relative bg-gradient-radial from-[#F4F7F9] to-[#a4d9fd] mb-[42px]">
                <div className="flex flex-col ">
                  <h2 className=" text-[48px] font-medium w-[481px] h-[166px] leading-[50px]">
                    It's time to take care of yourself comprehensively!
                  </h2>
                  <p className="w-[393px] h-[119px] font-normal leading-[30px]">
                    Working with the body, emotions and taking into account food
                    aspects ... this is how qualified physiotherapists work
                    today. It's your whole body.
                  </p>
                  <div>
                    <button className="bg-[#fff] py-[15px] px-[35px] text-lg uppercase font-[500] text-[#2B4B72] border-[2px]-solid border-[#55B2FC]">
                      <div className="flex">
                        <span className="">more information</span>{" "}
                        <span className="mt-[5px] ml-4">
                          <BsArrowRight />
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="ml-4">
                  <Image
                    src={SliderFirstImage.src}
                    alt=""
                    width={422}
                    height={540}
                  />
                </div>
                <div className="flex flex-col items-center bottom-0 mt-96">
                  <div>
                    <span className="w-[75px] h-[40px] text-[61px]">01</span>{" "}
                    <span className="text-[#9C9A9A] text-[26px] font-bold leading-[30px] w-[29px] h-46[px]">
                      /
                    </span>{" "}
                  </div>
                  <div className="text-[26px] font-medium text-[#000059] opacity-30">
                    03
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="">
              {/* <div>second</div> */}
              <div className="flex items-center justify-evenly relative bg-gradient-radial from-[#DBDCE9] to-[#AAC2FF] mb-[42px]">
                <div className="flex flex-col pl-4">
                  <h2 className=" text-[48px] font-medium w-[481px] h-[166px] leading-[50px]">
                    Color Therepy
                  </h2>
                  <p className="w-[393px] h-[119px] font-normal leading-[30px]">
                    Color therapy operates on the principle that each color
                    emits a unique energy vibration, and by applying or
                    visualizing specific colors, balance and harmony can be
                    restored to the body, mind, and spirit.
                  </p>
                  <div>
                    <button className="bg-[#fff] py-[15px] px-[35px] text-lg uppercase font-[500] text-[#2B4B72] border-[2px]-solid border-[#55B2FC]">
                      <div className="flex">
                        <span className="">more information</span>{" "}
                        <span className="mt-[5px] ml-4">
                          <BsArrowRight />
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="ml-4">
                  <Image src="/hero2.svg" alt="" width={700} height={543} />
                </div>
                <div className="flex flex-col items-center bottom-0 mt-96">
                  <div>
                    <span className="w-[75px] h-[40px] text-[61px]">02</span>{" "}
                    <span className="text-[#9C9A9A] text-[26px] font-bold leading-[30px] w-[29px] h-46[px]">
                      /
                    </span>{" "}
                  </div>
                  <div className="text-[26px] font-medium text-[#000059] opacity-30">
                    03
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* third hero */}
            <SwiperSlide className="">
              {/* <div>second</div> */}
              <div className="flex items-center justify-evenly relative bg-gradient-radial from-[#AAFFE0] to-[#70E952] mb-[42px]">
                <div className="flex flex-col pl-4">
                  <h2 className=" text-[48px] font-medium w-[481px] h-[166px] leading-[50px]">
                    Color Therepy
                  </h2>
                  <p className="w-[393px] h-[119px] font-normal leading-[30px]">
                    Working with the body, emotions and taking into account food
                    aspects ... this is how qualified physiotherapists work
                    today. It's your whole body.
                  </p>
                  <div>
                    <button className="bg-[#fff] py-[15px] px-[35px] text-lg uppercase font-[500] text-[#2B4B72] border-[2px]-solid border-[#55B2FC]">
                      <div className="flex">
                        <span className="">more information</span>{" "}
                        <span className="mt-[5px] ml-4">
                          <BsArrowRight />
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="ml-4">
                  <Image src="/hero3.svg" alt="" width={731} height={500} />
                </div>
                <div className="flex flex-col items-center bottom-0 mt-96">
                  <div>
                    <span className="w-[75px] h-[40px] text-[61px]">02</span>{" "}
                    <span className="text-[#9C9A9A] text-[26px] font-bold leading-[30px] w-[29px] h-46[px]">
                      /
                    </span>{" "}
                  </div>
                  <div className="text-[26px] font-medium text-[#000059] opacity-30">
                    03
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="container mx-auto capitalize text-[48px] font-medium font-jost mb-[42px]">
        services
      </div>
    </>
  );
}
