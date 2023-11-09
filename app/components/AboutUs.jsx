import React from "react";
import aboutus from "../../public/about.png";
import aboutbg from "../../public/About Us.png";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-white px-[12%] py-[2%] relative overflow-hidden z-0">
      <div className="">
        <div className="flex justify-center">
          <h1 className="text-3xl text-gray-500">About Us</h1>
        </div>
        <div className="flex my-9">
          <div className="flex-1">
            <Image src={aboutus} alt={aboutus} />
          </div>
          <div className="text-[22px] flex-1    flex flex-col justify-center text-justify">
            <div>
              <p className="">
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
            <div>
              <div className="py-3 px-5 border w-fit text-lg rounded-xl hover:border-orange-500 cursor-pointer">
                Read Our Story
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -top-1/4 right-0 w-full  -z-[2] left-2/4 opacity-50 ">
        <Image src={aboutbg} alt={aboutbg} />
      </div>
    </div>
  );
};

export default AboutUs;
