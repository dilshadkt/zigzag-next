import { benifits, whyUs } from "@/constant";
import React from "react";

const WhyUs = () => {
  return (
    <section className=" bg-white max-w-screen-xl mx-auto  my-20 px-5 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full">
        <div className="bg-[#DB002F] p-8 rounded-xl">
          <h4 className="text-white text-xl font-medium mt-2">
            Why Work With Us
          </h4>
          <hr className="bg-gray-100 mt-4" />
          <div>
            <ul className="list-disc font-medium gap-3 flex flex-col pl-5 mt-6 text-white">
              {whyUs.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="p-8">
          <ul className="list-disc font-medium gap-3 flex flex-col ">
            {benifits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
