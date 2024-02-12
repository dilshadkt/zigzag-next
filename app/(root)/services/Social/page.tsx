import ServiceBox from "@/app/(root)/components/ServiceBox";
import Image from "next/image";
import React from "react";
import { data } from "@/public/services/social/data";
import { benifits } from "@/public/services/social/data";
import social from "@/public/services/social/Strategy Planning.jpg";
import RecentWork from "@/app/(root)/components/RecentWork";
import { Metadata } from "next";
import Head from "next/head";

const Socials = () => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.zigzagdigitalsolutions.com/services/Social"
        />
        <meta
          property="og:title"
          content="Leading Social Media Marketing Agency in Malappuram"
        />
        <meta
          property="og:description"
          content="Boost your brand's online presence with the top social media marketing agency in Malappuram. Our experts specialize in social media management, advertising, and strategic campaigns to promote your brand effectively. Partner with us for exceptional digital marketing results."
        />

        <meta
          name="keywords"
          content=" Social media marketing, Social media agency, Malappuram, Digital marketing, Social media management, Social media advertising, Online presence, Brand promotion, Social media strategy, Social media campaigns, Social media experts"
        />
      </Head>
      <div className="bg-white">
        <div className="mx-[13%] pt-9 sm:mx-5 md:mx-6">
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-center bg-gray-200  rounded-xl overflow-hidden h-[320px] sm:h-[220px]">
              <Image
                className="w-full h-full object-cover"
                src={social}
                alt="Social Media Marketing in Malappuram"
              />
            </div>

            <h1 className="text-center my-7 text-3xl font-semibold text-red-500">
              Social Media Marketing in Malappuram
            </h1>
            <div className="text-2xl md:text-[20px]">
              <p className="text-justify leading-[35px] ">
                Our team of social media experts specializes in crafting
                strategic and engaging{" "}
                <b className="text-red-500">social media campaigns </b> that
                gain you worldwide brand recognition and growth. Leverage social
                media marketing with quality content that adds value, copy that
                compels you to take action, and an aesthetically pleasing feed
                that gives a lasting impression on your audience.
              </p>
            </div>
            <h2 className="font-semibold text-xl my-5 sm:mt-[10%]">
              Why Social Media Marketing?
            </h2>
            <div className="my-4">
              <ServiceBox data={benifits} />
            </div>
            <h2 className="font-semibold text-xl my-5 sm:my-[10%]">
              Our Social Media Marketing Approach
            </h2>
            <div>
              {data.map((item) => (
                <div
                  key={`${item.id}-${item.title}`}
                  className={`flex ${
                    item.id % 2 === 0 && `flex-row-reverse`
                  } mb-[4%] border p-4 rounded-3xl sm:flex-col`}
                >
                  <div className="flex-initial  sm:w-full sm:mb-5 w-[30%] max-h-[250px]  bg-green-400 rounded-3xl overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title.split(".")[1]}
                      className="w-full h-full object-cover "
                    />
                  </div>
                  <div className="flex-1 flex items-center  mx-5 sm:mx-0">
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
      </div>

      <RecentWork />
    </>
  );
};

export default Socials;

export const metadata: Metadata = {
  title: "Best Social Media Marketing in Malappuram",
  description:
    "As your trusted social media marketing agency in malappuram, we provide social media marketing services for your brand",
};
