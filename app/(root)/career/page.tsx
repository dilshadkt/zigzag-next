import Image from "next/image";
import React from "react";
import WhyUs from "./whychoosUs";

const Career = () => {
  return (
    <>
      <section className="min-h-[50vh] bg-white max-w-screen-xl mx-auto py-16 mb-20 px-5 flex flex-col items-center">
        <h2 className="md:text-3xl text-2xl text-secondary font-medium">
          Career
        </h2>
        <p className="text-gray-700 mt-3 text-lg font-medium">
          Join the digital revolution with zigzag digital solution
        </p>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
          <div className="p-7 w-full bg-white border shadow-md rounded-xl">
            <div className="flex items-center">
              <div className="w-[50px] aspect-square  rounded-lg bg-[#DB002F] flex items-center justify-center">
                <Image
                  src={"/icons/Vector.png"}
                  alt="job icon"
                  width={20}
                  height={20}
                />
              </div>
              <h4 className="text-xl font-medium ml-2">CONTENT WRITER</h4>
            </div>
            <div className="flex items-center my-4 gap-4 ">
              <div className="flex items-center bg-[#DEDEDE] w-fit gap-2  px-3 py-1 rounded-xl">
                <h5>Experience</h5>
                <span className="w-2 h-2 rounded-full bg-[#DB002F]"></span>
                <h5 className="font-semibold">1 + year</h5>
              </div>
              <div className="flex items-center bg-[#DEDEDE] w-fit gap-2  px-3 py-1 rounded-xl">
                <h5>Experience</h5>
                <span className="w-2 h-2 rounded-full bg-[#DB002F]"></span>
                <h5 className="font-semibold">1 + year</h5>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mt-5">SKILLS</h4>
              <p className="mt-2 text-gray-700">
                Proficiency in Adobe Creative Suite (Photoshop, Illustrator,
                etc.), strong understanding of UI/UX design principles,
                responsive design expertise.
              </p>
              <button
                className="bg-[#DB002F] w-full p-3 flex items-center justify-center text-white font-medium rounded-lg
            mt-5"
              >
                APPLY NOW
              </button>
            </div>
          </div>
          <div className="p-7 w-full bg-white border shadow-md rounded-xl">
            <div className="flex items-center">
              <div className="w-[50px] aspect-square  rounded-lg bg-[#DB002F] flex items-center justify-center">
                <Image
                  src={"/icons/Vector.png"}
                  alt="job icon"
                  width={20}
                  height={20}
                />
              </div>
              <h4 className="text-xl font-medium ml-2">CONTENT WRITER</h4>
            </div>
            <div className="flex items-center my-4 gap-4 ">
              <div className="flex items-center bg-[#DEDEDE] w-fit gap-2  px-3 py-1 rounded-xl">
                <h5>Experience</h5>
                <span className="w-2 h-2 rounded-full bg-[#DB002F]"></span>
                <h5 className="font-semibold">1 + year</h5>
              </div>
              <div className="flex items-center bg-[#DEDEDE] w-fit gap-2  px-3 py-1 rounded-xl">
                <h5>Experience</h5>
                <span className="w-2 h-2 rounded-full bg-[#DB002F]"></span>
                <h5 className="font-semibold">1 + year</h5>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mt-5">SKILLS</h4>
              <p className="mt-2 text-gray-700">
                Proficiency in Adobe Creative Suite (Photoshop, Illustrator,
                etc.), strong understanding of UI/UX design principles,
                responsive design expertise.
              </p>
              <button
                className="bg-[#DB002F] w-full p-3 flex items-center justify-center text-white font-medium rounded-lg
            mt-5"
              >
                APPLY NOW
              </button>
            </div>
          </div>
        </div>
      </section>
      <WhyUs />
    </>
  );
};

export default Career;
