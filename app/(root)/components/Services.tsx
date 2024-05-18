import React from "react";
import Image from "next/image";
import bg from "@/public/services/services.png";
import Link from "next/link";
import { data } from "@/public/services/data/data";

const Services = () => {
  return (
    <>
      <div className="pt-14 bg-white md:pb-28 pb-16 lg:pb-16 xl:pb-0 relative overflow-hidden z-0 px-3 md:px-6">
        <div className="text-center ">
          <h4 className="md:text-3xl text-2xl text-secondary font-medium">
            Services
          </h4>
        </div>
        <div className="grid max-w-screen-xl mx-auto lg:grid-cols-3 md:grid-cols-2 grid-cols-1  py-5">
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
              <h3 className="font-semibold md:my-5 my-0 text-lg">
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
                  <span className="text-red-500 cursor-pointer hover:underline font-medium">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute -top-[0%] md:-top-[12%] 2xl:-top-[50%] right-0 w-full  -z-[2] left-2/4 opacity-50">
          <Image src={bg} alt="background" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Services;
