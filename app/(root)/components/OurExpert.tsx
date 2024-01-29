"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MobilExpert from "./MobilExpert";

interface Experts {
  _id: string;
  image: string;
  name: string;
  role: string;
}
const OurExpert = () => {
  const [data, setData] = useState<Experts[]>([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/experts`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex - 3) {
      setIndex(0);
    }
  }, [index, data.length]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <>
      <div className="bg-white  px-[12%] py-[2%] flex flex-col items-center">
        <div className="flex justify-center">
          <h2 className="text-3xl text-secondary font-medium">Our Experts</h2>
        </div>
        <div className="flex md:hidden items-end  my-[5%]  overflow-hidden    max-w-[780px] ">
          {data.map((person) => {
            const { _id, image, name, role } = person;

            return (
              <div
                className="w-full flex flex-col items-center  transition-all duration-500 mx-5"
                style={{ transform: `translateX(-${index * 125}%)` }}
                key={`${_id}-${name}`}
              >
                <div className="w-[150px]   rounded-full border-4 overflow-hidden h-[150px]">
                  <Image
                    className=" h-full w-full  object-cover  shadow-lg"
                    src={image}
                    width={100}
                    height={100}
                    alt={role}
                  />
                </div>

                <h4 className="my-3 text-lg font-semibold">{name}</h4>
                <p className="text-center">{role}</p>
              </div>
            );
          })}
        </div>
        <div>
          <MobilExpert experts={data} />
        </div>
      </div>
    </>
  );
};

export default OurExpert;
