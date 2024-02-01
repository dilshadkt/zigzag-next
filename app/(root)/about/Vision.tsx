import Image from "next/image";
import React from "react";
import mission from "@/public/vision/mission digital marketing agency malappuram.png";
import vision from "@/public/vision/vission digital marketing agency malappuram.png";
const Vision = () => {
  return (
    <div className="px-[12%] bg-white pb-[5%]">
      <div className="flex md:flex-col">
        <div className="flex-1  flex items-center   justify-center">
          <Image
            className="w-[250px] sm:animate-bounce  hover:scale-110 transform  transition-all"
            src={mission}
            alt="mission digital marketing agency malappuram "
          />
        </div>
        <div className="flex-1  flex flex-col items-center justify-center">
          <h2 className="font-bold text-[#778BAE]  text-3xl md:text-2xl my-5">
            Our Mission
          </h2>
          <p className="w-[80%] sm:w-[90%] text-center text-2xl md:text-lg">
            To be the best Digital marketing agency in Malappuram that
            transforms business ideas to successful brands.
          </p>
        </div>
      </div>
      <div className="flex md:flex-col-reverse">
        <div className="flex-1  flex flex-col items-center justify-center">
          <h2 className="font-bold text-[#778BAE] text-3xl md:text-2xl my-5">
            Our Vision
          </h2>
          <p className="w-[80%] md:w-[90%] text-center text-2xl  md:text-lg">
            To be a Global Digital Marketing Company and change the digital
            marketing realm beyond boundaries.
          </p>
        </div>
        <div className="flex-1  flex items-center   justify-center">
          <Image
            className="w-[250px]  hover:scale-110 transform  transition-all "
            src={vision}
            alt="mission digital marketing agency malappuram "
          />
        </div>
      </div>
    </div>
  );
};

export default Vision;
