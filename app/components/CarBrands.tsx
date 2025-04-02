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

const CarBrandSection = () => {
  return (
    <div className="flex items-center justify-center flex-wrap py-10 bg-white">
      <div className="flex flex-col md:flex-row items-start gap-10 w-4/5">
        {/* Car Brands Section */}
        <div className="flex flex-col items-center w-full md:w-1/2 text-center">
          <h2 className="lg:text-[36px] text-[24px] font-bold text-gray-900 font-poppins">Car Brands we service <br></br>
            ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</h2>
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
                  <Image src={`/images/${brand}.png`} alt={brand} width={85} height={55} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[1px] bg-gray-300 h-[300px]"></div>

        {/* Steps Section */}
        <div className="flex flex-col items-center w-full md:w-1/2 text-center d-none ">
          <h2 className="text-[36px] font-bold text-gray-900 font-poppins">Secure your service in Just 3 simple steps</h2>
          <div className="flex items-center justify-center gap-6 lg:mt-16 mt-5">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex flex-col items-center w-[60px]">
                  <Image src={`/images/${step.src}.png`} alt={step.text} width={75} height={65} />
                  <p className="h-[60px] mt-2 text-sm text-gray-700 font-openSans text-[15px] font-bold">{step.text}</p>
                </div>
                {index < steps.length - 1 && <span className="text-gray-400 text-[60px] leading-[0.3]">→</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarBrandSection;
