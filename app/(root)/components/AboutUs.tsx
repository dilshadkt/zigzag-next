import React from "react";
import aboutus from "@/public/about.png";
import aboutbg from "@/public/About Us.png";
import Image from "next/image";
import Link from "next/link";
const AboutUs = () => {
  return (
    <div className="bg-white  relative overflow-hidden ">
      <div className="max-w-screen-xl mx-auto py-[2%] sm:px-5 md:px-6">
        <div className="">
          <div className="flex justify-center">
            <h4 className="text-3xl text-gray-500 mt-10 md:my-[5% ]">
              About Us
            </h4>
          </div>
          <div className="flex my-9 flex-col md:flex-row">
            <div className="flex-1 flex justify-center md:mb-[8%] mb-10 items-center">
              <Image
                src={aboutus}
                className="md:w-[55%] w-[40%] h-fit "
                alt={"digital marketing agency in malappuram"}
                loading="eager"
              />
            </div>
            <div className="md:text-[22px] text-lg flex-1 text-black  leading-[35px]  flex flex-col justify-center text-justify px-3 ">
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
              <div className="flex md:justify-start justify-center  ">
                <Link href={"/about"}>
                  <div className="py-3 px-5 border-gray-500  border-[1px] w-fit text-lg rounded-xl hover:border-orange-500 cursor-pointer">
                    Read Our Story
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute  -top-1/4 md:-top-[20%] right-0 w-full left-2/4  -z-[2]  opacity-50 ">
          <Image
            src={aboutbg}
            alt={"best digital marketing agency in malappuram"}
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
