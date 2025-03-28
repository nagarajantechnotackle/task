"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const brands = [
  "brand1",
  "brand2",
  "brand3",
  "brand4",
  "brand5",
  "brand6",
];

export default function BrandsCarousel() {
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-center text-2xl font-semibold text-gray-800">
        Brands we Use
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Authorized/genuine OEM/OES Parts
      </p>
      <div className="w-full overflow-hidden lg:mt-10 mt-5">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
        >
          {[...brands, ...brands].map((brand, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Image
                src={`/images/${brand}.png`}
                alt="Brand Logo"
                width={75}
                height={75}
                className="h-16 w-auto object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
