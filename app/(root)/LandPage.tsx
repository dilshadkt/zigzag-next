import React from "react";
import Image from "next/image";
import landpage from "@/public/digital-market-agencies-malappuram-log.png";

const LandPage = () => {
  return (
    <>
      <div className=" md:px-5 px-20 md:h-[91vh] flex sm:flex-col-reverse  items-center bg-[#DB002F]  sticky top-20 -z-10">
        <div className="flex-1   flex items-center sm:items-start  ">
          <div className=" w-fit   pl-[10%] sm:pl-0 text-white ">
            <h1 className="text-5xl sm:leading-10 sm:text-3xl md:text-4xl text-left font-thin font-sans  ">
              A Comprehensive Branding & Digital Marketing Agency in&nbsp;
              <span className="font-bold">Malappuram!</span>
            </h1>
            <h2
              className={`text-lg sm:text-base md:hidden flex mt-8 font-extralight`}
            >
              Digital Marketing Company in Malappuram providing <br />
              result-oriented marketing solutions for brands since 2020.
            </h2>
            <h2 className="text-lg sm:text-base hidden md:flex mt-8 md:mt-2 font-extralight text-justify ">
              Digital Marketing Company in Malappuram providing result-oriented
              marketing solutions for brands since 2020.
            </h2>
            <div className="absolute md:hidden bottom-6 left-0 right-0  m-auto flex items-center justify-center w-[20px] opacity-50 h-55">
              <div className="w-2 py-4 px-3 h-[20px] border-2 border-white rounded-full opacity-75 box-content">
                <div className="w-[4px] h-[14px] rounded-full bg-white animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-initial w-[60%] md:w-[55%]   sm:w-full sm:justify-center  flex items-center justify-end">
          <Image
            src={landpage}
            alt="best digital marketing agency in malappuaram"
            className="w-[80%] md:w-full"
          />
        </div>
      </div>
    </>
  );
};

export default LandPage;
