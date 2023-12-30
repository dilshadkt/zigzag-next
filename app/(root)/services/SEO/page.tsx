import Image from "next/image";
import React from "react";
import { data } from "@/public/services/seo/data";
import { benifits } from "@/public/services/seo/data";
import seo from "@/public/services/seo/seo.jpg";
import ServiceBox from "@/app/(root)/components/ServiceBox";
import RecentWork from "@/app/(root)/components/RecentWork";
const page = () => {
  return (
    <>
      <div className="mx-[13%] mt-9  sm:mx-5 md:mx-6">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-center  rounded-xl overflow-hidden h-[320px] sm:h-[220px]">
            <Image
              className="w-full h-full object-cover"
              src={seo}
              alt="SEO Services in Malappuram"
            />
          </div>

          <h1 className="text-center my-7 text-3xl font-semibold text-red-500">
            SEO Services in Malappuram
          </h1>
          <div className="text-2xl md:text-[20px]">
            <p className="text-justify leading-[35px] ">
              As a prominent digital marketing company rooted in Malappuram, we
              specialize in providing{" "}
              <b className="text-red-500">
                search engine optimization services
              </b>{" "}
              to position your brand at the forefront of Google search results.
              As more companies turn digital, this is the best way to drive
              organic traffic and generate high-quality leads without spending
              huge amounts on advertisements. Our SEO approach is a step-by-step
              process that continues to improve your position on Google till you
              rank No.1 on Google!
            </p>
          </div>
          <h4 className="font-semibold text-xl my-5 sm:mt-[10%]">
            Why Social Media Marketing?
          </h4>
          <div className="my-3 sm:my-2">
            <ServiceBox data={benifits} />
          </div>
          <h4 className="font-semibold text-xl my-5 sm:my-[10%]">
            Our Social Media Marketing Approach
          </h4>
          <div>
            {data.map((item) => (
              <div
                key={`${item.id}-${item.title}`}
                className={`flex ${
                  item.id % 2 === 0 && `flex-row-reverse`
                } mb-[4%] border p-4 rounded-3xl  sm:flex-col`}
              >
                <div className="flex-initial sm:w-full sm:mb-5 w-[30%] max-h-[250px]  bg-green-400 rounded-3xl overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title.split(".")[1]}
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="flex-1 flex items-center  mx-5 sm:mx-0 ">
                  <div>
                    <h3 className="font-semibold text-primary text-xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xl sm:text-lg leading-[30px] text-justify">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <RecentWork />
    </>
  );
};

export default page;
