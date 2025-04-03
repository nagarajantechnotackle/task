"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const carBrands = ["skoda", "honda", "mahindra", "hyundai", "kia", "toyota"];
const steps = [
  { src: "addCar", text: "Add your car" },
  { src: "calendar", text: "Schedule Date & Time" },
  { src: "address", text: "Share your address" },
];

const CarBrandSectionMobile = () => {
  return (
    <div className="flex items-center justify-center flex-wrap pb-10 bg-white">
      <div className="mt-6 flex items-center  mb-8 border-t border-b gap-6 w-full py-4 justify-center border-[#b8b6b6]">
        <div className="flex items-center flex-col ">
          <Image
            className="w-[125px] h-[30px]"
            src={"/images/star.png"}
            alt="star"
            width={100}
            height={100}
          ></Image>
          <p className="ml-2 text-[9px] font-openSans">Based on 100+ ratings</p>
        </div>
        <div className="flex items-center">
          <Image
            src={"/images/chat.png"}
            alt="chat"
            width={30}
            height={30}
          ></Image>
          <div className="flex items-center flex-col">
            <span className="text-black text-[26px] font-openSans">5000+</span>
            <p className="ml-2 text-[9px] font-openSans">Registered users</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-10 w-4/5">
        {/* Car Brands Section */}
        <div className="flex flex-col items-center w-full md:w-1/2 text-center">
          <h2 className="text-[14px] font-bold text-gray-900 font-poppins">
            Car Brands we service
          </h2>
          <div className="w-full mt-5 lg:mt-16">
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              modules={[Autoplay]}
              breakpoints={{
                340: { slidesPerView: 4 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
            >
              {carBrands.map((brand) => (
                <SwiperSlide key={brand} className="flex justify-center">
                  <Image
                    src={`/images/${brand}.png`}
                    alt={brand}
                    width={38}
                    height={25}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarBrandSectionMobile;
