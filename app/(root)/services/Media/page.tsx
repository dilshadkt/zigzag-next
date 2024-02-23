import Image from "next/image";
import React from "react";
import media from "@/public/services/media/Diverse Content Formats.jpg";
import RecentWork from "@/app/(root)/components/RecentWork";
import { data } from "@/public/services/media/data";
import { Metadata } from "next";

const Medias = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-[13%] pt-9 sm:mx-5 md:mx-6">
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-center  rounded-xl overflow-hidden h-[320px] sm:h-[220px]">
              <Image
                className="w-full h-full object-cover"
                src={media}
                alt="Media Production Services in Malappuram"
              />
            </div>

            <h1 className="text-center my-7 text-3xl font-semibold text-red-500">
              Media Production Services in Malappuram
            </h1>
            <div className="text-2xl md:text-[20px]">
              <p className="text-justify leading-[35px] ">
                As a cutting-edge digital marketing agency in Malappuram, we
                specialize in bringing captivating visual narratives that
                amplify brand impact. Join us in media production, and let us
                get your brand&apos; storytelling to new heights with stunning
                visuals.
              </p>
            </div>
            <h2 className="font-semibold text-xl my-5 sm:mt-[10%]">
              Why Media Production Matters?
            </h2>
            <p className="text-justify text-xl leading-[35px]">
              Great visuals and compelling stories make you stand out in a world
              of endless information and content consumption. Media production
              is the key to engaging your audience deeper and leaving a lasting
              impression.
            </p>

            <h2 className="font-semibold text-xl my-5 sm:my-[10%]">
              Our Media Production Approach
            </h2>
            <div>
              {data.map((item) => (
                <div
                  key={`${item.id}-${item.title}`}
                  className={`flex ${
                    item.id % 2 === 0 && `flex-row-reverse`
                  } mb-[4%] border p-4 rounded-3xl sm:flex-col`}
                >
                  <div className="flex-initial sm:w-full sm:mb-5 w-[30%] max-h-[250px]  bg-gray-200 rounded-3xl overflow-hidden">
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

export default Medias;

export const metadata: Metadata = {
  title:
    " Tell Your Brand Story with Zig Zag's Media Production Services in Malappuram  ",
  description:
    "  Engage your audience with compelling video & creative content from Zig Zag, a Malappuram media production agency. We offer expert services for film, commercials, and multimedia projects    ",
  alternates: {
    canonical: `https://www.zigzagdigitalsolutions.com/services/Media`,
  },
  openGraph: {
    title: "Your Trusted Media Production Agency in Malappuram",
    description:
      "Build your brand authority with our media production agency in Malappuram. We specialise in video production, creative content, and multimedia services. Whether it's film production or commercial projects, rely on our experienced media experts for top-quality results.",
  },
  keywords:
    "Media production agency, Malappuram, Video production, Creative content, Film production, Commercial production, Multimedia production, Production services, Content creation, Media experts",
};
