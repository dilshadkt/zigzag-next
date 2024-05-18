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
    <div className="bg-white relative">
      <div className="absolute -top-28 right-0 w-full   left-2/4 opacity-50 ">
        <Image
          src={aboutbg}
          alt={"best digital marketing agency in malappuram"}
        />
      </div>
      <div className="max-w-screen-xl mx-auto px-3 md:px-5 py-[2%] relative overflow-hidden z-0">
        <div>
          <div className="flex justify-center">
            <h1 className="text-3xl text-gray-500">About Us</h1>
          </div>
          <div className="flex my-9 flex-col md:flex-row">
            <div className="flex-1 flex md:justify-center md:mb-[8%] items-center">
              <Image
                src={aboutus}
                className="md:w-[50%] w-[40%] h-fit"
                alt={
                  "Digital Marketing Company in Malappuram providing result-oriented marketing solutions for brands since 2020."
                }
              />
            </div>
            <div className="md:text-[22px] flex-1  text-lg   flex flex-col justify-center text-justify leading-[35px]">
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
      </div>
      <Vision />
      <div>
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
  title:
    "Zig Zag - Transforming Brands with Creative Digital Marketing Solutions in Malappuram  ",
  description:
    "Join our extraordinary journey as the top digital marketing agency in Malappuram. Discover our passion and client-centric approach that turns visions into success.    ",
  alternates: {
    canonical: "https://www.zigzagdigitalsolutions.com/about",
  },
  openGraph: {
    title: "Zig Zag - Creative Digital Marketing Agency in Malappuram",
    description:
      "Choose Zig Za as your dedicated digital marketing partner for transforming ideas into successful brands. We offer innovative digital marketing solutions that go beyond conventional methods.",
  },
  keywords:
    "Digital Marketing, Malappuram, Creative Solutions, Business Growth, Brand Transformation, Global Services, Client-Centric Approach.    ",
};
