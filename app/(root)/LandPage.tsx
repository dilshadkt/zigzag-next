import React from "react";
import Image from "next/image";
import landpage from "@/public/digital-market-agencies-malappuram-log.png";

const LandPage = () => {
  return (
    <>
      <div className=" md:px-5 2xl:px-20 px-3    bg-[#DB002F]  sticky top-20 -z-10">
        <div className="md:h-[91vh] h-screen flex flex-col-reverse md:flex-row items-center max-w-screen-xl mx-auto ">
          <div className="flex-1   flex md:items-center items-start  ">
            <div className=" w-fit   md:pl-[10%] pl-0 text-white ">
              <h1 className="lg:text-5xl sm:leading-10 text-3xl md:text-4xl text-left font-thin font-sans  ">
                A Comprehensive Branding & Digital Marketing Agency in&nbsp;
                <span className="font-bold">Malappuram!</span>
              </h1>
              <h2
                className={`md:text-lg text-base hidden md:flex mt-8 font-extralight`}
              >
                Digital Marketing Company in Malappuram providing <br />
                result-oriented marketing solutions for brands since 2020.
              </h2>

              <div className="absolute hidden bottom-6 left-0 right-0  m-auto md:flex items-center justify-center w-[20px] opacity-50 h-55">
                <div className="w-2 py-4 px-3 h-[20px] border-2 border-white rounded-full opacity-75 box-content">
                  <div className="w-[4px] h-[14px] rounded-full bg-white animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-initial lg:w-[60%] md:w-[55%]   w-full justify-center  flex items-center md:justify-end">
            <Image
              src={landpage}
              alt="best digital marketing agency in malappuaram"
              className="md:w-[80%] w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandPage;
