"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Missed your car’s service?",
    subtitle: "Get it done at home with Rumo",
    discount: "Upto ₹300 Off",
    buttonText: "BOOK A SERVICE",
    image: "/images/bannerImageOne.png",
  },
  {
    id: 2,
    title: "Missed your car’s servicess?",
    subtitle: "Get it done at home with Rumo",
    discount: "Upto ₹300 Off",
    buttonText: "BOOK A SERVICE",
    image: "/images/bannerImageTwo.png",
  },
];

const Banner = () => {
  return (
    <div className="container-fluid  relative w-full lg:px-0 px-4">
      <Swiper navigation modules={[Navigation]} loop className="w-full">
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* <div className="flex items-center justify-between bg-gradient-to-r from-blue-800 to-purple-700 text-white lg:px-16 px-5 rounded-lg  py-10"> */}
            <div className="back-image flex items-center justify-between text-white lg:px-16 px-5 rounded-lg py-10 ">
              <div className="relative z-10 hidden md:block">
                <p className="text-sm font-openSans">Now in Bengaluru</p>
                <h2 className="text-[30px] lg:text-[60px] text- font-bold mt-2 leading-[70px]">
                  {slide.title}
                </h2>
                <p className="mt-2 text-lg font-poppins">{slide.subtitle}</p>
                <p className="mt-8 mb-2 text-green-400 font-openSans text-[18px]">
                  {slide.discount}
                </p>
                <button className=" bg-white text-blue-700 lg:px-20  px-10 py-4 text-[12px] rounded-sm font-semibold font-openSans">
                  {slide.buttonText}
                </button>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center flex-col">
                    <Image
                      src={"/images/star.png"}
                      alt="star"
                      width={100}
                      height={100}
                    ></Image>
                    <p className="ml-2 text-[12px] font-openSans">
                      Based on 100+ ratings
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Image src={"/images/chat.png"} alt="chat" width={30} height={30}></Image>
                    <div className="flex items-center flex-col">
                      <span className="text-white text-xl font-openSans">
                        5000+
                      </span>
                      <p className="ml-2 text-[12px] font-openSans">
                        Registered users
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 text-white md:px-4  md:hidden block w-100 text-start md:text-center">
                <h2 className="text-[30px] font-bold font-poppins">Car Servicing <br /> at-home</h2>
                <p className="text-[18px] font-poppins mt-1 pb-20 md:pb-0">
                  Delivering trust always
                </p>

                <div className="flex justify-between items-center text-[14px] font-openSans mt-16">
                  <span>Now in Bangalore</span>
                  <span className="text-green-400 font-semibold">
                    Upto ₹300 Off
                  </span>
                </div>

                <button className="font-openSans text-[12px] mt-2 py-3 w-full bg-white text-blue-600 font-semibold  rounded-lg shadow-md hover:bg-blue-100">
                  BOOK A SERVICE
                </button>
              </div>
              <div className="banner-image_section ">
                <Image
                  src={slide.image}
                  alt="Car Service"
                  width={700}
                  height={300}
                  className="rounded-lg banner-image lg:w-[700px] lg:h-[100%] w-[400px]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
