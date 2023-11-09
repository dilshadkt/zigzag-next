import React from "react";
import Image from "next/image";
import landpage from "../public/digital-market-agencies-malappuram-log.png";

const LandPage = () => {
  return (
    <div className="px-20 flex bg-[#DB002F]  sticky top-20 -z-10">
      <div className="flex-1  flex items-center">
        <div className=" w-fit pl-[10%] text-white">
          <h1 className="text-5xl text-left font-thin font-sans ">
            A Comprehensive Branding & Digital Marketing Agency in&nbsp;
            <span className="font-bold">Malappuram!</span>
          </h1>
          <h3 className="text-lg mt-8 font-extralight">
            {" "}
            Digital Marketing Company in Malappuram providing <br />
            result-oriented marketing solutions for brands since 2020.
          </h3>
        </div>
      </div>
      <div className="flex-initial w-[60%]  flex items-center justify-end">
        <Image src={landpage} alt="bg" className="w-[80%]" />
      </div>
    </div>
  );
};

export default LandPage;
