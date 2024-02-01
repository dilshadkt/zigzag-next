import React from "react";
import aboutus from "@/public/about.png";
import aboutbg from "@/public/About Us.png";
import Image from "next/image";
import Vision from "./Vision";
import OurClient from "@/app/(root)/components/OurClient";
import Whychoose from "@/app/(root)/components/Whychoose";
import RecentWork from "@/app/(root)/components/RecentWork";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import OurExpert from "../components/OurExpert";
const Readmore = dynamic(() => import("./Readmore"), { ssr: false });
const AboutUs = () => {
  return (
    <div>
      <div className="bg-white px-[12%] sm:px-5 md:px-6 py-[2%] relative overflow-hidden z-0">
        <div>
          <div className="flex justify-center">
            <h1 className="text-3xl text-gray-500">About Us</h1>
          </div>
          <div className="flex my-9 md:flex-col">
            <div className="flex-1 flex md:justify-center md:mb-[8%] items-center">
              <Image
                src={aboutus}
                className="sm:w-[50%] md:w-[40%] h-fit"
                alt={
                  "Digital Marketing Company in Malappuram providing result-oriented marketing solutions for brands since 2020."
                }
              />
            </div>
            <div className="text-[22px] flex-1  md:text-lg   flex flex-col justify-center text-justify">
              <div>
                <p className="">
                  The story that leads us on the extraordinary journey of
                  uplifting brands to new heights as their digital marketing
                  company encompasses passion, perseverance and relentless
                  pursuit of turning vision into success! We understood our
                  collective strength after working together as a group of
                  freelance digital marketers from different corners of the
                  world.
                </p>
              </div>
              <div className="my-3">
                <p>
                  With the challenges we faced, the opportunities we seized and
                  the lessons we learned, our determination was stronger than
                  ever to build a digital marketing agency in Malappuram that
                  provided global services to brands.
                </p>
              </div>
              <div className="my-2">
                <p>
                  About Us The story that leads us on the extraordinary journey
                  of uplifting brands to new heights as their digital marketing
                  company encompasses passion, perseverance and relentless
                  pursuit of turning vision into success! We understood our
                  collective strength after working together as a group of
                  freelance digital marketers from different corners of the
                  world
                </p>
              </div>

              <Readmore />
            </div>
          </div>
        </div>
        <div className="absolute -top-1/4 right-0 w-full  -z-[2] left-2/4 opacity-50 ">
          <Image
            src={aboutbg}
            alt={"best digital marketing agency in malappuram"}
          />
        </div>
      </div>
      <Vision />
      <div className="bg-white py-[3%]">
        <Whychoose />
      </div>
      <OurExpert />
      <OurClient />
      <RecentWork />
    </div>
  );
};

export default AboutUs;

export const metadata: Metadata = {
  title: "Creative Digital Marketing Solutions in Malappuram",
  description:
    "Join our top digital marketing agency in Malappuram. Discover our passion and client-centric approach that turns visions into success. ",
};
