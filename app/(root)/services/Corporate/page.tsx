import Image from "next/image";
import React from "react";
import Corperate from "@/public/services/corperate/Corporate Branding.jpg";
import ServiceBox from "@/app/(root)/components/ServiceBox";
import RecentWork from "@/app/(root)/components/RecentWork";
import { data } from "@/public/services/corperate/data";
import { benifits } from "@/public/services/corperate/data";
import { Metadata } from "next";

const Corperates = () => {
  return (
    <>
      <div className="bg-white">
        <div className=" mx-[13%] pt-9 sm:mx-5 md:mx-6">
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-center  rounded-xl overflow-hidden h-[320px] sm:h-[220px]">
              <Image
                className="w-full h-full object-cover"
                src={Corperate}
                alt="Best Corporate Branding Service in Malappuram"
              />
            </div>

            <h1 className="text-center my-7 text-3xl font-semibold text-red-500">
              Best Corporate Branding Service in Malappuram
            </h1>
            <div className="text-2xl md:text-[20px]">
              <p className="text-justify leading-[35px] ">
                Welcome to <b className="text-red-500">Zig Zag </b>Digital
                Solutions, your premier digital marketing partner in creating
                the most sought-after corporate brand identity that resonates
                with your vision. A strong corporate identity is more crucial
                than ever today due to the digital revolution. Our expert team
                based in Malappuram specializes in creating distinctive
                corporate identities that leave a lasting impression on your
                target audience, making you stay on top of their mind.
              </p>
            </div>
            <h2 className="font-semibold text-xl my-5 sm:mt-[10%]">
              Why Corporate Branding Matters?
            </h2>
            <div className="my-4 sm:my-2">
              <ServiceBox data={benifits} />
            </div>
            <h2 className="font-semibold text-xl my-5 sm:my-[10%]">
              Our Unique Corporate Branding Approach
            </h2>
            <div>
              {data.map((item) => (
                <div
                  key={`${item.id}-${item.title}`}
                  className={`flex ${
                    item.id % 2 === 0 && `flex-row-reverse`
                  } mb-[4%] border p-4 rounded-3xl  sm:flex-col`}
                >
                  <div className="flex-initial w-[30%] sm:w-full sm:mb-5 max-h-[250px] bg-gray-200    rounded-3xl overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title.split(".")[1]}
                      className="w-full h-full object-cover "
                    />
                  </div>
                  <div className="flex-1 flex items-center  mx-5 sm:mx-0 ">
                    <div>
                      <h3 className="font-semibold text-primary text-xl mb-3">
                        {item.title}
                      </h3>
                      <p className="text-xl sm:text-lg leading-[30px] text-justify">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <RecentWork />
    </>
  );
};

export default Corperates;

export const metadata: Metadata = {
  title: "Best Corporate Branding Service in Malappuram",
  description:
    " As your trusted corporate branding agency in malappuram, we provide corporate branding services for your brand",
};
