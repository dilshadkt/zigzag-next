import { services } from "@/constant";
import React from "react";
import RecentWork from "../../components/RecentWork";
import Image from "next/image";
import ServiceBox from "../../components/ServiceBox";
import { notFound, redirect } from "next/navigation";
import { Metadata } from "next";

const Service = ({ params: { service } }: ServiceParams) => {
  const currentService = services[service];
  if (!currentService) {
    return notFound();
  }

  return (
    <>
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto  pt-9 px-3 md:px-10">
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-center  rounded-xl overflow-hidden md:h-[320px] h-[220px]">
              <Image
                className="w-full h-full object-cover"
                src={currentService.image}
                width={1200}
                height={500}
                alt="Best Corporate Branding Service in Malappuram"
              />
            </div>

            <h1 className="text-center my-7 text-3xl font-semibold text-red-500">
              {currentService.title}
            </h1>
            <div className="md:text-2xl text-[20px]">
              <p className="text-justify leading-[35px] ">
                {currentService.description}
              </p>
            </div>
            <h2 className="font-semibold text-xl md:my-5 mt-[10%]">
              {currentService?.why?.title}
            </h2>
            {currentService?.why?.reason && (
              <div className="my-4 ">
                <ServiceBox data={currentService?.why?.reason} />
              </div>
            )}
            {currentService?.why.description && (
              <p className="text-justify text-xl leading-[35px]">
                {currentService.why.description}
              </p>
            )}
            <h2 className="font-semibold text-xl my-5 ">
              Our Unique Corporate Branding Approach
            </h2>

            <div>
              {currentService?.unique?.map((item: any) => (
                <div
                  key={`${item.id}-${item.title}`}
                  className={`flex ${
                    item.id % 2 === 0 && `md:flex-row-reverse`
                  } mb-[4%] border p-4 rounded-3xl  flex-col md:flex-row`}
                >
                  <div className="flex-initial md:w-[30%] w-full sm:mb-5 max-h-[250px] bg-gray-200    rounded-3xl overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title.split(".")[1]}
                      className="w-full h-full object-cover "
                    />
                  </div>
                  <div className="flex-1 flex items-center  md:mx-5 mx-0 ">
                    <div>
                      <h3 className="font-semibold text-primary text-xl mb-3 mt-2 md:mt-0">
                        {item.title}
                      </h3>
                      <p className="md:text-xl text-lg leading-[30px] text-justify">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <RecentWork />
    </>
  );
};

export default Service;

export async function generateMetadata({
  params: { service },
}: ServiceParams): Promise<Metadata> {
  const serviceData = services[service];
  if (!serviceData) {
    return {
      title: "page not found",
    };
  }
  const serviceMetaData = services[service].metaData;

  return {
    title: serviceMetaData?.title,
    description: serviceMetaData?.description,
    alternates: {
      canonical: serviceMetaData?.alternates?.canonical,
    },
    openGraph: {
      title: serviceMetaData?.openGraph?.title,
      description: serviceMetaData?.openGraph?.description,
    },
    keywords: serviceMetaData?.openGraph?.keywords,
  };
}
