import Image from "next/image";
import React from "react";
import webdev from "@/public/services/webdev/Content Integration.jpg";
import RecentWork from "@/app/(root)/components/RecentWork";
import { data } from "@/public/services/webdev/data";
import { Metadata } from "next";
import Head from "next/head";

const Websites = () => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.zigzagdigitalsolutions.com/services/Website"
        />
        <meta
          property="og:title"
          content="Web Development Agency in Malappuram for High Converting Websites"
        />
        <meta
          property="og:description"
          content="Discover excellence in web development with our agency in Malappuram. We specialize in custom website development, responsive web design, e-commerce solutions, and professional web maintenance services. Trust our web development experts to bring your online business to success."
        />

        <meta
          name="keywords"
          content="Web development agency, Malappuram, Website development, Web design, Custom web development, Web development services, Responsive web design, E-commerce development, Website maintenance, Web development experts
"
        />
      </Head>
      <div className="bg-white">
        <div className="mx-[13%] pt-9 sm:mx-5 md:mx-6">
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-center  rounded-xl overflow-hidden h-[320px] sm:h-[220px]">
              <Image
                className="w-full h-full object-cover"
                src={webdev}
                alt="Website Development Services in Malappuram"
              />
            </div>

            <h1 className="text-center my-7 text-3xl font-semibold text-red-500">
              Website Development Services in Malappuram
            </h1>
            <div className="text-2xl  md:text-[20px]">
              <p className="text-justify leading-[35px] ">
                A website is a visual representation of your brand online. It
                should be a reflection of your corporate brand identity. We
                specialize in creating websites with above-the-mark user
                interfaces and user experiences that are highly captivating,
                engaging, and converting.
              </p>
            </div>
            <h2 className="font-semibold text-xl my-5 sm:mt-[10%]">
              Why Website Development Matters?
            </h2>
            <p className="text-justify text-xl leading-[35px]">
              Your website is the first impression and virtual front door to
              your business. Greet your potential customers with irresistible
              copy, offering your best services and persuading them to take the
              next step.
            </p>

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

export default Websites;
export const metadata: Metadata = {
  title: "Best Website Development Agency in Malappuram ",
  description:
    " As your trusted website development agency in malappuram, we provide complete website development and maintenance services for your brand",
};
