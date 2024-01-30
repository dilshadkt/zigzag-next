import React from "react";
import aboutus from "@/public/about.png";
import aboutbg from "@/public/About Us.png";
import Image from "next/image";
import Link from "next/link";
const AboutUs = () => {
  return (
    <div className="bg-white px-[12%] py-[2%] sm:px-5 md:px-6 relative overflow-hidden z-0">
      <div className="">
        <div className="flex justify-center">
          <h1 className="text-3xl text-gray-500 sm:my-[5% ]">About Us</h1>
        </div>
        <div className="flex sm:flex-col sm:items-center   my-9">
          <div className="flex-1 sm:w-[60%]  sm:mb-7">
            <Image
              src={aboutus}
              className="md:w-[90%]"
              alt={"digital marketing agency in malappuram"}
            />
          </div>
          <div className="text-[22px] md:text-lg flex-1 text-black   flex flex-col justify-center text-justify">
            <div>
              <p className=" ">
                At <span className=" font-medium text-red-600">Zig Zag</span>,
                we believe the “Road To Success Is Not A Straight One,” hence
                the name. As your trusted Digital Marketing Agency in
                Malappuram, we want to be the driving force that turns your
                business ideas and dreams into reality.
              </p>
            </div>
            <div className="my-7">
              <p>
                If you are looking for a digital marketing company for your
                business to take over the ever-evolving digital platforms and
                establish a compelling online presence, you have come to the
                right place. We provide comprehensive digital marketing and
                branding solutions that suit you best.
              </p>
            </div>
            <div className="flex sm:justify-center sm:my-[5%]">
              <Link href={"/about"}>
                <div className="py-3 px-5 border-gray-500  border-[1px] w-fit text-lg rounded-xl hover:border-orange-500 cursor-pointer">
                  Read Our Story
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute  -top-1/4 md:-top-[5%] right-0 w-full left-2/4  -z-[2] md:left-[15%] opacity-50 ">
        <Image
          src={aboutbg}
          alt={"best digital marketing agency in malappuram"}
        />
      </div>
    </div>
  );
};

export default AboutUs;
