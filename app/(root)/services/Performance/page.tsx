import Image from "next/image";
import React from "react";
import performance from "@/public/services/performance/A,B Testing.jpg";
import RecentWork from "@/app/(root)/components/RecentWork";
import { data } from "@/public/services/performance/data";
import { Metadata } from "next";
import Head from "next/head";

const Perfomances = () => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.zigzagdigitalsolutions.com/services/Performance"
        />
        <meta
          property="og:title"
          content="Grow Your Brand with Performance Marketing Expertise"
        />
        <meta
          property="og:description"
          content="Maximize your online success with our performance marketing strategies. We specialize in ROI-focused digital advertising, conversion optimization, and data-driven marketing campaigns. Experience the power of results-driven marketing today."
        />

        <meta
          name="keywords"
          content="Performance marketing, Online advertising, ROI-focused marketing, Digital advertising, Conversion optimization, Ad campaign management, Pay-per-click (PPC), Marketing analytics, Data-driven marketing, Results-driven marketing"
        />
      </Head>
      <div className="bg-white">
        <div className="mx-[13%] pt-9 sm:mx-5 md:mx-6 ">
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-center  rounded-xl overflow-hidden h-[320px] sm:h-[220px]">
              <Image
                className="w-full h-full object-cover"
                src={performance}
                alt="Performance Marketing Service in Malappuram"
              />
            </div>

            <h1 className="text-center my-7 text-3xl font-semibold text-red-500">
              Performance Marketing Service in Malappuram
            </h1>
            <div className="text-2xl md:text-[20px]">
              <p className="text-justify leading-[35px] ">
                We turn data into action and strategies into success. As a
                growing digital marketing agency from Malappuram, we specialize
                in performance marketing beyond traditional methods. Our main
                focus areas in digital marketing are precise targeting,
                measurable outcomes, and increased ROI.
              </p>
            </div>
            <h2 className="font-semibold text-xl my-5">
              Why Performance Marketing Matters?
            </h2>
            <p className="text-justify text-xl  leading-[35px]">
              Businesses grow better when they invest in performance marketing,
              which drives measurable results. Generating tangible outcomes that
              drive your business forward. Our agency understands the dynamics
              of the business world and digital marketing, allowing us to design
              strategies that perform well.
            </p>

            <h2 className="font-semibold text-xl my-5 sm:my-[10%]">
              Our Performance Marketing Approach
            </h2>
            <div>
              {data.map((item) => (
                <div
                  key={`${item.id}-${item.title}`}
                  className={`flex ${
                    item.id % 2 === 0 && `flex-row-reverse`
                  } mb-[4%] border p-4 rounded-3xl sm:flex-col`}
                >
                  <div className="flex-initial w-[30%] sm:w-full sm:mb-5 max-h-[250px]  bg-gray-200 rounded-3xl overflow-hidden">
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

export default Perfomances;

export const metadata: Metadata = {
  title: "Best Performance Marketing Agency in Malappuram",
  description:
    "As your trusted performance marketing agency in malappuram, we provide paid ads, google ads and other performance marketing services for your brand",
};
