import React from "react";
import { data } from "@/public/whychoose/data";
import Image from "next/image";
const Whychoose = () => {
  return (
    <div className="bg-white px-[12%] sm:px-5 md:px-6">
      <div className="text-center">
        <h1 className="text-3xl md:text-2xl sm:py-[8%] text-secondary font-medium">
          Why Zig Zag As Your Trusted Digital Marketing Agency In Malappuram
        </h1>
      </div>
      <div className="py-[6%]  grid grid-cols-4 md:grid-cols-2">
        {data.map((item, index) => (
          <div
            key={`${index} - 0${item.title}`}
            className=" bg-box m-2 rounded-xl flex flex-col items-center px-4 py-5 hover:shadow-lg transition-all duration-500 cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.image}
              width={60}
              className="opacity-70"
            />
            <h3 className="my-3 font-semibold">{item.title}</h3>
            <p className="text-center text-secondary">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whychoose;
