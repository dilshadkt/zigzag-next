import React from "react";
import Image from "next/image";
import bg from "@/public/services/services.png";
import Link from "next/link";
import { data } from "@/public/services/data/data";

const Services = () => {
  return (
    <>
      <div className="bg-white px-[12%] py-[4%] relative overflow-hidden z-0 sm:px-5 md:px-6">
        <div className="text-center">
          <h4 className="text-3xl sm:text-2xl text-secondary font-medium">
            Services
          </h4>
        </div>
        <div className="grid  grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-[6%]">
          {data.map((item, index) => (
            <div
              key={`${index}-${item.title}`}
              className=" flex flex-col  items-center my-7 sm:my-8"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={60}
                className="opacity-60"
              />
              <h3 className="font-semibold my-5 sm:my-0 text-lg">
                {item.title}
              </h3>
              <ul className="list-[circle] w-[40%] ">
                {item.items.map((item, index) => (
                  <li
                    key={`${index} - ${item}`}
                    className="my-2 font-medium text-gray-700 text-[17px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="text-center mt-3 ">
                <Link href={`services/${item.title.split(" ")[0]}`}>
                  <span className="text-red-500 cursor-pointer hover:underline">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute -top-[20%] md:-top-[12%] right-0 w-full  -z-[2] left-2/4 opacity-50">
          <Image src={bg} alt="background" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Services;
