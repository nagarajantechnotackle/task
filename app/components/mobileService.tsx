"use client";

import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import Image from "next/image";

interface SubService {
  title: string;
  price: number;
  oldPrice: number;
  timeImage: string;
  time: string;
  serviceImage: string;
  service: string;
}

interface Service {
  name: string;
  image?: string;
  subServices?: SubService[];
}

const services: Service[] = [
  {
    name: "Car wash",
    image:"serviceImage1",
    subServices: [
      {
        title: "Car Spa",
        price: 3999,
        oldPrice: 4500,
        timeImage: "time",
        time: "Takes 2 - 4 hrs",
        serviceImage: "book",
        service: "Includes 12 services",
       
      },
      {
        title: "Car Cleaning",
        price: 3999,
        oldPrice: 4500,
        timeImage: "time",
        time: "Takes 2 - 4 hrs",
        serviceImage: "book",
        service: "Includes 12 services",
      },
    ],
  },
  { name: "Diagnostics",   image:"serviceImage1",},
  { name: "Periodic Services",  image:"serviceImage1", },
  { name: "Major Repairs",  image:"serviceImage1", },
];

export default function MobileCarServices() {
  const [openService, setOpenService] = useState<string | null>(null);

  const toggleCollapse = (name: string) => {
    setOpenService(openService === name ? null : name);
  };

  return (
    <div className="mx-auto p-4 bg-white shadow-md">
      <div className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl border border-blue-400 shadow-md">
        <img
          src="/images/serviceCarIcon.png"
          alt="Car"
          className="w-24 h-24 rounded-md mr-4"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold">Maruti Swift</h3>
          <p className="text-md">LXi, Petrol, 2019</p>
          <p className="text-md font-semibold">DL12ATS140</p>
        </div>
        <FaPen className="text-white text-lg cursor-pointer" />
      </div>
      <p className="mt-4 text-center font-semibold text-black">
        Services available for Maruti Suzuki
      </p>
      {services.map((service) => (
        <div
          key={service.name}
          className="mt-3 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleCollapse(service.name)}
            className="relative w-full flex justify-between items-center p-4 text-left bg-gray-100 font-bold text-lg text-black rounded-md"
          >
            {/* <span className="flex items-center gap-2"> */}
            <span className={openService === service.name ? "flex items-center gap-2 bg-gradient-to-r from-[#0060EF] via-[#150190] to-[#8601F0] bg-clip-text text-transparent" : "flex items-center gap-2"}>       
             {openService === service.name ? 
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fill-rule="evenodd" clip-rule="evenodd" d="M21.25 12C21.25 6.892 17.109 2.75 12 2.75C6.892 2.75 2.75 6.892 2.75 12C2.75 17.108 6.892 21.25 12 21.25C17.109 21.25 21.25 17.108 21.25 12Z" stroke="url(#paint0_linear_87141_118)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M15.4717 13.4414L12.0007 9.95541L8.52968 13.4414" stroke="url(#paint1_linear_87141_118)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             <defs>
             <linearGradient id="paint0_linear_87141_118" x1="21.25" y1="6.95048" x2="2.74997" y2="6.94748" gradientUnits="userSpaceOnUse">
             <stop stop-color="#0841D1"/>
             <stop offset="1" stop-color="#6B01D8"/>
             </linearGradient>
             <linearGradient id="paint1_linear_87141_118" x1="15.4717" y1="10.7469" x2="8.52967" y2="10.7447" gradientUnits="userSpaceOnUse">
             <stop stop-color="#0841D1"/>
             <stop offset="1" stop-color="#6B01D8"/>
             </linearGradient>
             </defs>
             </svg>
             
             : 
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 12C2.75 17.108 6.891 21.25 12 21.25C17.108 21.25 21.25 17.108 21.25 12C21.25 6.892 17.108 2.75 12 2.75C6.891 2.75 2.75 6.892 2.75 12Z" stroke="#80B0F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.52832 10.5586L11.9993 14.0446L15.4703 10.5586" stroke="#80B0F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

             }
            {service.name}
            </span>


            {openService === service.name ? "" : 
              <span className="absolute bottom-0 right-0">
              <Image
                          src={`/images/${service.image}.png`}
                          alt="Time"
                          width={80}
                          height={50}
                        />{" "} 
        </span>
            }

          
          </button>
          {openService === service.name && service.subServices && (
            <div className="pt-3 bg-white">
              {service.subServices.map((sub) => (
                <div key={sub.title} className="p-3 border rounded-md mb-2">
                  <div className="flex justify-between flex-wrap">
                    <h4 className="font-semibold text-black">{sub.title}</h4>

                    <p className="text-lg font-bold text-black">
                      ₹ {sub.price}{" "}
                      <span className="text-gray-500 line-through text-sm">
                        ₹ {sub.oldPrice}
                      </span>
                    </p>
                  </div>


                  <div className="w-2/3">
                    <div className="flex items-center gap-2 mt-2">
                      <Image
                        src={`/images/${sub.timeImage}.png`}
                        alt="Time"
                        width={20}
                        height={20}
                      />
                      <span className="text-gray-600 text-lg">{sub.time}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Image
                        src={`/images/${sub.serviceImage}.png`}
                        alt="Service"
                        width={20}
                        height={20}
                      />
                      <span className="text-gray-600 text-lg">
                        {sub.service}
                      </span>
                    </div>
                    <p className="text-blue-600 cursor-pointer mt-2 mb-2">
                      See details
                    </p>

                    <button className="text-[12px] bg-gradient-to-r from-blue-600 via-blue-800 to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg text-lg mt-2">
                      BOOK NOW
                    </button>
                    <span className="font-openSans bg-gradient-to-r from-[#0060EF] via-[#150190] to-[#8601F0] bg-clip-text text-transparent font-bold mx-5">
                      CALL US
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
