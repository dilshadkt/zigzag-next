import React from "react";
import { Works } from "@/public/worls/Works";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="bg-white px-[12%] py-[5%] sm:px-5">
      <div className="text-center pt-6">
        <h2 className="text-3xl sm:text-2xl text-secondary font-medium">
          Portfolio
        </h2>
      </div>
      <div className="flex  justify-between flex-wrap py-[5%]">
        {Works.slice(0, 8).map((item, index) => (
          <div
            key={`${item.status}-${index}`}
            className="w-[23.5%] sm:w-[48%] rounded-xl bg-gray-400 overflow-hidden mb-4"
          >
            <Image
              className="object-cover    w-full h-full hover:scale-105 transition-all duration-700"
              src={item.image}
              alt={item.image}
            />
          </div>
        ))}
      </div>
      <div className="text-center">
        <h4 className="text-red-500 hover:underline cursor-pointer">
          Explore more
        </h4>
      </div>
    </div>
  );
};

export default Portfolio;
