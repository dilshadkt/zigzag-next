import React from "react";
import { Works } from "@/public/worls/Works";
import Image from "next/image";

const RecentWork = () => {
  return (
    <div className="px-[12%]">
      <h4 className="text-xl font-semibold">Our Recent Works</h4>
      <div className="flex justify-between my-6">
        {Works.slice(0, 4).map((item, index) => (
          <div
            key={`${item.status}-${index}`}
            className="w-[24.5%] rounded-xl bg-gray-400 overflow-hidden mb-4"
          >
            <Image
              className="object-cover    w-full h-full hover:scale-105 transition-all duration-700"
              src={item.image}
              alt={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentWork;
