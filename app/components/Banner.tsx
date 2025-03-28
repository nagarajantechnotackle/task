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
    <div className="container-fluid  relative w-full bg-white px-[20px] md:px-0">
      <Swiper navigation modules={[Navigation]} loop className="w-full">
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex items-center justify-between bg-gradient-to-r from-blue-800 to-purple-700 text-white lg:px-16 px-5 rounded-lg py-10">
              <div className="relative z-10 hidden md:block">
                <p className="text-sm font-openSans">Now in Bengaluru</p>
                <h2 className="text-[30px] lg:text-[60px] text- font-bold mt-2 ">
                  {slide.title}
                </h2>
                <p className="mt-2 text-lg">{slide.subtitle}</p>
                <p className="mt-4 text-green-400">{slide.discount}</p>
                <button className="mt-4 bg-white text-blue-700 px-10 py-3 text-[12px] rounded-sm font-semibold">
                  {slide.buttonText}
                </button>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center flex-col">
                    <span className="text-yellow-400 text-xl">★★★★★</span>
                    <p className="ml-2 text-[12px]">Based on 100+ ratings</p>
                  </div>
                  <div className="flex items-center flex-col">
                    <span className="text-white text-xl">5000+</span>
                    <p className="ml-2 text-[12px]">Registered users</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 text-white md:px-4 py-6 md:hidden block w-100 text-start md:text-center">
                <h2 className="text-xl font-bold">Car Servicing at-home</h2>
                <p className="text-sm mt-1 pb-16 md:pb-0">Delivering trust always</p>

                <div className="flex justify-between items-center text-sm mt-4">
                  <span>Now in Bangalore</span>
                  <span className="text-green-400 font-semibold">
                    Upto ₹300 Off
                  </span>
                </div>

                <button className="mt-6 w-full bg-white text-blue-600 font-semibold py-2 rounded-lg shadow-md hover:bg-blue-100">
                  BOOK A SERVICE
                </button>
              </div>
              <div className="banner-image_section ">
                <Image
                
                  src={slide.image}
                  alt="Car Service"
                  width={700}
                  height={300}
                  className="rounded-lg banner-image lg:w-[700px] lg:h-[400px] w-[400px]"
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
