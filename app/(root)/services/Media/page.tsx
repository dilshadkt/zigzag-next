import Image from "next/image";
import React from "react";
import media from "@/public/services/media/Diverse Content Formats.jpg";
import RecentWork from "@/app/(root)/components/RecentWork";
import { data } from "@/public/services/media/data";
import { Metadata } from "next";
const page = () => {
  return (
    <>
      <div className="mx-[13%] mt-9 sm:mx-5 md:mx-6">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-center  rounded-xl overflow-hidden h-[320px] sm:h-[220px]">
            <Image
              className="w-full h-full object-cover"
              src={media}
              alt="Media Production Services in Malappuram"
            />
          </div>

          <h1 className="text-center my-7 text-3xl font-semibold text-red-500">
            Media Production Services in Malappuram
          </h1>
          <div className="text-2xl md:text-[20px]">
            <p className="text-justify leading-[35px] ">
              As a cutting-edge digital marketing agency in Malappuram, we
              specialize in bringing captivating visual narratives that amplify
              brand impact. Join us in media production, and let us get your
              brand's storytelling to new heights with stunning visuals.
            </p>
          </div>
          <h2 className="font-semibold text-xl my-5 sm:mt-[10%]">
            Why Media Production Matters?
          </h2>
          <p className="text-justify text-xl leading-[35px]">
            Great visuals and compelling stories make you stand out in a world
            of endless information and content consumption. Media production is
            the key to engaging your audience deeper and leaving a lasting
            impression.
          </p>

          <h2 className="font-semibold text-xl my-5 sm:my-[10%]">
            Our Media Production Approach
          </h2>
          <div>
            {data.map((item) => (
              <div
                key={`${item.id}-${item.title}`}
                className={`flex ${
                  item.id % 2 === 0 && `flex-row-reverse`
                } mb-[4%] border p-4 rounded-3xl sm:flex-col`}
              >
                <div className="flex-initial sm:w-full sm:mb-5 w-[30%] max-h-[250px]  bg-green-400 rounded-3xl overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title.split(".")[1]}
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="flex-1 flex items-center  mx-5 sm:mx-0">
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
      <RecentWork />
    </>
  );
};

export default page;

export const metadata: Metadata = {
  title: " Best Media Production Service Agency in Malappuram.",
  description:
    " As your trusted digital marketing agency in malappuram, we provide  Comprehensive media production services services for your brand",
};
