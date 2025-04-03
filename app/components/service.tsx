"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Tab {
  title: string;
  icon: string;
}

interface Service {
  title: string;
  oldPrice: string;
  newPrice: string;
  image: string;
  time: string;
  timeImage: string;
  service: string;
  serviceImage: string;
}

type Services = {
  [key: string]: Service[];
};

const tabs: Tab[] = [
  { title: "Diagnostics", icon: "carTime" },
  { title: "Periodic Services", icon: "periodicService" },
  { title: "Major Repair", icon: "serviceCar" },
  { title: "Breakdown Service", icon: "breakdown" },
];

const services: Services = {
  "Periodic Services": [
    {
      title: "Comprehensive Checkup",
      oldPrice: "₹4,500",
      newPrice: "₹3,999",
      timeImage: "time",
      time: "Takes 2 - 4 hrs",
      image: "serviceImage1",
      service: "Includes 12 services",
      serviceImage: "book",
    },
    {
      title: "Engine Performance Analysis",
      oldPrice: "₹4,500",
      newPrice: "₹3,999",
      timeImage: "time",
      time: "Takes 2 - 4 hrs",
      image: "serviceImage2",
      service: "Includes 12 services",
      serviceImage: "book",
    },
    {
      title: "Comprehensive Checkup",
      oldPrice: "₹4,500",
      newPrice: "₹3,999",
      timeImage: "time",
      time: "Takes 2 - 4 hrs",
      image: "serviceImage1",
      service: "Includes 12 services",
      serviceImage: "book",
    },
    {
      title: "Engine Performance Analysis",
      oldPrice: "₹4,500",
      newPrice: "₹3,999",
      timeImage: "time",
      time: "Takes 2 - 4 hrs",
      image: "serviceImage2",
      service: "Includes 12 services",
      serviceImage: "book",
    },
  ],
};

const CarService: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Periodic Services");

  return (
    <div className="bg-[#20006D] min-h-screen lg:py-20 py-5 text-white container-fluid lg:px-20 px-5 relative">
      {/* Header Section */}

      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-4 mb-6 z-10">
          <Image
            src={"/images/serviceCarIcon.png"}
            alt="Car"
            width={75}
            height={75}
            className=""
          />
          <div>
            <h2 className=" font-bold text-[24px] font-poppins flex items-center">
              <span>Maruti Swift </span>{" "}
              <span className="text-[24px] font-light ps-4">
                Lxi, Petrol, 2009
              </span>{" "}
              <Image
                src={"/images/edit.png"}
                className="h-[100%] ps-4 w-[40px]"
                alt="edit"
                height={20}
                width={20}
              ></Image>
            </h2>
            <p className="font-semibold text-[24px] font-poppins">DL12AT5140</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-[24px] font-poppins text-end">
            There are 12 services <br /> available for Maruti Swift
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="grid grid-cols-4 gap-4 mb-6 z-10 relative">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(tab.title)}
            className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer transition ${
              activeTab === tab.title
                ? "bg-white text-black font-bold shadow-lg"
                : "border-white"
            }`}
          >
            <Image
            className="w-[73px] h-[73px] object-contain"
              src={`/images/${tab.icon}.png`}
              alt="Time"
              width={50}
              height={50}
            />{" "}
            <p className="mt-2 font-poppins text-[20px]">{tab.title}</p>
          </div>
        ))}
      </div>

      {/* Dynamic Service Display */}
      {services[activeTab] && (
        <div className="grid md:grid-cols-2 z-10 relative">
          {services[activeTab].map((service, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 flex flex-col justify-between items-center shadow-lg relative border border-[#dedede]"
            >
              <div className="flex items-start justify-between w-full">
                <h3 className="font-bold text-[30px] font-poppins">{service.title}</h3>

                <div className="text-right">
                  <div className="flex items-center gap-2 mt-2">
                    <span className="line-through text-gray-500 text-lg">
                      {service.oldPrice}
                    </span>
                    <span className="text-3xl font-bold">
                      {service.newPrice}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-[12px] font-poppins ">tax included</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-full mt-4">
                <div className="w-2/3">
                  <div className="flex items-center gap-2 mt-2">
                    <Image
                      src={`/images/${service.timeImage}.png`}
                      alt="Time"
                      width={20}
                      height={20}
                    />
                    <span className="text-gray-600 text-[14px] font-openSans">
                      {service.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Image
                      src={`/images/${service.serviceImage}.png`}
                      alt="Service"
                      width={20}
                      height={20}
                    />
                    <span className="text-gray-600 text-lg text-[14px] font-openSans">
                      {service.service}
                    </span>
                  </div>
                  <p className="text-blue-600 cursor-pointer mt-2 mb-8 text-[12px] font-openSans">
                    See details
                  </p>

                  <button className="text-[12px] font-openSans bg-gradient-to-r from-blue-600 via-blue-800 to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg text-lg mt-4">
                    BOOK NOW
                  </button>
                </div>
                <div className="w-1/3 flex justify-end absolute right-0 bottom-0">
                  <Image
                  className="w-[200px] h-[200px] object-cover"
                    src={`/images/${service.image}.png`}
                    alt={service.title}
                    width={200}
                    height={200}
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="absolute top-0 right-0 w-[100%] h-[100%] z-0">
        <Image
          src={"/images/servicebg.png"}
          alt="image"
          width={100}
          height={100}
          className="w-[100%] h-[100%]"
        ></Image>
      </div>
    </div>
  );
};

export default CarService;
